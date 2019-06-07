//our big function that makes a row out of our little functions
//our little functions make the individual table data entries
function makeJobtagRow(jobtag) {
    const tr = document.createElement('tr');

    const nameCell = makeNameCell(jobtag.name);
    const instNameCell = makeInstNameCell(jobtag.instName);
    const instTypeCell = makeInstTypeCell(jobtag.instType);
    const workAmountCell = makeWorkAmountCell(jobtag.workAmount);

    tr.appendChild(nameCell);
    tr.appendChild(instNameCell);
    tr.appendChild(instTypeCell);
    tr.appendChild(workAmountCell);

    return tr;
}

function makeNameCell(name) {
    const nameCell = document.createElement('td');

    // setting up link and creating search params(name on jobtag)
    const link = document.createElement('a');
    const searchParams = new URLSearchParams();
    searchParams.set('name', name);
    link.href = 'jobtag.html?' + searchParams.toString();

    // also use the applicant's name as the display text for the link
    link.textContent = name;
    nameCell.appendChild(link);

    return nameCell;
}

function makeInstNameCell(instName) {
    const instNameCell = document.createElement('td');
    instNameCell.textContent = instName;

    return instNameCell;
}

function makeInstTypeCell(instType) {
    const instTypeCell = document.createElement('td');
    instTypeCell.textContent = instType;

    return instTypeCell;
}

function makeWorkAmountCell(workAmount) {
    const workAmountCell = document.createElement('td');
    workAmountCell.textContent = workAmount;
    
    return workAmountCell;
}


export default makeJobtagRow;