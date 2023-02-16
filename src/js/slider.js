const controlers = document.querySelectorAll('.offer__slider-button');
const offers = document.querySelectorAll('.offer');

const changeActiveElement = (isLeft) => {
  let activeOffer;
  let activeId;
  offers.forEach((offer, i) => {
    if (offer.classList.contains('offer--active')) {
      activeOffer = offer;
      activeId = i;
    }
  });

  if (activeOffer.classList.contains('offer--active')) {
    if (isLeft) {
      if (activeId - 1 < 0) {
        offers[offers.length - 1].classList.add('offer--active');
      } else {
        offers[activeId - 1].classList.add('offer--active');
      }

      activeOffer.classList.remove('offer--active');
    } else {
      if (activeId + 1 >= offers.length) {
        offers[0].classList.add('offer--active');
      } else {
        offers[activeId + 1].classList.add('offer--active');
      }

      activeOffer.classList.remove('offer--active');
    }
  }
};

const onControlerClick = (controler) => {
  if (controler.classList.contains('offer__slider-button')) {
    if (controler.classList.contains('offer__slider-button--left')) {
      changeActiveElement(true);
    } else {
      changeActiveElement(false);
    }
  }
};


export const startSlider = () => {
  controlers.forEach((controler, i) => {
    controler.addEventListener('click', () => onControlerClick(controler, i));
  });
};
