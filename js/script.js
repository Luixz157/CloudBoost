document.addEventListener('DOMContentLoaded', function() {
    const btnMob = document.querySelector('.btn-mobile');
    const menu = document.querySelector('.menu-mob');
    const overlayD = document.querySelector('.overlay-2');
    const closeMob = document.querySelector('.close-menu');
  
    btnMob.addEventListener('click', function() {
      menu.style.display = 'flex'; // Altera o estilo de display para flex
    });
  
    overlayD.addEventListener('click', function() {
      menu.style.display = 'none'; // Oculta o menu ao clicar no overlay
    });
  
    closeMob.addEventListener('click', function() {
      menu.style.display = 'none'; // Oculta o menu ao clicar no botão de fechar
    });
  });
