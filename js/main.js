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

  
//кнопки слайдера

  const swiperEl = document.querySelector(".lastMinute");
  const buttonNt = document.querySelector(".last-minute__button-next");
  const buttonPv = document.querySelector(".last-minute__button-prev");

  swiperEl.onmouseover = function (e) { 
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

  swiperEl.onmouseout = function (e) { 
        buttonNt.style.opacity = '0';
        buttonPv.style.opacity = '0';
      }

  //слайдер код
  const swiperMinute = new Swiper(".lastMinute", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,

    pagination: {
      el: ".last-minute__pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".last-minute__button-next",
      prevEl: ".last-minute__button-prev",
    },

  });

  // Swiper-hotels 
  const swiperHs = document.querySelector(".hotelSwiper");
  const buttonHn = document.querySelector(".hotels__button-next");
  const buttonHp = document.querySelector(".hotels__button-prev");

  swiperHs.onmouseover = function (e) { 
  buttonHn.style.opacity = '1';
  buttonHp.style.opacity = '1';
  }

  buttonHn.onmouseover = function (e) {
    buttonHn.style.opacity = '1';
    buttonHp.style.opacity = '1';
  }

  buttonHp.onmouseover = function (e) {
    buttonHn.style.opacity = '1';
    buttonHp.style.opacity = '1';
  }

  swiperHs.onmouseout = function (e) { 
        buttonHn.style.opacity = '0';
        buttonHp.style.opacity = '0';
      }

  const swiperHotel = new Swiper(".hotelSwiper", {
    speed: 500,
    effect: 'coverflow',
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: -30,
      depth: 150,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,

    pagination: {
      el: ".hotels__pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".hotels__button-next",
      prevEl: ".hotels__button-prev",
    }
  });

    // //карточки отелей дополнительно
    
    const hotelBtn = document.querySelector('.hotels__button');
    const hotelEl = document.querySelector('.hotels-items-in');
    // вызываем элемент и скрываем если клик был за его пределами
  
    const toggleItems = function () {
      hotelEl.classList.toggle("items__show");
    }
  
    hotelBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleItems();
    });
  
    document.addEventListener("click", function (e) {
      const target = e.target;
      const hts_menu = target == hotelEl || hotelEl.contains(target);
      const hts_btnHotel = target == hotelBtn;
      const menu_is_active = hotelEl.classList.contains("items__show");
     
      if (!hts_menu && !hts_btnHotel && menu_is_active) {
        toggleItems();
      }
    });


   // кнопки слайдера comments

  const swiperCl = document.querySelector(".comment");
  const buttonCnt = document.querySelector(".comment__button-next");
  const buttonCpv = document.querySelector(".comment__button-prev");

  swiperCl.onmouseover = function (e) { 
  buttonCnt.style.opacity = '1';
  buttonCpv.style.opacity = '1';
  }

  buttonCnt.onmouseover = function (e) {
    buttonCnt.style.opacity = '1';
    buttonCpv.style.opacity = '1';
  }

  buttonCpv.onmouseover = function (e) {
    buttonCnt.style.opacity = '1';
    buttonCpv.style.opacity = '1';
  }

  swiperCl.onmouseout = function (e) { 
        buttonCnt.style.opacity = '0';
        buttonCpv.style.opacity = '0';
      }

    //slider-comments
    const swiperComment = new Swiper(".comment", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
  
      pagination: {
        el: ".comment__pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".comment__button-next",
        prevEl: ".comment__button-prev",
      }
    });


//дополнительно читать

const newsBtn = document.querySelector('.news__button');
const newsItem1 = document.querySelector('.news-info__item1');
const newsItem3 = document.querySelector('.news-info__item3');
const newsItem5= document.querySelector('.news-info__item5');
const newsItem7 = document.querySelector('.news-info__item7');

// вызываем элемент и скрываем если клик был за его пределами

const toggleNews = function () {
  newsItem1.classList.toggle("new__show");
  newsItem3.classList.toggle("new__show");
  newsItem5.classList.toggle("new__show");
  newsItem7.classList.toggle("new__show");
}

  newsBtn.addEventListener ("click", function (e) {
    const width = window.innerWidth;
    console.log(width);
    if(width < 576) { 
    e.stopPropagation();
    toggleNews();
    }
  });
 
document.addEventListener("click", function (e) {
  const target = e.target;
  const news_menu1 = target == newsItem1 || newsItem1.contains(target);
  const news_menu3 = target == newsItem3 || newsItem3.contains(target);
  const news_menu5 = target == newsItem5 || newsItem5.contains(target);
  const news_menu7 = target == newsItem7 || newsItem7.contains(target);

  const news_btnNews = target == newsBtn;
  const menu_is_active1 = newsItem1.classList.contains("new__show");
  const menu_is_active3 = newsItem3.classList.contains("new__show");
  const menu_is_active5 = newsItem5.classList.contains("new__show");
  const menu_is_active7 = newsItem7.classList.contains("new__show");
 
  if (!news_menu1 && !news_menu3 && !news_menu5 && !news_menu7 && !news_btnNews && menu_is_active1 && menu_is_active3 && menu_is_active5 && menu_is_active7) {
    toggleNews();
  }
});


     

   


  