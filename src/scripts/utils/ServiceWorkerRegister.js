import runtime from 'serviceworker-webpack-plugin/lib/runtime'

const serviceWorkerRegister = async () => {
  if ('serviceWorker' in navigator) {
    await runtime.register()
  } else {
    console.log('Service worker not supported in this browser')
  }
}

export default serviceWorkerRegister