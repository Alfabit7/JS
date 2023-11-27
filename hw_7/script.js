'use strict'
// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
let elDropdownItem = document.querySelectorAll('.dropdown-item');
elDropdownItem.forEach((item) => {
    item.classList.add('super-dropdown')
    console.log(item);
});

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
let elBtn = document.querySelector('.dropdown .btn');

elBtn.classList.toggle('btn-secondary');
console.log(elBtn);

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
let elDropdownMenu = document.querySelector('.dropdown .menu');
elDropdownMenu.classList.remove('dropdown-menu');
console.log(elDropdownMenu);

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`
let elDivDropdownMenu = document.querySelector('div.dropdown');
elDivDropdownMenu.insertAdjacentHTML('afterBegin', '<a href="#">link</a>');
console.log(elDivDropdownMenu);

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
let elDropdownMenuButton = document.querySelector('div button#dropdownMenuButton');
elDropdownMenuButton.setAttribute("id", "superDropdown")
console.log(elDropdownMenuButton);

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
let elDataAttribute = document.querySelector('[aria-labelledby]');
elDataAttribute.setAttribute('data-dd', 3);
console.log(elDataAttribute);

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".
let elType = document.querySelector('div button.dropdown-toggle');
elType.removeAttribute('type');
console.log(elType);