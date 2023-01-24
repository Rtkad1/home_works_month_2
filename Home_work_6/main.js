// ES5

// var num = 0

//ES6

// let num = 0
// const COLOR = '#ffffff'


// b = 20
// console.log(b)

// let a = 10
//
// if (true) {
//     // a = 12
//     console.log(a)
// }

// hoisting

// b = 20
// console.log(b)

// function hoisted() {
//     age = 20
// }
//
// let age
// hoisted()
// console.log(age)

// const color = '#ffffff'
// color = 'f999999'

// ES5
// const array = new Array([1, 2, 3, 4, 5])
//
// console.log(array)
// array.push(6)
// console.log(array)

// const object = new Object({
//     name: 'Nurdin',
//     age: 19
// })
// object.name = 'Aibek'
//
// console.log(object)

// ES6
//
// const arr = [1, 2, 3, 4, 5]
// console.log(arr)
// arr.push(6)
// console.log(arr)

// const object = {
//     name: 'Igor'
// }
//
// console.log(object)

//ES5

// const persons = ['Nurdin', 'Feliks', 'Ilya', 'Atai', 'Igor']
//
// function sum(array) {
//     return array
// }
//
// // sum(persons)
// console.log(sum(persons));

// ES6


// const persons = ['Nurdin', 'Feliks', 'Ilya', 'Atai', 'Igor']
//
// const sum = (array) => array
//
// console.log(sum(persons))

// const returnMin = (a = Number(prompt('a')), b = Number(prompt('b'))) => {
//     alert(Math.min(a, b))
// }
// returnMin()

// let calc = 10 / 3
// console.log(typeof calc.toFixed(0))
// console.log(typeof Math.floor(calc))

// const calc = (a , b = 0) => console.log(a + b)
//
// calc(10, 32)

// Context

// let obj = this
//
// console.log(obj)
// console.log(Object)
// console.log(this);

// function log() {
//     console.log(this)
// }
//
// const arrowLog = () => console.log(this)
//
// const person = {
//     name: 'Nurdin',
//     age: 19,
//     logThis: log,
//     arrowFunc: arrowLog,
//     delayLog: function () {
//         // const self = this
//         setTimeout( () => {
//             console.log(`name: ${this.name} age: ${this.age}`)
//         }, 500)
//     }
// }
//
// person.delayLog()
// person.logThis()

// '' "" ``
//
// const title = 'Hello world!'
//
// const template = `
//     <h1 style="color: red">${title}</h1>
// `
//
// document.body.append(template)

// const persons = [
//     {name: 'Hard', age: 19},
//     {name: 'Kairat', age: 20},
//     {name: 'Ivan', age: 17},
//     {name: 'Aida', age: 20},
//     {name: 'Milana', age: 15},
//     {name: 'Ahmad', age: 19},
// ]

// persons.forEach(person => {
//     const h1 = document.createElement('h1')
//     document.body.append(h1)
//     h1.append(`Name: ${person.name}, Age: ${person.age}`)
// })

// persons.map(person => {
//     const h1 = document.createElement('h1')
//     document.body.append(h1)
//     h1.append(`Name: ${person.name}, Age: ${person.age}`)
// })

//-----------------------------------------------------------

// document.querySelector('.btn').addEventListener('click', function (){
//     console.log('вы нажали на кнопку')
// })


// const buttons = document.querySelectorAll('.btn')
// for (let btn of buttons){
//     btn.addEventListener('click', function () {
//         console.log('вы нажали на кнопку')
//     })
// }

//callback - функция обратного вызова
// const first = () =>{
//     console.log(1);
// }
//
// const second = () =>{
//     console.log(2);
// }
// first()
// second()
//второй вариант
const first = () =>{
    setTimeout(()=>{
        console.log(1)
    }, 5000);
}

const second = () =>{
    console.log(2);
}

first()
second()

//
function getSquareNums(arr) {
    const newArray = [];
    for(let i = 0; i < arr.length; i++){
        newArray.push(arr[i] ** 2)
    }
    return newArray
}
const nums = [1, 3, 5, 7]
const result = getSquareNums(nums)
console.log(result)

//эти же примеры на callback
function doSome(arr, instuction) {
    const array = [];
    for (let i = 0; i < arr.length; i++) {
        array.push(instuction(arr[i]))
    }
    return array
}

function getSquared(nums) {
    return nums ** 2
}

function getDivide(num) {
    return num / 2
}

console.log(doSome([4, 6, 2, 9, 0], getSquared))
console.log(doSome([4, 6, 2, 9, 0], getDivide))

// функция которая возвращает другую функцию
function getFullName(fistName) {
    return function (lastName) {
        return `Hello ${fistName} ${lastName}`
    }
}
const fullname = getFullName('Adil');
console.log(fullname);
console.log(fullname('Diusheev'))

// замыкаание
function getUserProfession(prof) {
    const profession = prof.toUpperCase();
    return function (name) {
        return `${profession} ${name}`
    }
    
}
const profMale = getUserProfession('Фронтенд-разработчик')
const profFemale = getUserProfession('Фронтенд-разработчица')
// console.log(profMale())
console.log(profMale('Jun'))
console.log(profFemale('Ayaka'))

// работа с DOM элементами
// создать div
const div = document.createElement('div');
// к нему добавить класс wrapper
div.classList.add('wrapper');
// поместить его внутрь тэга body
const body = document.querySelector('body') // document.body
// console.log(body)
body.appendChild(div)
// создать заголовок 'DOM-элемент'
const header = document.createElement('h1')
header.textContent = 'DOM-элемент'
// добавить h1 перед div
div.insertAdjacentElement('beforebegin', header)
// создать список ul и добавить с него 3 элемента с текстом
const  ul = `
<ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
<ul/>
`
// поместить список внутрь элементра с классом wrapper
div.innerHTML = ul;

document.querySelector('.btn')
document.querySelectorAll('.btn')

// классы а JS
// class Animal {
//     constructor(color, name) {
//         color = this.color
//         name = this.name
//     }
// }

//---------------------------------

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