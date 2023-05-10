import '../sass/style.scss';
import { startAnimation } from './animation';
import { startMap } from './map';
import { startSlider } from './slider.js';
import { startFirstScreenScroll } from './FirstScreenScroll.js';
import './swiper-slider.js';


startMap();
startSlider();
startFirstScreenScroll();
window.addEventListener('load', () => {
  startAnimation();
});
