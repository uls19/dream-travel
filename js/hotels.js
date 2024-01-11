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


    //кнопки слайдера Hotels

  const swiperHl = document.querySelector(".lastHotels");
  const buttonNt = document.querySelector(".hotels__button-next");
  const buttonPv = document.querySelector(".hotels__button-prev");

  swiperHl.onmouseover = function (e) { 
  buttonNt.style.opacity = '1';
  buttonPv.style.opacity = '1';
  }

  buttonNt.onmouseover = function (e) {
    buttonNt.style.opacity = '1';
    buttonPv.style.opacity = '1';
  }

  buttonPv.onmouseover = function (e) {
    buttonNt.style.opacity = '1';
    buttonPv.style.opacity = '1';
  }

  swiperHl.onmouseout = function (e) { 
        buttonNt.style.opacity = '0';
        buttonPv.style.opacity = '0';
      }

  //слайдер Hotels код
  const swiperHotels = new Swiper(".lastHotels", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    
    pagination: {
      el: ".hotels__pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".hotels__button-next",
      prevEl: ".hotels__button-prev",
    },

  });

    //кнопки слайдера Bests

    const swiperBl = document.querySelector(".lastBestsellers");
    const buttonBnt = document.querySelector(".bestsellers__button-next");
    const buttonBpv = document.querySelector(".bestsellers__button-prev");
  
    swiperBl.onmouseover = function (e) { 
    buttonBnt.style.opacity = '1';
    buttonBpv.style.opacity = '1';
    }
  
    buttonBnt.onmouseover = function (e) {
      buttonBnt.style.opacity = '1';
      buttonBpv.style.opacity = '1';
    }
  
    buttonBpv.onmouseover = function (e) {
      buttonBnt.style.opacity = '1';
      buttonBpv.style.opacity = '1';
    }
  
    swiperBl.onmouseout = function (e) { 
          buttonBnt.style.opacity = '0';
          buttonBpv.style.opacity = '0';
        }


   //слайдер Bests код
   const swiperBests = new Swiper(".lastBestsellers", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    
    pagination: {
      el: ".bestsellers__pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".bestsellers__button-next",
      prevEl: ".bestsellers__button-prev",
    },
  });


   //кнопки слайдера Rating

   const swiperRl = document.querySelector(".lastRating");
   const buttonRnt = document.querySelector(".rating__button-next");
   const buttonRpv = document.querySelector(".rating__button-prev");
 
   swiperRl.onmouseover = function (e) { 
   buttonRnt.style.opacity = '1';
   buttonRpv.style.opacity = '1';
   }
 
   buttonRnt.onmouseover = function (e) {
     buttonRnt.style.opacity = '1';
     buttonRpv.style.opacity = '1';
   }
 
   buttonRpv.onmouseover = function (e) {
     buttonRnt.style.opacity = '1';
     buttonRpv.style.opacity = '1';
   }
 
   swiperRl.onmouseout = function (e) { 
         buttonRnt.style.opacity = '0';
         buttonRpv.style.opacity = '0';
       }


  //слайдер Rating код
  const swiperRating = new Swiper(".lastRating", {
   slidesPerView: 2,
   spaceBetween: 30,
   loop: true,
   
   pagination: {
     el: ".rating__pagination",
     type: "progressbar",
   },
   navigation: {
     nextEl: ".rating__button-next",
     prevEl: ".rating__button-prev",
   },

 });


// кнопки слайдера allVariants

const swiperAllVar = document.querySelector(".all-variants-wrapper");
const buttonVan = document.querySelector(".all-variants__button-next");
const buttonVap = document.querySelector(".all-variants__button-prev");

swiperAllVar.onmouseover = function (e) { 
buttonVan.style.opacity = '1';
buttonVap.style.opacity = '1';
}

buttonVan.onmouseover = function (e) {
  buttonVan.style.opacity = '1';
  buttonVap.style.opacity = '1';
}

buttonVap.onmouseover = function (e) {
 buttonVan.style.opacity = '1';
 buttonVap.style.opacity = '1';
}

swiperAllVar.onmouseout = function (e) { 
      buttonVan.style.opacity = '0';
      buttonVap.style.opacity = '0';
    }


//слайдер allVariants код

var swiperAllVarian = new Swiper(".allVariants", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".all-variants__button-prev",
  },
});
