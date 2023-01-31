// let userName = prompt("inter your firstname and lastname?");
//
// if (userName === 'Adil Dyusheev') {
//
//     let pass = prompt('inter password');
//
//     if (pass === '1818') {
//         alert(`Hello ${name}, access is allowed!`);
//     } else
//         alert('Неверный пароль');
// }


var den = parseInt(window.prompt('Введите день рождения'));
var month = parseInt(window.prompt('Введите месяц рождения'));

switch (month) {
    case 1:
        if (den <= 19)
            znak = 'Козерог';
        else
            znak = 'Водолей';
        break;
    case 2:
        if (den <= 18)
            znak = 'Водолей';
        else
            znak = 'Рыбы';
        break;
    case 3:
        if (den <= 20)
            znak = 'Рыбы';
        else
            znak = 'Овен';
        break;
    case 4:
        if (den <= 19)
            znak = 'Овен';
        else
            znak = 'Телец';
        break;
    case 5:
        if (den <= 20)
            znak = 'Телец';
        else
            znak = 'Близнецы';
        break;
    case 6:
        if (den <= 21)
            znak = 'Близнецы';
        else
            znak = 'Рак';
        break;
    case 7:
        if (den <= 22)
            znak = 'Рак';
        else
            znak = 'Лев';
        break;
    case 8:
        if (den <= 22)
            znak = 'Лев';
        else
            znak = 'Дева';
        break;
    case 9:
        if (den <= 22)
            znak = 'Дева';
        else
            znak = 'Весы';
        break;
    case 10:
        if (den <= 22)
            znak = 'Весы';
        else
            znak = 'Скорпион';
        break;
    case 11:
        if (den <= 22)
            znak = 'Скорпион';
        else
            znak = 'Стрелец';
        break;
    case 12:
        if (den <= 21)
            znak = 'Стрелец';
        else
            znak = 'Козерог';
        break;
}
window.alert('Знак зодиака: ' + znak);