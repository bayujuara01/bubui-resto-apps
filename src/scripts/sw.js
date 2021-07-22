import 'regenerator-runtime'
import CacheHelper from './utils/CacheHelper'
const { assets } = global.serviceWorkerOption

self.addEventListener('install', (event) => {
  // TODO: Caching App Shell Resource
  console.log('Installing Service Worker ...')
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']))
})

self.addEventListener('activate', (event) => {
  // TODO: Delete old caches
  console.log('Activating Service Worker ...')
  event.waitUntil(CacheHelper.deleteOldCache())
})

self.addEventListener('fetch', (event) => {
  // console.log(event.request)

  event.respondWith(CacheHelper.revalidateCache(event.request))
})
