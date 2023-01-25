const buttons = document.querySelectorAll('.btn')
for (let btn of buttons){
    btn.addEventListener('click', function () {
        console.log('вы нажали на кнопку')
    })
}

const buttonCountPlus = document.getElementById("buttonCountPlus");
const buttonCountMinus = document.getElementById("buttonCountMinus");
const count = document.getElementById("buttonCountNumber");
const count2 = document.getElementById("num");
let number = 0;
const price = 100;

buttonCountPlus.onclick = function() {
    if (number < 10) {
        number++;
        count.innerHTML = number;
        count2.value = number * price;
    }
};

buttonCountMinus.onclick = function() {
    if (number > -10) {
        number--;
        count.innerHTML = number;
        count2.value = number * price;
    }
};