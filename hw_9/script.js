'use strict'
// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.
let inputForm = document.getElementById('from');

inputForm.addEventListener('input', function (event) {
    document.querySelector('span').innerHTML = event.target.value
});
// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message: - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.
let elBtn = document.querySelector('.messageBtn');

elBtn.addEventListener('click', () => {
    elBtn.classList.add('animate_animated', 'animate_fadeInLeftBig')
    elBtn.style.visibility = 'visible';

});
// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме.Если какое - либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля(необходимо поставить класс error незаполненным полям).Как только пользователь начинает заполнять какое - либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить(поставить класс error данному полю).
// - Если поле было чем - либо заполнено, подсветку(класс error) необходимо убрать.

let formEl = document.querySelector('form');
let formInputEl = formEl.querySelectorAll('.form-control');

formEl.addEventListener('submit', validateForm);

function validateForm(event) {
    formInputEl.forEach((el) => {
        if (el.value.trim() === '') {
            event.preventDefault();
            el.classList.add('error');
            return false;
        } else {
            el.classList.remove('error');
        }
    });
}

formInputEl.forEach((el) => {
    el.addEventListener('input', (event) => {
        if (event.target.value.trim() === '') {
            event.target.classList.add('error');
        } else {
            event.target.classList.remove('error');
        }
    });
});

