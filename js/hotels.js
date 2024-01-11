
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
