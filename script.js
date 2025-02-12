const form = document.querySelector('#form');
const emailInput = document.getElementById('email');
const emailSubmit = document.getElementById('email-btn');
const rateEmail = document.getElementById('rate');
const cardBasic = document.querySelector('.card__bacis');
const cardSuccess = document.querySelector('.card__success');
const msgButton = document.querySelector('.msg');
let rate = '';

var emailValidate = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

emailInput.addEventListener('input', (event) => {
    event.preventDefault();
    if (emailInput.value.match(emailValidate)) {
        form.classList.add('valid');
        form.classList.remove('invalid');
        rate = emailInput.value;

    } else {
        form.classList.add('invalid');
        form.classList.remove('valid');
    }
    if (emailInput.value === '') {
        form.classList.remove('invalid');
        form.classList.remove('valid');
    }
    })

emailSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    if (emailInput.value === '') {
        form.classList.add('invalid');
    }
    if(rate) {
        rateEmail.innerText = rate;
        cardBasic.classList.add('hidden');
        cardSuccess.classList.remove('hidden');
    }
})

msgButton.addEventListener('click', () => {
    cardBasic.classList.remove('hidden');
    cardSuccess.classList.add('hidden');
    emailInput.value = '';
})
