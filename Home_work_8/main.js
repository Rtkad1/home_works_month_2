// function readMore() {
//     const dots = document.querySelector('.dots')
//     const more = document.querySelector('.more')
//     const btn = document.querySelector('.btn')
//
//     if (dots.style.display === 'none') {
//         dots.style.display = 'inline';
//         btn.innerHTML = '«показать ответ»';
//         more.style.display = 'none';
//     } else {
//         dots.style.display = 'none';
//         btn.innerHTML = '«скрыть ответ»';
//         more.style.display = 'inline';
//     }
// }


document.querySelectorAll('.btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        let dots = btn.parentNode.querySelector('.dots');
        let more = btn.parentNode.querySelector('.more');


        if(dots.style.display === 'none') {
            dots.style.display = 'inline';
            more.style.display = 'none';
            btn.textContent = 'показать ответ';
        } else {
            dots.style.display = 'none';
            more.style.display = 'inline';
            btn.textContent = 'скрыть ответ';
        }
    });
});
