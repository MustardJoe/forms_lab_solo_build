import serviceRequest from './form_function.js';

const form = document.getElementById('repair-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);


    const jobTag = serviceRequest(formData);
    console.log(jobTag);
});