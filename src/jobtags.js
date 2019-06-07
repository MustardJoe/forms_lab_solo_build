import jobtagApi from './jobtag-api.js';
import makeJobtagRow from './make-jobtag-row.js';

const tbody = document.getElementById('jobtags');

const jobtags = jobtagApi.getAll();

for(let i = 0; i < jobtags.length; i++) {
    const jobtag = jobtags[i];
    const tr = makeJobtagRow(jobtag);

    tbody.appendChild(tr);
}
