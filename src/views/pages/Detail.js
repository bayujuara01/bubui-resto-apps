const Detail = {
  async render () {
    return `
    <!--========== ABOUT ==========-->
    <section class="about section container" id="about">
      <div class="about__container  grid">
        <div class="about__data">
          <span class="section-subtitle about__initial">About us</span>
          <h2 class="section-title about__initial">We cook the best <br> tasty food</h2>
          <p class="about__description">We cook the best food in the entire city, with excellent customer service, the
            best meals and at the best price, visit us.</p>
          <a href="#" class="button">Explore history</a>
        </div>

        <img src="/images/about.jpg" alt="" class="about__img">
      </div>
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
    </section>`
  },
  async afterRender () {

  }
}

export default Detail
