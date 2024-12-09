const emailInput = document.getElementById('email-input');
const emailSubmit = document.getElementById('email-btn');
const emailMsg = document.getElementById('error-email');
const rateEmail = document.getElementById('rate');
const cardBasic = document.querySelector('.card__bacis');
const cardSuccess = document.querySelector('.card__success');
const msgButton = document.querySelector('.msg');

let rate = '';

var emailValidate = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let emailText = '';

emailSubmit.onclick = valdateEmail;

function valdateEmail(e) {
    e.preventDefault();

    if(emailValidate.test(emailInput.value) == false) {
        emailText = 'Valid email required';
        emailMsg.textContent = emailText;
        emailInput.classList.add('input-error');
    } else {
        emailInput.classList.remove('input-error');
        emailText = '';
        emailMsg.textContent = emailText;
        rate = emailInput.value;
    }
}

emailSubmit.addEventListener('click', () => {
    if(rate) {
        rateEmail.innerText = rate;
        cardBasic.classList.add('hidden');
        cardSuccess.classList.remove('hidden');
    }
})

msgButton.addEventListener('click', () => {
    cardBasic.classList.remove('hidden');
    cardSuccess.classList.add('hidden');
})