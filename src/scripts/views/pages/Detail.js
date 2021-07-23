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
      <span class="section-subtitle">Special Menu</span>
      <h2 class="section-title">Crown Food</h2>

      <div class="menu__container grid" id="menu-food"></div>

      <br />
      <br />
      <h2 class="section-title">Crown Drink</h2>

      <div class="menu__container grid" id="menu-drink"></div>
    </section>
    <div id="likeButtonContainer"></div>`
  },
  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await RestaurantSource.getDetailById(url.id)

    const likeButtonContainer = document.querySelector('#likeButtonContainer')
    const detailHeroContainer = document.querySelector('#about')
    const menuFoodContainer = document.querySelector('#menu-food')
    const menuDrinkContainer = document.querySelector('#menu-drink')

    detailHeroContainer.innerHTML = createDetailHeroTemplate(restaurant)

    LikeButtonInitiator.init({
      likeButtonContainer,
      restaurant
    })

    // TODO Split code Render menu template
    menuFoodContainer.innerHTML = restaurant.menus.foods.map((food) => {
      return `
        <div class="menu__content">
          <img src="/images/plate1.png" alt="${food.name}'s Picture" class="menu__img">
          <h3 class="menu__name">${food.name}</h3>
          <span class="menu__detail">👑</span>
          <span class="menu__preci">$5.00</span>
        </div>
      `
    }).join('')

    menuDrinkContainer.innerHTML = restaurant.menus.drinks.map((drink) => {
      return `
        <div class="menu__content">
          <img src="/images/plate1.png" alt="${drink.name}'s Picture" class="menu__img">
          <h3 class="menu__name">${drink.name}</h3>
          <span class="menu__detail">👑</span>
          <span class="menu__preci">$5.00</span>
        </div>
      `
    }).join('')
  }
}

export default Detail
