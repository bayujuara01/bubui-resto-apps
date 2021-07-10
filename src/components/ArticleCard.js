class ArticleCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this._imageUrl =
      this.getAttribute('data-src') ||
      'https://dicoding-restaurant-api.el.r.appspot.com/images/medium/41';
    this._title = this.getAttribute('data-title') || 'Viral Crown Resto';
    this._rating = this.getAttribute('data-rating') || 1;
    this._votes = this.getAttribute('data-votes') || 0;
    this._desc = this.getAttribute('data-description') || 'null';
    this._town = this.getAttribute('data-town') || 'Indonesia';
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (newValue !== oldValue) {
      this[name] = newValue;
      this.render();
    }
  }

  static get observerAttributes() {
    return [];
  }

  populateRatings(rates = 0) {
    let res = '';

    for (let i = 1; i <= 5; i++) {
      if (i <= rates) {
        res += '★';
      } else {
        res += '<span>☆</span>';
      }
    }

    return res;
  }

  render() {
    this.innerHTML = `
    
    <article class="resto__card">
      <div class="resto__img">
        <img src="${this._imageUrl}" alt="${this._title}'s photo">
      </div>
      <div class="resto__content">
        <p class="resto__tags">
          <span class="tag">${this._town}</span>
        </p>
        
        <h1 class="resto__name"><a href="#">${this._title}</a></h1>
        <p class="resto__data">
          <span class="data__rating">${this.populateRatings(
            this._rating
          )}</span>
          <span class="data__votes">(${
            this._votes > 1 ? this._votes + ' votes' : this._votes + ' vote'
          })</span>
        </p>
        
        <p class="resto__desc">${this._desc}</p>

        <button class="resto__save" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000000"><path d="M 6.0097656 2 C 4.9143111 2 4.0097656 2.9025988 4.0097656 3.9980469 L 4 22 L 12 19 L 20 22 L 20 20.556641 L 20 4 C 20 2.9069372 19.093063 2 18 2 L 6.0097656 2 z M 6.0097656 4 L 18 4 L 18 19.113281 L 12 16.863281 L 6.0019531 19.113281 L 6.0097656 4 z" fill="currentColor"/></svg>
               Save
        </button>
      </div>
    </article>
  
    `;
  }
}

if (!customElements.get('article-card'))
  customElements.define('article-card', ArticleCard);
