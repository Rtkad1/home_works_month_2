// const input = document.getElementById('input')
// const createButton = document.getElementById('crete_todo')
// const todoList = document.getElementById('todo_list')
// const xButton = document.createElement("button")
//
// const createTodo = function () {
//     if (input.value.trim() === '') {
//         return false
//     } else {
//         const div = document.createElement('div')
//         const text = document.createElement('h3')
//
//         div.setAttribute('class', 'block_text')
//         text.setAttribute('class', 'text')
//
//         text.innerText = input.value.trim()
//         xButton.onclick = () => div.remove();
//         xButton.append(div)
//         div.append(text)
//         todoList.append(div)
//     }
//     input.value = ''
// }
//
// createButton.addEventListener('click', createTodo)
// input.addEventListener('keydown', (e) => e.keyCode === 13 ? createTodo() : false)

// createButton.onclick = () => {
//     if (input.value.trim() === '') return false
//     const div = document.createElement('div')
//     const text = document.createElement('h3')
//
//     div.setAttribute('class', 'block_text')
//     text.setAttribute('class','text')
//
//     text.innerText = input.value.trim()
//     div.append(text)
//     todoList.append(div)
//
//     input.value = ''
// }

// const panes = document.getElementsByClassName("pane");
// for (let pane of panes) {
//     let xButton = document.createElement("button"); // создаём кнопку
//     xButton.className = "remove-button";
//     xButton.innerHTML = "[x]";
//
//     pane.style.position = "relative";               // позиционируем кнопку
//     xButton.style.position = "absolute";            // относительно сообщения
//     xButton.style.top = "0";
//
//     xButton.onclick = () => pane.remove();          // функционал кнопки
//
//     pane.append(xButton);                           // вставляем кнопку в сообщение
// }

// ---------------------------------

// function reverseString(str) {
//     return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
// }
// const inter = prompt('inter word')
// reverseString("");
// console.log(reverseString(inter))



const arr = [1, 3, 5, 7, 9, 11];

const getAverage = (numbers) => {
    let sum = 0; // объявляем переменную, в которой будет храниться сумма всех чисел массива
    for (let i = 0; i < numbers.length; i += 1) { // инициализируем цикл
        sum += numbers[i]; // на каждой итерации прибавляем к сумме значение текущего элемента массива
    }
    return sum / numbers.length; // возвращаем среднее арифметическое
};

console.log(getAverage(arr));