const mapIcons = document.querySelectorAll('.do-more-bg__img');
const mediaQuery1024 = window.matchMedia('(min-width: 1024px)');

const onMapIcon = (mapIcon) => {
  const block = document.querySelector('.do-more__item');
  const blockImg = block.querySelector('img');
  const icon = mapIcon.src;
  blockImg.src = icon;
  block.classList.add('do-more__item--active');
};

const onMapIconUnHover = () => {
  const block = document.querySelector('.do-more__item');
  block.classList.remove('do-more__item--active');
};

export const startMap = () => {
  mapIcons.forEach((mapIcon) => {
    if (mediaQuery1024.matches) {
      mapIcon.addEventListener('mouseover', () => onMapIcon(mapIcon));
      mapIcon.addEventListener('mouseout', onMapIconUnHover);
    } else {
      mapIcon.addEventListener('click', () => onMapIcon(mapIcon));
    }
  });
};
