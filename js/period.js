const btn2 = document.querySelector('.select__item4');
const poPup2 = document.querySelector('.period__main');
const headPop2 = document.querySelector('.period-color');

// вызываем элемент и скрываем если клик был за его пределами

const togglePer = function () {
    poPup2.classList.toggle('block__show2');
    headPop2.classList.toggle('block__color2');
}


btn2.addEventListener("click", function (e) {
    e.stopPropagation();
    togglePer();
});

document.addEventListener("click", function (e) {
    const target = e.target;
    const its_pop2 = target == poPup2 || poPup2.contains(target);
    const its_btn2 = target == btn2;

    //чтобы календарь не пропадал при кликах на даты

    if (!its_pop2 && !its_btn2 && !target.matches(".poPup2, .btn2, .vanilla-calendar-day__btn") && poPup2.classList.contains("block__show2")) {
        togglePer();
    }
});

//сброс и изменение цвета кнопки сброса

const datBtn2 = document.getElementById('period');
const calenRes2 = document.querySelector('.period-reset');
let isFirstClick2 = true;

datBtn2.addEventListener("click", function () {
    if (isFirstClick2) {
        calenRes2.classList.add('block__color2');
        isFirstClick2 = false;
    }
});

calenRes2.addEventListener('click', function () {
    period.update({
        dates: true,
    });
    calenRes2.classList.remove('block__color2');
    isFirstClick2 = true;
});

//календарь настройки и инициализация

const options2 = {
    
    type: 'default',

    settings: {
        range: {         
        disablePast: false, 
        },
        selection: {
            month: false,
            year: false,
            day: 'multiple-ranged',
        },
        visibility: {
            weekend: false,
            today: false,
            daysOutside: false,
        },
    },
};

const period = new VanillaCalendar('#period', options2);
period.init();


const calApp2 = document.querySelector('.period-apply');//скрываем блок при клике "выполнить"
calApp2.addEventListener("click", function () {
    poPup2.classList.toggle("block__show2");
    headPop2.classList.toggle('block__color2');
});

const outPeriod = document.querySelector('.period__out');//скрываем блок при клике "выйти"
outPeriod.addEventListener("click", function () {
    poPup2.classList.toggle("block__show2");
    headPop2.classList.toggle('block__color2');
});

