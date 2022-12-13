// var newArr = []
//
// for (var i = 0; i <= 10; i = i + 1) {
//     newArr.push(i)
// }
// console.log(newArr)

// for (var i = 20; i >= 0; i = i - 1) {
//     console.log(i)
// }
//
// var choiceColor = prompt('Choice color (желтый, красный, зеленый)').toLowerCase().trim()
//
// var colors = {
//     red: 'красный',
//     yellow: 'желтый',
//     green: 'зеленый'
// }
//
// switch (choiceColor) {
//     case colors.red:
//         alert('STOP')
//         break
//     case colors.yellow:
//         alert('WAIT')
//         break
//     case colors.green:
//         alert('GO!')
//         break
//     default:
//         alert('ERROR!')
// }

// Функнции (Functions)

// function declaration

// var numA = Number(prompt('Передайте А: '))
// var numB = Number(prompt('Передайте Б: '))
//
// function calc(a, b) {
//     return alert(`Результат: ${a + b}`)
// }
//
// calc(numA, numB)


// function expression

// var calc = function (a, b) {
//     return console.log(a - b)
// }
//
// calc(12 , 2)


// Arrow function
// sayHi()
//
// var sayHi = () => {
//        return alert('HI')
// }

// sayHi()
//
// function sayHi() {
//     alert('HI')
// }

// lambda function

// var lamda = () => console.log('Hello, I am Lambda!')

// lamda()

// Замыкания

// function init() {
//     var name = prompt(' Введите имя: ')
//     var displayName = () => {
//         console.log(name)
//     }
//     displayName()
// }
// init()

// var userAge = Number(prompt('Введите возраст: '))
//
// function age(user) {
//     if (user >= 18) {
//         console.log('Вход разрешен!')
//     } else if (user < 18) {
//         console.log('Вход запрещён!')
//     } else {
//         console.log('Введите возраст! А не буквы!')
//     }
// }
//
// age(userAge)

// var userAge = Number(prompt('Введите возраст: '))
//
// if (userAge >= 18) {
//     function ageFunc() {
//         alert('Вход разрешен!')
//     }
// } else {
//     function ageFunc() {
//         alert('До 18 нельзя!')
//     }
// }
//
// ageFunc()
//
// var userAge = Number(prompt('Введите возраст: '))
//
// switch (userAge) {
//     case 18:
//         alert('Вход разрешен')
//         break
//     case 16:
//         alert('Вход запрещен! Ты ещё подросток')
//         break
//     default:
//         alert('Доступ запрещен!')
//         break
// }

// ES5
// var number = 0
// number = 10

// ES6
// let num = 0

// const name = 'Nurdin'

// var name = 'Adilet'
// function global() {
//     var name = 'Nurdin'
//     return console.log(name)
// }

// global()
// console.log(name)

// Анонимные функции

// let bob = () => {
//
// }

// setInterval(() => {console.log('AFTER ONE SECOND')}, 1000)


// ---------------------------- HW

// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// console.log(min(10,55))



// function name() {
//     var char = prompt('Введите имя:').length
//     console.log(char)
// }
// name()



let a = prompt('first')
let m =prompt('op')
let b = prompt('sec')


function c(num1, num2, mark) {
    switch (mark) {
        case "*":
            return num1 * num2;
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "/":
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "не делится на нуль";
            }
    }
}

alert( c( Number(a),Number(b),m) );
