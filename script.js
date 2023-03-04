const naoButton = document.querySelector('#nao');

naoButton.addEventListener('mouseover', () => {
  const container = document.querySelector('.container');
  const naoButton = document.querySelector('#nao');

  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;

  const newTop = Math.floor(Math.random() * (containerHeight - 50)) + 1;
  const newLeft = Math.floor(Math.random() * (containerWidth - 100)) + 1;

  naoButton.style.top = `${newTop}px`;
  naoButton.style.left = `${newLeft}px`;
});

const simButton = document.querySelector('#sim');
const fireworksVideo = document.querySelector('#fireworks');

simButton.addEventListener('click', () => {
  fireworksVideo.play();
});

