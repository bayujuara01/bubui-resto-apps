const DrawerInitiator = {
  init ({ navigationButton, navigationDrawer, content }) {
    navigationButton.addEventListener('click', (event) => {
      this._toggleDrawer(event, navigationDrawer)
    })
    content.addEventListener('click', (event) => {
      this._toggleDrawer(event, navigationDrawer)
    })
  },
  _toggleDrawer (event, drawer) {
    event.stopPropagation()
    drawer.classList.toggle('active')
  },
  _closeDrawer (event, drawer) {
    event.stopPropagation()
    drawer.classList.remove('active')
  }
}

export default DrawerInitiator
