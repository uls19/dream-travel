//загрузка
const mask = document.querySelector('.mask');
window.addEventListener('load', () => {
  mask.classList.add('hide');
  setTimeout(() => {
mask.remove();
  }, 600);
  });

// //menu
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

  // //po-pup
  const popOut = document.querySelector('.pop-up__button-out');
  const popEl = document.querySelector('.pop-up');

  // // вызываем элемент и скрываем если клик был за его пределами

  const togglePop = function () {
    popEl.classList.toggle("popup__show");

  }

  burgerEl.addEventListener("click", function (e) {
    e.stopPropagation();
    togglePop();
  });

  document.addEventListener("click", function (e) {
    const target = e.target;
    const its_pop = target == popEl || popEl.contains(target);
    const its_btnPop = target == burgerEl;
    const pop_is_active = popEl.classList.contains("popup__show");

    if (!its_pop && !its_btnPop && pop_is_active) {
      togglePop();
    }
  });

  //скрываем элемент кнопкой

  popOut.addEventListener("click", function () {
    popEl.classList.toggle("popup__show");
  });

  
   //application_window
  const appOut = document.querySelector('.application__out');
  const appEl = document.querySelector('.application');
  const appInt = document.querySelector('.header__button');
  const appBefore = document.querySelector('.top-before')

  // // вызываем элемент и скрываем если клик был за его пределами

  const toggleApp = function () {
    appEl.classList.toggle("app__show");
    appBefore.classList.toggle("bgd__show");
    
    }
  

 appInt.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleApp();
  });

  document.addEventListener("click", function (e) {
    const target = e.target;
    const its_app = target == appEl || appEl.contains(target);
    const its_btnApp = target == appInt;
    const pop_is_active = appEl.classList.contains("app__show");

    if (!its_app && !its_btnApp && pop_is_active) {
      toggleApp();
    }
  });

  //скрываем элемент кнопкой

  appOut.addEventListener("click", function () {
    appEl.classList.toggle("app__show");
    appBefore.classList.toggle("bgd__show");
  });

  //button pop-up mobile
    const popupBtn = document.querySelector('.pop-up__button');

    popupBtn.addEventListener("click", function (e) {
      popEl.classList.toggle("popup__show");
      e.stopPropagation();
      toggleApp();
    });
