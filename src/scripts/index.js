import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';

import '../components';

import * as data from '../DATA.json';

const btnNavigationMenu = document.querySelector('.menu__hamburger');
const navigationMenu = document.querySelector('.nav__menu');
const articlesRestaurantsBody = document.querySelector('.resto-body');

const mobileMenuToggle = (event) => {
  navigationMenu.classList.toggle('active');

  for (let i = 0; i < navigationMenu.children.length; ++i) {
    navigationMenu.children[i].addEventListener('click', (childrenEvent) => {
      navigationMenu.classList.remove('active');
    });
  }
};

articlesRestaurantsBody.innerHTML = data.restaurants
  .map((restaurant) => {
    return `<article-card class="resto-article" tabIndex="0" data-title="${restaurant.name}" data-src="${restaurant.pictureId}" data-town="${restaurant.city}" data-rating="${restaurant.rating}" data-description="${restaurant.description}"></article-card>`;
  })
  .join('');

btnNavigationMenu.addEventListener('click', mobileMenuToggle);
