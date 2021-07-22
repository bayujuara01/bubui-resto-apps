import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';

import * as data from '../DATA.json';
import '../components/NavigationBar';

const navigationToggle = document.querySelector('.nav__toggle');
const navigationDrawer = document.querySelector('.nav__menu');

navigationToggle.addEventListener('click', (event) => {
  navigationDrawer.classList.toggle('active');
});
