import { firestore } from '~/plugins/firebase'


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


  async commentCreate ({ dispatch, rootGetters }, { handle, text, parentCommentId }) {
    try {
      const isAuthUser = rootGetters['auth/isAuthUser']
      const authUser = rootGetters['auth/authUser']

      if (!isAuthUser) {
        await dispatch('auth/signInAnonymously', null, { root: true })
      }

      // comment data
      const data = {
        handle,
        text,
        uid: authUser.uid
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


  async commentDelete ({ dispatch, rootGetters }, { text, commentId }) {
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

      // add comment to database queue
      await firestore
        .collection('queueBlogCommentsDelete')
        .add(data)

    }
    catch (e) {
      console.error(e)
    }
  }
}
