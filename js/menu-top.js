//загрузка
const mask = document.querySelector('.mask');
window.addEventListener('load', () => {
  mask.classList.add('hide');
  setTimeout(() => {
mask.remove();
  }, 600);
  });

// //Header-Phone
const menuSvg = document.querySelector('.button-phone');
const phoneEl = document.querySelector('.header__nav-phone');
// вызываем элемент и скрываем если клик был за его пределами

const togglePhone = function () {
  phoneEl.classList.toggle("phone__show");
}

menuSvg.addEventListener("click", function (e) {
  e.stopPropagation();
  togglePhone();
});

document.addEventListener("click", function (e) {
  const target = e.target;
  const its_phone = target == phoneEl || phoneEl.contains(target);
  const its_btnSvg = target == menuSvg;
  const menu_is_active = phoneEl.classList.contains("phone__show");
  if (!its_phone && !its_btnSvg && menu_is_active) {
    togglePhone();
  }
});

// //Header-location
const menuSvg1 = document.querySelector('.button-location');
const locationEl = document.querySelector('.header__nav-location');
// вызываем элемент и скрываем если клик был за его пределами

const toggleLocation = function () {
  locationEl.classList.toggle("location__show");
}

menuSvg1.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleLocation();
});

document.addEventListener("click", function (e) {
  const target = e.target;
  const its_location = target == locationEl || locationEl.contains(target);
  const its_btnSvg1 = target == menuSvg1;
  const menu_is_active = locationEl.classList.contains("location__show");
  if (!its_location && !its_btnSvg1 && menu_is_active) {
    toggleLocation();
  }
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
