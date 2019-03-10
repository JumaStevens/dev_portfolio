export default {
  ADD_BLOG_META (state, { blog }) {
    state.blogMeta.push(blog)
  },

  ADD_COMMENT (state, { comment }) {
    state.comments.push(comment)
  }
}
