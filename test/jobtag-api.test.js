import jobtagApi from '../src/jobtag-api.js';
const test = QUnit.test;

QUnit.module('job tag api');

jobtagApi.storage = sessionStorage;
const testStorage = sessionStorage;

test('round-trip job tag test', (assert) => {
    testStorage.removeItem('jobtags');
    // arrange
    const jobtag1 = { name: 'tester1' };
    const jobtag2 = { name: 'tester2' };
    // act
    jobtagApi.save(jobtag1);
    jobtagApi.save(jobtag2);
    const result = jobtagApi.get(jobtag2.name);
    // assert
    assert.deepEqual(result, jobtag2);
});

test('no jobtags in local storage returns empty array', assert => {
    testStorage.removeItem('jobtags');
    const expected = [];
    
    const jobtags = jobtagApi.getAll();
    
    assert.deepEqual(jobtags, expected);
});

test('creates two dummy saves, verifies array return', (assert) => {
    testStorage.removeItem('jobtags');
    //Arrange
    // Set up your parameters and expectations
    const jobTag1 = { name: 'tester1' };
    const jobTag2 = { name: 'bilbo baggins' };
    const expected = [jobTag1, jobTag2];
    //Act 
    // Call the function you're testing and set the result to a const
    jobtagApi.save(jobTag1);
    jobtagApi.save(jobTag2);
    const results = jobtagApi.getAll();
    //Assert
    assert.deepEqual(results, expected);
});
