
const btn1 = document.querySelector('.select__item3');
const poPup1 = document.querySelector('.calendar__main');
const headPop1 = document.querySelector('.calen-color');

// вызываем элемент и скрываем если клик был за его пределами

const toggleCal = function () {
  poPup1.classList.toggle('block__show1');
  headPop1.classList.toggle('block__color1');
}


btn1.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleCal();
});

document.addEventListener("click", function (e) {
  const target = e.target;
  const its_pop1 = target == poPup1 || poPup1.contains(target);
  const its_btn1 = target == btn1;

//чтобы календарь не пропадал при кликах на даты
  if (!its_pop1 && !its_btn1 && !target.matches(".poPup1, .btn1, .vanilla-calendar-day__btn, .vanilla-calendar-arrow, .vanilla-calendar-month, .vanilla-calendar-months__month, .vanilla-calendar-months__month_selected, .vanilla-calendar-year, .vanilla-calendar-years__year") && poPup1.classList.contains("block__show1")) {
    toggleCal(); 
  }
});

//сброс и изменение цвета кнопки сброса
const datBtn = document.getElementById('calendar');
const calenRes = document.querySelector('.calen-reset');
let isFirstClick = true;

datBtn.addEventListener("click", function () {
  if (isFirstClick) {
    calenRes.classList.add('block__color1');
    isFirstClick = false;
  }
});

calenRes.addEventListener('click', function () {
  calendar.update({
    dates: true,
  });
  calenRes.classList.remove('block__color1');
  isFirstClick = true;
});

//календарь настройки и инициализация

const options = {
  type: 'default',
  settings: {
    lang: 'define',
    range: {
      disablePast: true,
    },
    selection: {
      day: 'multiple-ranged',
    },
    visibility: {
      weekend: false,
      daysOutside: false,
    },
  },
  locale: {
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    weekday: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
  }
};

const calendar = new VanillaCalendar('#calendar', options);
calendar.init();


const calApp = document.querySelector('.calen-apply');//скрываем блок при клике "выполнить"
calApp.addEventListener("click", function () {
  poPup1.classList.toggle("block__show1");
  headPop1.classList.toggle('block__color1');
});

const outCalendar = document.querySelector('.calendar__out');//скрываем блок при клике "выйти"
outCalendar.addEventListener("click", function () {
  poPup1.classList.toggle("block__show1");
  headPop1.classList.toggle('block__color1');
});

