import ScrollReveal from 'scrollreveal';
const mediaQuery1024 = window.matchMedia('(min-width: 1024px)');
const mobileSize = window.matchMedia('(max-width: 768px)');


ScrollReveal().reveal('.industry', {
  reset: false,
  scale: 1.4,
  duration: 1500,
  viewFactor: -1,
});

ScrollReveal().reveal('.title--animation', {
  reset: false,
  distance: '350px',
  origin: 'left',
  duration: 1000,
  viewFactor: -1,
});

ScrollReveal().reveal('.title--text', {
  reset: false,
  distance: '350px',
  origin: 'right',
  duration: 1000,
  viewFactor: -1,
});

ScrollReveal().reveal('.do-more-bg__map', {
  reset: false,
  scale: 1.4,
  duration: 1500,
  viewFactor: -1,
});

if (!mobileSize.matches) {
  ScrollReveal().reveal('.do-more-bg__img', {
    reset: false,
    scale: 2,
    duration: 1700,
    delay: 600,
    viewFactor: -1,
  });
} else {
  ScrollReveal().reveal('.do-more-bg--mobile', {
    reset: false,
    distance: '100px',
    origin: 'bottom',
    duration: 1500,
    delay: 600,
    viewFactor: -1,
  });
}

ScrollReveal().reveal('.main-footer__container-animation', {
  reset: false,
  origin: 'bottom',
  distance: '500px',
  duration: 1500,
  viewFactor: -1,
});

ScrollReveal().reveal('.first-screen__logo', {
  reset: false,
  scale: 1.4,
  duration: 2500,
  viewFactor: -1,
});

ScrollReveal().reveal('.first-screen__text', {
  reset: false,
  origin: 'bottom',
  distance: '300px',
  duration: 2500,
  viewFactor: -1,
});

ScrollReveal().reveal('.project-description__title', {
  reset: false,
  scale: 1.4,
  duration: 1500,
  viewFactor: -1,
});

ScrollReveal().reveal('.project-description__text', {
  reset: false,
  origin: 'bottom',
  distance: '150px',
  duration: 2000,
  viewFactor: -1,
});

if (mediaQuery1024.matches) {
  ScrollReveal().reveal('.about__text', {
    reset: false,
    origin: 'right',
    distance: '300px',
    duration: 1500,
    viewFactor: -1,
  });
} else {
  ScrollReveal().reveal('.about__text--1', {
    reset: false,
    origin: 'left',
    distance: '300px',
    duration: 2500,
    viewFactor: -1,
  });

  ScrollReveal().reveal('.about__text--2', {
    reset: false,
    origin: 'right',
    distance: '300px',
    duration: 2500,
    viewFactor: -1,
  });
}

ScrollReveal().reveal('.do-more__menu-item', {
  reset: false,
  scale: 1.6,
  duration: 1700,
  viewFactor: -1,
});

ScrollReveal().reveal('.do-more__button', {
  reset: false,
  origin: 'bottom',
  distance: '200px',
  duration: 1500,
  viewFactor: -1,
});

if (!mobileSize.matches) {
  ScrollReveal().reveal('.offer__title', {
    reset: false,
    origin: 'left',
    distance: '200px',
    duration: 1500,
    viewFactor: -1,
  });

  ScrollReveal().reveal('.offer__opportunity', {
    reset: false,
    origin: 'top',
    distance: '200px',
    duration: 1500,
    viewFactor: -1,
  });

  ScrollReveal().reveal('.offer__price-animation-container', {
    reset: false,
    origin: 'bottom',
    distance: '200px',
    duration: 1500,
    viewFactor: -1,
  });
}


ScrollReveal().reveal('.pmo', {
  reset: false,
  scale: 1.5,
  duration: 1500,
  viewFactor: -1,
});
