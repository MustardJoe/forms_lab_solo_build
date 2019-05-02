import jobtagApi from '../src/jobtag-api.js';
const test = QUnit.test;

QUnit.module('job tag api');

jobtagApi.storage = sessionStorage;
const testStorage = sessionStorage;

test('round-trip job tag test', (assert) => {
    testStorage.removeItem('jobtags');
    // arrange
    const jobtag = { name: 'tester' };

    // act
    jobtagApi.save(jobtag);
    const result = jobtagApi.get();

    // assert
    assert.deepEqual(result, jobtag);
});

test('creates job tag api test', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const jobTag = {
        name: 'tester'
    
    };

    //Act 
    // Call the function you're testing and set the result to a const
    jobtagApi.save(jobTag);
    const result = jobtagApi.get();
    //Assert
    assert.deepEqual(result, jobTag);
});