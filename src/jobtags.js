import jobtagApi from './jobtag.js';

const tbody = document.getElementById('applicants');

const jobtags = jobtagApi.getAll();

for(let i = 0; i < jobtags.length; i++) {
    const jobtag = jobtags[i];

    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = jobtag.name;
    tr.appendChild(nameCell);

    const lineageCell = document.createElement('td');
    lineageCell.textContent = jobtag.lineage;
    tr.appendChild(lineageCell);

    const roleCell = document.createElement('td');
    roleCell.textContent = jobtag.role;
    tr.appendChild(roleCell);

    tbody.appendChild(tr);
}
