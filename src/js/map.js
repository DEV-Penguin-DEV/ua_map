const mapIcons = document.querySelectorAll('.do-more-bg__img');

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
  blockImg.classList.add('animation');
  blockImg.src = icon;
  window.setTimeout(() => {
    blockImg.classList.remove('animation');
  }, 450);
  blockTitle.textContent = title;
  blockText.textContent = text;
  block.classList.add('do-more__item--active');
};

export const startMap = () => {
  onMapIcon(mapIcons[0]);
  mapIcons.forEach((mapIcon) => {
    mapIcon.addEventListener('click', () => onMapIcon(mapIcon));
  });
};
