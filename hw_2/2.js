"use strict";

/*
Необходимо переписать данный код, используя тернарный оператор.
Если есть какие-либо недочеты в коде, можете их исправить.

let test = confirm("У вас много денег?");
if (test === true) {
  console.log("Скоро будем у вас ;)");
} else {
  console.log("До свидания.");
}
*/

const requestQuantityMoney = confirm("У вас много денег?");

console.log(requestQuantityMoney ? "Скоро будем у вас ))" : "До свидания!");