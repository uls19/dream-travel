
  //variants-popup-block
  const varBtn = document.querySelector('.variants__select-link');
  const varSelect = document.querySelector('.variants__select-popup');
    
  // // вызываем элемент и скрываем если клик был за его пределами
  
  const toggleVar = function () {
    varSelect.classList.toggle("var__show");
  
  }
  
  varBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleVar();
  });
  
  document.addEventListener("click", function (e) {
    const target = e.target;
    const its_var = target == varSelect || varSelect.contains(target);
    const its_varBtn = target == varBtn;
    const pop_is_active = varSelect.classList.contains("var__show");
  
    if (!its_var && !its_varBtn && pop_is_active) {
      toggleVar();
    }
  });

 // кнопки слайдера 

 const swiperVr = document.querySelector(".swiper-wrapper");
 const buttonVrn = document.querySelector(".variants__button-next");
 const buttonVrp = document.querySelector(".variants__button-prev");

 swiperVr.onmouseover = function (e) { 
 buttonVrn.style.opacity = '1';
 buttonVrp.style.opacity = '1';
 }

 buttonVrn.onmouseover = function (e) {
   buttonVrn.style.opacity = '1';
   buttonVrp.style.opacity = '1';
 }

 buttonVrp.onmouseover = function (e) {
  buttonVrn.style.opacity = '1';
  buttonVrp.style.opacity = '1';
 }

 swiperVr.onmouseout = function (e) { 
       buttonVrn.style.opacity = '0';
       buttonVrp.style.opacity = '0';
     }



//swiper-slider
  var swiper = new Swiper(".myVariants", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".button-next",
      prevEl: ".variants__button-prev",
    },
  });