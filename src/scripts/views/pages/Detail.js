import UrlParser from '../../utils/UrlParser'
import LikeButtonInitiator from '../../utils/LikeButtonInitiator'
import RestaurantSource from '../../data/restaurant-source'
import { createDetailHeroTemplate } from '../templates/TemplateCreator'

const Detail = {
  async render () {
    return `
    <!--========== ABOUT ==========-->
    <section class="about section container" id="about">
     
    </section>

    <!--========== MENU ==========-->
    <section class="menu section container" id="menu">
      <span class="section-subtitle">Special</span>
      <h2 class="section-title">Menu of the week</h2>

      <div class="menu__container grid">
        <div class="menu__content">
          <img src="/images/plate1.png" alt="" class="menu__img">
          <h3 class="menu__name">Barbecue salad</h3>
          <span class="menu__detail">Delicious dish</span>
          <span class="menu__preci">$22.00</span>
          <a href="#" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
        </div>

        <div class="menu__content">
          <img src="/images/plate1.png" alt="" class="menu__img">
          <h3 class="menu__name">Salad with fish</h3>
          <span class="menu__detail">Delicious dish</span>
          <span class="menu__preci">$12.00</span>
          <a href="#" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
        </div>

        <div class="menu__content">
          <img src="/images/plate1.png" alt="" class="menu__img">
          <h3 class="menu__name">Spinach salad</h3>
          <span class="menu__detail">Delicious dish</span>
          <span class="menu__preci">$9.50</span>
          <a href="#" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
        </div>
      </div>
    </section>
    <div id="likeButtonContainer"></div>`
  },
  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await RestaurantSource.getDetailById(url.id)

    const likeButtonContainer = document.querySelector('#likeButtonContainer')
    const detailHeroContainer = document.querySelector('#about')

    detailHeroContainer.innerHTML = createDetailHeroTemplate(restaurant)

    LikeButtonInitiator.init({
      likeButtonContainer,
      restaurant
    })
  }
}

export default Detail
