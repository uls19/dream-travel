
const burgerEl = document.querySelector('.header__nav-burger');
  const menuEl = document.querySelector('.header__menu');
 
  // вызываем элемент и скрываем если клик был за его пределами

    const toggleMenu = function () {
    menuEl.classList.toggle("menu__show");

  }

  burgerEl.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMenu();
  });

  document.addEventListener("click", function (e) {
    const target = e.target;
    const its_menu = target == menuEl || menuEl.contains(target);
    const its_btnMenu = target == burgerEl;
    const menu_is_active = menuEl.classList.contains("menu__show");

    if (!its_menu && !its_btnMenu && menu_is_active) {
      toggleMenu();
    }
  });
