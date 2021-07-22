import CONFIG from './config'

const API_ENDPOINT = {
  GET_ALL_RESTAURANT: `${CONFIG.BASE_URL}/list`,
  GET_DETAIL_RESTAURANT: `${CONFIG.BASE_URL}/detail`,
  GET_MEDIUM_IMAGE_RESTAURANT: `${CONFIG.BASE_IMAGE_URL}/medium`
  // NOW_PLAYING: `${CONFIG.BASE_URL}movie/now_playing?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
  // UPCOMING: `${CONFIG.BASE_URL}movie/upcoming?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
  // DETAIL: (id) => `${CONFIG.BASE_URL}movie/${id}?api_key=${CONFIG.KEY}`
}

export default API_ENDPOINT
