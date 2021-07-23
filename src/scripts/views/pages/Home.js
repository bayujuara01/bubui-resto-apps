import RestaurantSource from '../../data/restaurant-source'
import API_ENDPOINT from '../../global/ApiEndpoint'

const Home = {
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

    <!--========== ABOUT ==========-->
    <section class="about section container" id="about">
      <div class="about__container  grid">
        <div class="about__data">
          <span class="section-subtitle about__initial">About us</span>
          <h2 class="section-title about__initial">We cook the best <br> tasty food</h2>
          <p class="about__description">We cook the best food in the entire city, with excellent customer service, the
            best meals and at the best price, visit us.</p>
          <a href="#" class="about__button">View Resto</a>
        </div>

        <img src="/images/about.jpg" alt="" class="about__img">
      </div>
    </section>

    <!--========== SERVICES ==========-->
    <section class="services section container" id="services">
      <span class="section-subtitle">Offering</span>
      <h2 class="section-title">Our amazing services</h2>

      <div class="services__container  grid">
        <div class="services__content">
          <img class="services__img" src="/vectors/services-eat-plate.svg" />
          <h3 class="services__title">Excellent food</h3>
          <p class="services__description">We offer our clients excellent quality services for many years, with the best
            and delicious food in the city.</p>
        </div>

        <div class="services__content">
          <img class="services__img" src="/vectors/services-fast-food.svg" />
          <h3 class="services__title">Fast food</h3>
          <p class="services__description">We offer our clients excellent quality services for many years, with the best
            and delicious food in the city.</p>
        </div>

        <div class="services__content">
          <img class="services__img" src="/vectors/services-delivery.svg" />
          <h3 class="services__title">Delivery</h3>
          <p class="services__description">We offer our clients excellent quality services for many years, with the best
            and delicious food in the city.</p>
        </div>
      </div>
    </section>

    <!--========== RESTO ==========-->
    <section class="resto section container" id="resto">
      <span class="section-subtitle">Special</span>
      <h2 class="section-title">Resto of the week</h2>

      <div class="resto__container grid"">
        
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
      </div>
    </section>`
  },
  async afterRender () {
    const restaurants = await RestaurantSource.getListAll()
    const restaurantContent = document.querySelector('.resto__container')

    // console.log(restaurants[0])

    restaurants.forEach(restaurant => {
      restaurantContent.innerHTML +=
      `
      <div class="resto__content">
        <img src="${API_ENDPOINT.GET_MEDIUM_IMAGE_RESTAURANT}/${restaurant.pictureId}" alt="" class="resto__img">
        <h3 class="resto__name">${restaurant.name}</h3>
        <span class="resto__detail">${restaurant.city}</span>
        <span class="resto__preci">👑 ${restaurant.rating}</span>
        <a href="#/detail/${restaurant.id}" style="background-color: var(--primary-color); color: white" class="button resto__button"><i
          class='bx bx-info-circle'></i></a>
      </div>
      `
    })
  }
}

export default Home
