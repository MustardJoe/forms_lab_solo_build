/*import applicantApi from '../src/applicant-api.js';*/
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
    applicantApi.save(applicant);
    const result = applicantApi.get();
    //Assert
    assert.deepEqual(result, applicant);
});