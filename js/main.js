const burgerPl = document.querySelector('.header__nav-burger');
// const burgerOl = document.querySelector('.line__out');
const menuNav = document.querySelector('.header__menu');
burgerPl.addEventListener("click", function() {
menuNav.classList.toggle('menu__show')
});
// burgerOl.addEventListener("click", function() {
// menuNav.classList.toggle('menu__show');
// });