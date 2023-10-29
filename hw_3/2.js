"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

const inputUserNumber = +prompt("Введите числами уровень Вашей заработной платы ");
const tax = 0.87;
function minusTax(salary) {
    return salary *= tax;
}

if (!inputUserNumber || inputUserNumber <= 0) {
    console.log("Значение задано неверно");
} else {
    console.log(minusTax(inputUserNumber));
}
