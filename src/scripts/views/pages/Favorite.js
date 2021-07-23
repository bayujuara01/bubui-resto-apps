import API_ENDPOINT from '../../global/ApiEndpoint'
import FavoriteRestaurant from '../../utils/DatabaseHelper'

const Favorite = {
  async render () {
    return `
    <!--========== HOME ==========-->
    <section class="home" id="home">
      <div class="home__container container grid">
        <div class="home__data">
          <h1 class="home__title">Crown Group</h1>
          <h2 class="home__subtitle">Try the best food of <br> our Resto.</h2>
          <!--<a href="#" class="home__button">View Menu</a>-->
        </div>

        <img src="/images/hero-image_4.jpg" alt="" class="home__img">
      </div>
    </section>
    
    <!--========== RESTO ==========-->
    <section class="resto section container" id="resto">
      <span class="section-subtitle">Crown</span>
      <h2 class="section-title">Favorite Resto</h2>

      <div class="resto__container grid"">
        
    </section>
    `
  },
  async afterRender () {
    const restaurants = await FavoriteRestaurant.getAllRestaurant()
    const restaurantContent = document.querySelector('.resto__container')

    restaurantContent.innerHTML = restaurants.map((restaurant) => {
      return `
      <div class="resto__content">
        <img src="${API_ENDPOINT.GET_MEDIUM_IMAGE_RESTAURANT}/${restaurant.pictureId}" alt="" class="resto__img">
        <h3 class="resto__name">${restaurant.name}</h3>
        <span class="resto__detail">${restaurant.city}</span>
        <span class="resto__preci">👑 ${restaurant.rating}</span>
        <a href="#/detail/${restaurant.id}" style="background-color: var(--primary-color); color: white" class="button resto__button"><i
          class='bx bx-info-circle'></i></a>
      </div>
      `
    }).join('')
  }
}

export default Favorite
