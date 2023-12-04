// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка загловок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию).

function createElement() {
    let devEl = document.createElement('div');
    let imgEl = document.createElement('img');
    let h1El = document.createElement('h1');
    let pEl = document.createElement('p');
    devEl.classList.add('wrapper');
    imgEl.classList.add('img_photo');
    h1El.classList.add('title');
    pEl.classList.add('text');

    imgEl.src = objEl.src;
    imgEl.alt = "photo";

    h1El.innerHTML = objEl.title;
    pEl.innerHTML = objEl.paragraph;

    document.querySelector('body').appendChild(devEl);
    devEl.appendChild(imgEl);
    devEl.appendChild(h1El);
    devEl.appendChild(pEl);

}


for (let i = 0; i < 5; i++) {
    createElement();
}