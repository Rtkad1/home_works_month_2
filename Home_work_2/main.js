// var some = prompt('Напишите что либо')

// if (some === 123) {
//     alert('Привет')
// }

// var num = '123'
//
// var user = {
//     pass: '12345',
//     name: 'Nurdin',
//     age: 19
// }

// Обращение к значениям объекта

// console.log(user)
// console.log('Пароль: ' + user.pass) // конкатенация строк
// console.log('Имя: ' + user.name)
// console.log('Возраст: ' + user.age)

// switch (some) {
//     case num:
//         alert('Привет')
//         break
//     case password.pass:
//         alert('Правильно')
//         break
//     default:
//         alert('Ошибка')
// }

// Переопределение переменных

// var num = 10
// console.log(num)
// num = 15
// console.log(num)

// Циклы

// 1. while

// var count = 0
//
// while (count < 10) {
//     console.log(count = count + 1)
// }

// 2. do while

// var count = 0

// do {
//     console.log('Starting While')
// } while (count < 10)

// 3. for

// var arr = [1, 2, 3, 4, 5]

// console.log(arr)
// console.log(arr[0])  // Обращение к элементу массива через его индекс
// console.log(arr.length) // Отображение длины массива

// for (var item = 2; item < arr.length; item = item + 1) {
//     console.log(arr[item] ** 2)
// }

// console.log(6 + undefined) // NaN


// 4. for of

// Цикл for of не работает с пустыми массивами

// var arr = [1, 2, 3, 4, 5]
//
// for (var i of arr) {
//     console.log(i + 10)
// }

// 5. for in

// var obj = {
//     string: 'some str',
//     number: 42,
//     'key': false,
//     [null]: {
//         name: 'Nurdin'
//     },
//     sayHi() {
//         console.log('Hi')
//     }
// }


// for (var key in obj) {
//     console.log(`Ключ объекта: ${key}, Значение ключа: ${obj[key]}`)
//     // интерполяция строк
// }

// console.log()
// console.log(console.log()); // ОШИБКА!!!

// console.log(obj['null'])  // Обращение к ключу объекта с типом данных Array
// console.log(obj[null])

// console.log(obj['number'])

// for in чаще всего применяется к объектам (object)


// var arr = ['a', 'b', 'c', 'd']
//
// console.log(arr)
// console.log(arr.push('e'))
// arr.push('e', 5) // метод push() добавит элемент в конец массива
// arr.unshift('e') // метод unshift() добавит элемент в начало массива
// arr.pop() // метод pop() удалит элемент с конца массива
// arr.shift() // метод shift() удалит элемент сначала массива
// console.log(arr)



// var arr = []
//
// for(i=0;i<10;i++){
//     console.log(arr.push([i]));
// }

// var count = 21
//
// while (count > 0) {
//     console.log(count = count - 1)
// }

var colors = prompt('Choice color! (red, yellow, green)')

switch (colors) {
    case 'red':
        alert('STOP!')
        break
    case 'yellow':
        alert('Wait!')
        break
    case 'green':
        alert('GO')
        break
    default:
        alert('Choice color! (ed, yellow, green)')
        break
}