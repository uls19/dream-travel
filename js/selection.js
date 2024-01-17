
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
const filtersApp = document.querySelector('.button-apply');


filtersOut.addEventListener("click", function () {
  filterSelect.classList.toggle("filters__show");
});

filtersApp.addEventListener("click", function () {
  filterSelect.classList.toggle("filters__show");
});


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
    updateButtonState(); // Обновление состояния кнопки сброса
  });

  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    // console.log(arr);

    rangeSlider.noUiSlider.set(arr);
    updateButtonState(); // Обновление состояния кнопки сброса
    
  };

  inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {

      // console.log(index);

      setRangeSlider(index, e.currentTarget.value);
    });
  });
}

//сброс фильтра по умолчанию

const resetBtn = document.querySelector('.button-reset');
const formTop = document.querySelector('.form');
resetBtn.addEventListener('click', (e) => {
  e.preventDefault(); // добавили, чтобы не перезагружалась страница
  formTop.reset();
  rangeSlider.noUiSlider.reset();
  resetButton.classList.remove("active");// класс "active" будет удален у кнопки сброса
});


// Обновление состояния кнопки сброса

function updateButtonState() {
  var resetButton = document.getElementById("resetButton");
  var radioButtons = document.querySelectorAll(
    'input[name="group1"]:checked, input[name="group2"], input[name="group3"], input[name="group4"]:checked, input[name="group5"]:checked, input[name="group6"]'
  );

  var isSliderActive = false;

  // Проверка, есть ли активные ползунки

  var inputs = document.getElementsByClassName("filters-price__input");
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value !== "") {
      isSliderActive = true;
      break;
    }
  }
  //Если есть выбранные радио-кнопки или активные ползунки, активируем кнопку сброса

  if (radioButtons.length > 0 || isSliderActive) {
    resetButton.disabled = false;
    resetButton.classList.add("active");
  } else {
    resetButton.disabled = true;
    resetButton.classList.remove("active");
  }

}

// Удаление класса "active" при загрузке страницы

window.addEventListener("load", function() {
  var resetButton = document.getElementById("resetButton");
  resetButton.classList.remove("active");
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


