import { firestore, auth } from '~/plugins/firebase'


export default {
  async blogMetaFetchAll ({ state, commit }) {
    try {
      if (state.blogMeta.length > 0) return

      const querySnapshot = await firestore
        .collection('blogs')
        .get()

      querySnapshot.forEach(doc => {
        commit('ADD_BLOG_META', { blog: doc.data() })
      })
    }
    catch (e) {
      console.error(e)
    }
  },


  async blogMetaFetch ({ state, commit }, { handle }) {
    try {
      if (state.blogMeta.find(b => b.handle === handle)) return
      console.log('handle: ', handle)
      const querySnapshot = await firestore
        .collection('blogs')
        .where('handle', '==', handle)
        .get()

      querySnapshot.forEach(doc => {
        console.log('blogMetaFetch: ', doc.data())
        commit('ADD_BLOG_META', { blog: doc.data() })
      })
    }
    catch (e) {
      console.error(e)
    }
  },


  async commentsFetch ({ state, commit, dispatch, rootState, rootGetters }) {
    try {
      const { uid } = rootGetters['auth/authUser']
      const blogHandle = rootState.route.params.id
      const blogMeta = state.blogMeta.find(meta => meta.handle === blogHandle)
      const blogId = blogMeta.id
      console.log('commentsFetch')
      console.log(`uid: ${uid} || blogId: ${blogId} || blogHandle: ${blogHandle}`)

      // TO DO: Needs to be refactored... too many database reads!
      const querySnapshot = await firestore.collection('blogComments')
        .where('blogId', '==', blogId)
        .get()

      querySnapshot.forEach(doc => {
        if (!state.comments.find(c => c.commentId === doc.id)) {
          const data = { commentId: doc.id, ...doc.data() }
          commit('ADD_COMMENT', { comment: data })
        }
      })

      dispatch('commentsWatch')
    }
    catch (e) {
      console.error(e)
      throw e
    }
  },


  commentsWatch ({ state, commit, rootState, rootGetters }) {
    const { uid } = rootGetters['auth/authUser']
    const blogHandle = rootState.route.params.id
    const blogMeta = state.blogMeta.find(meta => meta.handle === blogHandle)
    const blogId = blogMeta.id
    console.log('commentsWatch')
    console.log(`uid: ${uid} || blogId: ${blogId} || blogHandle: ${blogHandle}`)

    // TO DO: Needs to be refactored... too many database reads!
    firestore.collection('blogComments')
      .where('blogId', '==', blogId)
      .where('uid', '==', uid)
      .onSnapshot(querySnapshot => {
        querySnapshot.forEach(doc => {
          if (!state.comments.find(c => c.commentId === doc.id)) {
            const data = { commentId: doc.id, ...doc.data() }
            commit('ADD_COMMENT', { comment: data })
          }
        })
      })
  },


  async commentCreate ({ dispatch, rootGetters }, { handle, text, parentCommentId }) {
    dispatch('commentsWatch')
    try {
      const isAuthUser = rootGetters['auth/isAuthUser']
      let authUser = rootGetters['auth/authUser']

      if (!isAuthUser) {
        await dispatch('auth/signInAnonymously', null, { root: true })
      }

      // comment data
      const data = {
        handle,
        text,
        uid: authUser.uid || auth().currentUser.uid
      }

      if (parentCommentId) data.parentCommentId = parentCommentId

      // add comment to database queue
      await firestore
        .collection('queueBlogCommentsCreate')
        .add(data)

    }
    catch (e) {
      console.error(e)
    }
  },


  async commentUpdate ({ dispatch, rootGetters }, { handle, commentId, text }) {
    try {
      const isAuthUser = rootGetters['auth/isAuthUser']
      const authUser = rootGetters['auth/authUser']

      if (!isAuthUser) {
        await dispatch('auth/signInAnonymously', null, { root: true })
      }

      // comment data
      const data = {
        handle,
        commentId,
        text,
        uid: authUser.uid
      }

      // add comment to database queue
      await firestore
        .collection('queueBlogCommentsUpdate')
        .add(data)

    }
    catch (e) {
      console.error(e)
    }
  },


  async commentDelete ({ dispatch, rootGetters }, { commentId }) {
    try {
      const isAuthUser = rootGetters['auth/isAuthUser']
      const authUser = rootGetters['auth/authUser']

      if (!isAuthUser) {
        await dispatch('auth/signInAnonymously', null, { root: true })
      }

      // comment data
      const data = {
        commentId,
        uid: authUser.uid
      }

      // add delete request to database queue
      await firestore
        .collection('queueBlogCommentsDelete')
        .add(data)

      console.log('BAM!')

    }
    catch (e) {
      console.error(e)
    }
  }
}
