"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальноере значение сди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/
const num1 = +prompt("Введите первое число");
const num2 = +prompt("Введите второе число");
const num3 = +prompt("Введите третье число");

function findMaxNumber(num1, num2, num3) {
    console.log(`Максимальноере значение среди чисел ${num1}, ${num2}, ${num3} равно: ${Math.max(num1, num2, num3)}`);
}
findMaxNumber(num1, num2, num3);