export default {
  RECORD_SCROLL_POSITION ({ scroll }) {
    scroll.y = window.scrollY
  },
  TOGGLE_MENU ({ menu }) {
    menu.isOpen = !menu.isOpen
  }
}
