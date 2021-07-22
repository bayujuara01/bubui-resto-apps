class NavigationBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render().eventListener();
  }
  eventListener() {
    this.addEventListener('click', this);
    return this;
  }

  render() {
    this.innerHTML = `
    <nav class="nav container">
        <a href="#" class="nav__logo">Tasty</a>

        <div class="nav__menu" id="nav-menu">
          <ul class="nav__list">
            <li class="nav__item"><a href="#home" class="nav__link active-link">Home</a></li>
            <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
            <li class="nav__item"><a href="#services" class="nav__link">Services</a></li>
            <li class="nav__item"><a href="#menu" class="nav__link">Menu</a></li>
            <li class="nav__item"><a href="#contact" class="nav__link">Contact us</a></li>

            <li><i class='bx bx-moon change-theme' id="theme-button"></i></li>
          </ul>
        </div>

        <div class="nav__toggle" id="nav-toggle">
          <i class='bx bx-menu'></i>
        </div>
      </nav>
    `;

    return this;
  }
}

if (!customElements.get('navigation-bar'))
  customElements.define('navigation-bar', NavigationBar);
