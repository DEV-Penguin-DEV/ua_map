// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 25,
});

swiper.slideNext();
