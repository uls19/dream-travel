const btn3 = document.querySelector('.select__item5');
const poPup3 = document.querySelector('.quantity__main');
const headPop3 = document.querySelector('.quantity-color');

// вызываем элемент и скрываем если клик был за его пределами

const toggleQua = function () {
    poPup3.classList.toggle('block__show3');
    headPop3.classList.toggle('block__color3');
}


btn3.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleQua();
});

document.addEventListener("click", function (e) {
    
}); 

document.addEventListener("click", function (e) {
    const target = e.target;
    const its_pop3 = target == poPup3 || poPup3.contains(target);
    const its_btn3 = target == btn3;
    const pop_is_active = poPup3.classList.contains("block__show3");
  
    if (!its_pop3 && !its_btn3 && pop_is_active) {
      toggleQua();
    }
  });


const calApp3 = document.querySelector('.quantity-apply');//скрываем блок при клике "выполнить"
calApp3.addEventListener("click", function () {
    poPup3.classList.toggle("block__show3");
    headPop3.classList.toggle('block__color3');
});

const outQuantity = document.querySelector('.quantity__out');//скрываем блок при клике "выйти"
outQuantity.addEventListener("click", function () {
    poPup3.classList.toggle("block__show3");
    headPop3.classList.toggle('block__color3');
});
