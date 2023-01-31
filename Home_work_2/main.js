let series = {
    name: 'The last of us',
    release_date: 'January 15, 2023',
    mainActor: 'Pedro Pascal',
    episodes: 'at 31.01.23 3 episodes',
    program_autor: {
        name: 'Craig Mazin',
        date_of_birth: 'April 8, 1971',
        place_of_birth: 'Brooklyn, New York, USA'
    }
}
console.log(series)

let nameDay = prompt('inter a day')
    switch (nameDay) {
        case 'Monday':
        case 'monday':
            nameDay = "понедельник";
            break;
        case 'Tuesday':
        case 'tuesday':
            nameDay = "вторник";
            break;
        case 'Wednesday':
        case 'wednesday':
            nameDay = "среда";
            break;
        case 'Thursday':
        case 'thursday':
            nameDay = "четверг";
            break;
        case 'Friday':
        case 'friday':
            nameDay = "пятница";
            break;
        case 'Saturday':
        case 'saturday':
            nameDay = "суббота";
            break;
        case 'Sunday':
        case 'sunday':
            nameDay = "воскресенье";
            break;
        default:
            nameDay = "ошибка";
    }
console.log(nameDay)
