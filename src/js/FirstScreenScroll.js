export const startFirstScreenScroll = () => {
  const scrollButton = document.querySelector('.scroll-text');

  scrollButton.addEventListener('click', () => {
    const fistScreen = document.querySelector('.first-screen');
    window.scrollTo({
      behavior: 'smooth',
      top: fistScreen.clientHeight * 0.765
    });
  });
};
