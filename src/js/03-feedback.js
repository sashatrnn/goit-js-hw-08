import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input[name="email"]');
const messageEl = document.querySelector('textarea[name="message"]');

form.addEventListener('submit', onSubmitForm);
form.addEventListener('input', throttle(onSaveForm, 500));

function onSubmitForm(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
  form.reset();
}

function onSaveForm(e) {
  const formData = {
    email: emailEl.value,
    message: messageEl.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

let formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
emailEl.value = formData?.email || '';
messageEl.value = formData?.message || '';
