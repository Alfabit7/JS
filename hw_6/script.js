"use strict";
// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
const elemId = document.getElementById('super_link');
console.log(elemId); console.log('\n');

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
let elemClassCardLinkCollection = document.getElementsByClassName('card-link');
for (let i = 0; i < elemClassCardLinkCollection.length; i++) {
    elemClassCardLinkCollection[i].innerHTML = 'Ссылка'
}

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
// let elCardLinkCollection = document.querySelectorAll('body .card-link')
let elCardLinkNode = document.querySelectorAll('.card-body .card-link');
console.log(elCardLinkNode);
elCardLinkNode.forEach(el => console.log(el));

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
const dataNumber = document.querySelector('[data-number="50"]');
console.log(dataNumber);

// 5. Выведите содержимое тега title в консоль.
const elemTitle = document.querySelector('title');
console.log(elemTitle.outerText);


// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
const elemParentCardLink = document.querySelector('.card-title').parentElement
console.log(elemParentCardLink);

// 7. Создайте тег 'p', запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
let elParagraph = document.createElement('p');
elParagraph.innerHTML = 'Привет';

let elCard = document.querySelector('.card');
elCard.appendChild(elParagraph);

// 8. Удалите тег h6 на странице.
let elH6 = document.querySelector('h6');
elH6.remove();


