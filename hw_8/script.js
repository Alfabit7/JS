'use strict'
// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.
document.addEventListener('DOMContentLoaded', console.log('все теги прогрузились'));

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.
document.addEventListener('load', console.log('страница загрузилась'));

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div". - сообщение должно определять присутствует или отсутствует класс "super_element" У элемента, а также выводить в нижнем регистре верный тег в данной строке, по  - которому был совершен клик. Необходимо использовать делегирование.

document.addEventListener('click', function (e) {
    if (e.target.classList.length > 0) {
        console.log(`Класс ${e.target.className} у элеменат ${e.target.localName} присутствуетв HTML ': `)
    }
    else {
        console.log(`У элемента ${e.target.localName}: классы не заданы`);
    }
});

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."
const textAreaEl = document.querySelector('textarea');
textAreaEl.addEventListener('mouseover', () => console.log('Вы навели на textarea'));

// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.
let ulEl = document.querySelector('ul');
ulEl.addEventListener('click', function (e) {
    if (e.target.nodeName === 'BUTTON') {
        console.log(`Вы нажали кнопку '${e.target.innerHTML}'`);
    }
});

// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами. Ответ: Потому что сначала мы вешаем слушатель событий на всю страницу dockument, а потом ниже в коде переопределяем слушатель  для кнопки и он отрабатывает первым

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.
let liUl = document.querySelectorAll('li');
liUl.forEach(function (el, index) {
    if (index % 2 != 0) {
        el.style.backgroundColor = 'green';
        el.childNodes.forEach(item => {
            if (item.nodeType === 1) {
                item.style.backgroundColor = 'red'
            }
        })
    }
})

//



