
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

  //po-pup
  // const burgerEl = document.querySelector('.header__nav-burger');
  const popupOut = document.querySelector('.pop-up__button-out');
  const popupEl = document.querySelector('.pop-up');

  // вызываем элемент и скрываем если клик был за его пределами

  const togglePopup = function () {
    popupEl.classList.toggle("popup__show");

  }

  burgerEl.addEventListener("click", function (e) {
    e.stopPropagation();
    togglePopup();
  });

  document.addEventListener("click", function (e) {
    const target = e.target;
    const its_popup = target == popupEl || popupEl.contains(target);
    const its_btnPopup = target == burgerEl;
    const popup_is_active = popupEl.classList.contains("popup__show");

    if (!its_popup && !its_btnPopup && popup_is_active) {
      togglePopup();
    }
  });

  //скрываем элемент кнопкой

  popupOut.addEventListener("click", function () {
    popupEl.classList.toggle("popup__show");
  });
