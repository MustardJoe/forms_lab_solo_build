import jobtagApi from './jobtag-api.js';

//reference all DOM elements
const name = document.getElementById('name');
const instName = document.getElementById('inst-name');
const instType = document.getElementById('inst-type');
const skillLevel = document.getElementById('skill-level');
const workAmount = document.getElementById('work-amount');
const accessories = document.getElementById('accessories');
const story = document.getElementById('story');

const jobtag = jobtagApi.get();

if(!jobtag) {
    window.location = './';
}

name.textContent = jobtag.name;
instName.textContent = jobtag.instName;
instType.textContent = jobtag.instType;
skillLevel.textContent = jobtag.skillLevel;
workAmount.textContent = jobtag.workAmount;
accessories.textContent = jobtag.accessories;
story.textContent = jobtag.story;