import jobtagApi from '../src/jobtag-api.js';
const test = QUnit.test;

QUnit.module('job tag api');


test('creates job tag api test', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const jobTag = {
        name: 'SpongeBob'
    
    };

    //Act 
    // Call the function you're testing and set the result to a const
    jobtagApi.save(jobTag);
    const result = jobtagApi.get();
    //Assert
    assert.deepEqual(result, jobTag);
});