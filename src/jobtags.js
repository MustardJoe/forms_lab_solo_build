import jobtagApi from './jobtag-api.js';

const tbody = document.getElementById('jobtags');

const jobtags = jobtagApi.getAll();
console.log('do we get here? jobtags.js');

for(let i = 0; i < jobtags.length; i++) {
    const jobtag = jobtags[i];

    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = jobtag.name;
    tr.appendChild(nameCell);

    const instNameCell = document.createElement('td');
    instNameCell.textContent = jobtag.instName;
    tr.appendChild(instNameCell);

    const instTypeCell = document.createElement('td');
    instTypeCell.textContent = jobtag.instType;
    tr.appendChild(instTypeCell);

    const workAmountCell = document.createElement('td');
    workAmountCell.textContent = jobtag.workAmount;
    tr.appendChild(workAmountCell);

    tbody.appendChild(tr);
}
