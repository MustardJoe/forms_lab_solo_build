//marty equivalent === apply.js
import serviceRequest from './form_function.js';
import jobtagApi from './jobtag-api.js';

const form = document.getElementById('repair-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);


    const jobtag = serviceRequest(formData);
    console.log('inside event listener');
    //will remove error by using jobtagApi instead of sonsole log to save data
    jobtagApi.save(jobtag);
    //window.location = 'thank-you.html';
});