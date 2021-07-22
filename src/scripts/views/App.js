import DrawerInitiator from '../utils/drawerInitiator'
import UrlParser from '../utils/UrlParser'
import routes from '../routes'
class App {
  constructor ({ navigationButton, navigationDrawer, content }) {
    this._navigationButton = navigationButton
    this._navigationDrawer = navigationDrawer
    this._content = content

    this._initialAppShell()
  }

  _initialAppShell () {
    // TODO Initial drawer
    DrawerInitiator.init({
      navigationButton: this._navigationButton,
      navigationDrawer: this._navigationDrawer,
      content: this._content
    })
  }

  async renderPage () {
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]
    this._content.innerHTML = await page.render()
    await page.afterRender()
  }
}

export default App
