
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


//filters-popup-block
const filterBtn = document.querySelector('.variants__right-button');
const filterSelect = document.querySelector('.filters__content');

// // вызываем элемент и скрываем если клик был за его пределами

const toggleFilter = function () {
  filterSelect.classList.toggle("filters__show");

}

filterBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleFilter();
});

document.addEventListener("click", function (e) {
  const target = e.target;
  const its_fil = target == filterSelect || filterSelect.contains(target);
  const its_filterBtn = target == filterBtn;
  const pop_is_active = filterSelect.classList.contains("filters__show");

  if (!its_fil && !its_filterBtn && pop_is_active) {
    toggleFilter();
  }
});

//скрываем элемент кнопкой

const filtersOut = document.querySelector('.filters__out');

filtersOut.addEventListener("click", function () {
  filterSelect.classList.toggle("filters__show");
});

// //filters-scroll-slider
// const swiperFl = new Swiper(".myFilters", {
//   direction: "vertical",
//   slidesPerView: "auto",
//   freeMode: true,
//   scrollbar: {
//     el: ".filters__swiper-scrollbar",
//   },
//   mousewheel: true,
// });


// двойной ползунок

const rangeSlider = document.getElementById('range-slider');

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [3, 15],
    connect: true,
    step: 1,
    range: {
      'min': [1],
      'max': [31]
    }
  });


  const input0 = document.getElementById('input-0');
  const input1 = document.getElementById('input-1');
  const inputs = [input0, input1];

  rangeSlider.noUiSlider.on('update', function (values, handle) {

    inputs[handle].value = Math.round(values[handle]);
  });

  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    // console.log(arr);

    rangeSlider.noUiSlider.set(arr);

  };

  inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {

      // console.log(index);

    setRangeSlider(index, e.currentTarget.value);

    });
  });
}


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
const swiper = new Swiper(".myVariants", {
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


