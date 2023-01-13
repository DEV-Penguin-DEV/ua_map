import '../sass/style.scss';
import { startAnimation } from './animation';
import ScrollReveal from 'scrollreveal';

startAnimation();

ScrollReveal().reveal('.industry', {
  reset: true,
  scale: 1.4,
  duration: 1500,
});

ScrollReveal().reveal('.title--animation', {
  reset: true,
  distance: '350px',
  origin: 'left',
  duration: 1000,
});

ScrollReveal().reveal('.title--text', {
  reset: true,
  distance: '350px',
  origin: 'right',
  duration: 1000,
});

ScrollReveal().reveal('.do-more__item--active', {
  reset: true,
  distance: '350px',
  origin: 'right',
  duration: 1000,
  delay: 1000,
});

ScrollReveal().reveal('.do-more-bg__map', {
  reset: true,
  scale: 1.4,
  duration: 1500,
});

ScrollReveal().reveal('.do-more-bg__img', {
  reset: true,
  scale: 2,
  duration: 1700,
  delay: 600,
});

ScrollReveal().reveal('.main-footer__container-animation', {
  reset: true,
  origin: 'bottom',
  distance: '500px',
  duration: 1500,
});
