const btn0 = document.querySelector('.select__item2');
const poPup0 = document.querySelector('.countries__main');
const headPop0= document.querySelector('.country-color');
// вызываем элемент и скрываем если клик был за его пределами

const toggleCountry = function () {
  poPup0.classList.toggle('block__show');
  headPop0.classList.toggle('block__color');
}


btn0.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleCountry();
});

document.addEventListener("click", function (e) {
  const target = e.target;
  const its_pop = target == poPup0 || poPup0.contains(target);
  const its_btn0 = target == btn0;
  const menu_is_active = poPup0.classList.contains("block__show");
  
  if (!its_pop && !its_btn0 && menu_is_active) {
    toggleCountry();
  }
});


//сброс фильтра  выбора страны по умолчанию

const resetBtnCon = document.querySelector('.countries-reset');
const countForm = document.querySelector('.form__countries');
resetBtnCon.addEventListener('click', (e) => {
  e.preventDefault(); // добавили, чтобы не перезагружалась страница
  countForm.reset();
resetBtnCon.classList.remove("active__button");// класс "active" будет удален у кнопки сброса
});


// Обновление состояния кнопки сброса

function updateBtnState() {
  const resetCount =document.getElementById("reset-countries");
  const radioCountries = document.querySelectorAll(
    'input[name="favorites"]:checked, input[name="group_all"]'
  );

  //Если есть выбранные радио-кнопки, активируем кнопку сброса

  if (radioCountries.length > 0) {
    resetBtnCon.disabled = false;
    resetBtnCon.classList.add("active__button");
  } else {
    resetBtnCon.disabled = true;
    resetBtnCon.classList.remove("active__button");
  }

}

const btnApp = document.querySelector('.countries-apply');//скрываем блок при клике "выполнить"
btnApp.addEventListener("click", function () {
  poPup0.classList.toggle("block__show");
  headPop0.classList.toggle('block__color');
});

const outCountry =document.querySelector('.countries__out');//скрываем блок при клике "выйти"
outCountry.addEventListener("click", function () {
  poPup0.classList.toggle("block__show");
  headPop0.classList.toggle('block__color');
});