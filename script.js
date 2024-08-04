document.addEventListener('DOMContentLoaded', () => {
  const naoButton = document.querySelector('#nao');
  const simButton = document.querySelector('#sim');
  const fireworksVideo = document.querySelector('#fireworks');
  const container = document.querySelector('.container');

  // Função para mover o botão "não"
  const moveNaoButton = () => {
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
     
  // Dimensões fixas do botão "não"
     const buttonWidth = naoButton.offsetWidth;
     const buttonHeight = naoButton.offsetHeight;

     const newTop = Math.floor(Math.random() * (containerHeight - buttonHeight));
     const newLeft = Math.floor(Math.random() * (containerWidth - buttonWidth));

    naoButton.style.position = 'absolute'; 
    naoButton.style.top = `${newTop}px`;
    naoButton.style.left = `${newLeft}px`;
  };

  // mouseover "não"
  naoButton.addEventListener('mouseover', moveNaoButton);

  // eventos do click = sim
  simButton.addEventListener('click', () => {
    fireworksVideo.play();
  });
});
