import jobtagApi from './jobtag-api.js';

const tbody = document.getElementById('jobtags');

const jobtags = jobtagApi.getAll();

for(let i = 0; i < jobtags.length; i++) {
    const jobtag = jobtags[i];

    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');

    // setting up link and creating search params(name on jobtag)
    const link = document.createElement('a');
    const searchParams = new URLSearchParams();
    searchParams.set('name', jobtag.name);
    link.href = 'jobtag.html?' + searchParams.toString();

    // also use the applicant's name as the display text for the link
    link.textContent = jobtag.name;
    nameCell.appendChild(link);

    //this line down to next comment maybe not needed
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
