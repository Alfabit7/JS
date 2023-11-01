"use strict";

/*
Необязательное задание. 
Необходимо вывести горку в консоль (используя цикл for), как показано на
 console.log("x");

x
xx
xxx
xxxx
xxxxx
*/
let xCharecter = "X";
let emptyCharecter = " "
for (let i = 0; i < 21; i++) {
    console.log(emptyCharecter += xCharecter);
}
