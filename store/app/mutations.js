export default {
  RECORD_SCROLL_POSITION ({ scroll }) {
    scroll.y = window.scrollY
  },
  TOGGLE_MENU ({ menu }) {
    menu.isOpen = !menu.isOpen
  },
  OPEN_DRAWER(state, id) {
    state.drawer = id
  },
  CLOSE_DRAWER(state) {
    state.drawer = ''
  }
}
