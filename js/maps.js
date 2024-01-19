//загрузка
const mask = document.querySelector('.mask');
window.addEventListener('load', () => {
  mask.classList.add('hide');
  setTimeout(() => {
mask.remove();
  }, 600);
  });


  //очистить карту
  const resetBtm = document.querySelector('.maps__top-button');
  const formMaps = document.querySelector('.maps__form');
  resetBtm.addEventListener('click', (e) => {
    e.preventDefault(); // добавили, чтобы не перезагружалась страница
    formMaps.reset();
  });