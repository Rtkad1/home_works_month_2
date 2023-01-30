var num = 1;
while (num < 20) {
    if (num % 2 === 0) {
        document.write(num + '<br>');
    }
    num++;
}


let sum = 0;
let number = 0;

do {
    sum += number;
    number = parseInt(prompt('Введите число: '));
} while(number >= 0)

console.log(`Сумма равна ${sum}.`);