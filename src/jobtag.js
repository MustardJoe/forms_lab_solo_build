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