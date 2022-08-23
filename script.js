const pwdField = document.getElementById('password');
const pwdRequirements = document.getElementById('pwd-requirements');

pwdField.addEventListener('keyup', () => {pwdRequirements.classList.remove('hidden')});
pwdField.addEventListener('keyup', () => pwdMatchesConfirm());
pwdField.addEventListener('keyup', () => pwdValidation());

const pwdLetter = document.getElementById('letter');
const pwdNumber = document.getElementById('number');
const pwdCapital = document.getElementById('capital');
const pwdLength = document.getElementById('length');

const lowerCaseLetters = /[a-z]/g;
const upperCaseLetters = /[A-Z]/g;
const numbers = /[0-9]/g;

const pwdConfirmField = document.getElementById('confirm-password')
pwdConfirmField.addEventListener('keyup', () => {pwdMatchesConfirm ()});

const confirmMsg = document.getElementById('confirm-msg');

function pwdValidation () {
  if (pwdField.value.match(lowerCaseLetters)) {
    pwdLetter.classList.add('validation-ok');
    pwdLetter.classList.remove('validation-nok');
  } else {
    pwdLetter.classList.add('validation-nok');
    pwdLetter.classList.remove('validation-ok');
  }

  if (pwdField.value.match(upperCaseLetters)) {
    pwdCapital.classList.add('validation-ok');
    pwdCapital.classList.remove('validation-nok');
  } else {
    pwdCapital.classList.add('validation-nok');
    pwdCapital.classList.remove('validation-ok');
  }
  
  if (pwdField.value.match(numbers)) {
    pwdNumber.classList.add('validation-ok');
    pwdNumber.classList.remove('validation-nok');
  } else {
    pwdNumber.classList.add('validation-nok');
    pwdNumber.classList.remove('validation-ok');
  }
  
  if (pwdField.value.length >= 8) {
    pwdLength.classList.add('validation-ok');
    pwdLength.classList.remove('validation-nok');
  } else if (pwdField.value.length < 8) {
    pwdLength.classList.remove('validation-ok');
    pwdLength.classList.add('validation-nok');
  }
}

function pwdMatchesConfirm () {
  if (pwdConfirmField.value.length > 0) {
    if (pwdField.value === pwdConfirmField.value) {
      confirmMsg.classList.add('validation-ok');
      confirmMsg.classList.remove('validation-nok');
      confirmMsg.textContent = 'Passwords match';
      pwdConfirmField.setCustomValidity("");
    } else if (pwdField.value !== pwdConfirmField.value) {
      confirmMsg.classList.add('validation-nok');
      confirmMsg.classList.remove('validation-ok');
      confirmMsg.textContent = 'Passwords do not match';
      pwdConfirmField.setCustomValidity("Passwords do not Match");
    }
  } else if (pwdConfirmField.value.length == 0) {
    confirmMsg.textContent = '';
    confirmMsg.classList.remove('validation-ok');
  }
}