import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.scss'
import App from './views/App'
import serviceWorkerRegister from './utils/ServiceWorkerRegister'

// import * as data from '../DATA.json'

const navigationButton = document.querySelector('.nav__button')
const navigationDrawer = document.querySelector('.nav__menu')
const content = document.querySelector('.main')

const app = new App({
  navigationButton,
  navigationDrawer,
  content
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  serviceWorkerRegister()
})
