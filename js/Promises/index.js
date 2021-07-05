/* eslint-disable arrow-body-style */
const baseUrl = 'https://60c9e9df772a760017204c05.mockapi.io/api/v1/form';

const buttonEl = document.querySelector('.submit-button');
const formEl = document.querySelector('.login-form');
const errorEl = document.querySelector('.error-text');

const getFormData = () => Object.fromEntries(new FormData(formEl));

const validateHandler = () => {
	buttonEl.disabled = !formEl.reportValidity();
};

const submitHandler = event => {
	event.preventDefault();

	fetch(baseUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(getFormData()),
	})
		.then(response => response.json())
		.then(result => {
			alert(JSON.stringify(result));
			formEl.reset();
		})
		.catch(() => {
			errorEl.textContent = 'Failed to create user';
		});
};

formEl.addEventListener('input', validateHandler);
formEl.addEventListener('submit', submitHandler);
