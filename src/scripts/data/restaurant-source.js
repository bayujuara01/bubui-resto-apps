import API_ENDPOINT from '../global/ApiEndpoint'

class RestaurantSource {
  static async getListAll () {
    const response = await fetch(API_ENDPOINT.GET_ALL_RESTAURANT)
    const responseJson = await response.json()
    return responseJson.restaurants
  }

  static async getDetailById (id) {
    const response = await fetch(`${API_ENDPOINT.GET_DETAIL_RESTAURANT}/${id}`)
    const responseJson = response.json()
    return responseJson.results
  }
}

export default RestaurantSource
