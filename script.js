const form = document.querySelector('#form');
const emailInput = document.getElementById('email');
const emailSubmit = document.getElementById('email-btn');
const rateEmail = document.getElementById('rate');
const cardBasic = document.querySelector('.card__bacis');
const cardSuccess = document.querySelector('.card__success');
const msgButton = document.querySelector('.msg');
// адрес электронной почты, которое будет выведно в отдельном окне
let rate = '';

var emailValidate = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// При вводе пароля в поле ввода
emailInput.addEventListener('input', (event) => {
    event.preventDefault();
    // Метод match() возвращает получившиеся совпадения 
    // при сопоставлении строки с регулярным выражением.
    // Если поле ввода электронной почты было введено правильно
    // добавляются класы валидности и удалятся клас невалидности
    if (emailInput.value.match(emailValidate)) {
        form.classList.add('valid');
        form.classList.remove('invalid');
        // адрес электронной почты записывается
        //  в сообщение кот будет в отдельно окне
        rate = emailInput.value;

    } else {
        form.classList.add('invalid');
        form.classList.remove('valid');
    }
    // Если поле ввода - пустое
    if (emailInput.value === '') {
        form.classList.remove('invalid');
        form.classList.remove('valid');
    }
    })

    // При клике на кнопку отправить
emailSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    // Если поле ввода пустое - добавляется класс 
    if (emailInput.value === '') {
        form.classList.add('invalid');
    }
    // Если правильно ввел адресс электрной почты
    if(rate) {
        rateEmail.innerText = rate;
        cardBasic.classList.add('hidden');
        cardSuccess.classList.remove('hidden');
    }
})

// При клике на кнопку в отдельном окне,
//  для возврата в главное окно
msgButton.addEventListener('click', () => {
    cardBasic.classList.remove('hidden');
    cardSuccess.classList.add('hidden');
    // Поле ввода электроной почты - ощищается
    emailInput.value = '';
})