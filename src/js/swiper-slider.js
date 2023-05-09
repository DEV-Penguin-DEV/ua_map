// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

const container = document.querySelector('.swiper');
// eslint-disable-next-line no-unused-vars
const swiper = new Swiper(container, {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    400: {
      spaceBetween: 40,
    },
    495: {
      slidesPerView: 4
    },

  },
  on: {
    init: function () {
      const prevEl = document.querySelector('.swiper-button-prev');
      const nextEl = document.querySelector('.swiper-button-next');

      prevEl.addEventListener('click', (e) => {
        e.preventDefault();
        swiper.slidePrev();
      });

      nextEl.addEventListener('click', (e) => {
        e.preventDefault();
        swiper.slideNext();
      });
    }
  }
});

