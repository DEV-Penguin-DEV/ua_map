const mapIcons = document.querySelectorAll('.do-more-bg__img');
const mediaQuery1024 = window.matchMedia('(min-width: 1024px)');

const onMapIcon = (mapIcon) => {
  const activeIcon = document.querySelector('.do-more-bg__img--active');
  if (activeIcon !== null) {
    activeIcon.classList.remove('do-more-bg__img--active');
  }
  mapIcon.classList.add('do-more-bg__img--active');

  const block = document.querySelector('.do-more__item');
  const blockImg = block.querySelector('img');
  const blockTitle = block.querySelector('.do-more__item-title');
  const blockText = block.querySelector('.do-more__item-text');
  const icon = mapIcon.src;
  const title = mapIcon.dataset.title;
  const text = mapIcon.dataset.text;
  blockImg.src = icon;
  blockTitle.textContent = title;
  blockText.textContent = text;
  block.classList.add('do-more__item--active');
};

export const startMap = () => {
  if (mediaQuery1024.matches) {
    onMapIcon(mapIcons[0]);
  }
  mapIcons.forEach((mapIcon) => {
    if (mediaQuery1024.matches) {
      mapIcon.addEventListener('mouseover', () => onMapIcon(mapIcon));
    } else {
      mapIcon.addEventListener('click', () => onMapIcon(mapIcon));
    }
  });
};
