import serviceRequest from '../src/form_function.js';

const test = QUnit.test;

test('forms test', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const expected = {
        name: 'Jorn',
        instName: 'Rambo',
        instType: 'brass',
        skillLevel: 1,
        workAmount: 'deluxe',
        accessories: 'trombone',
        story: 'a story',
    };

    const formData = new FormData();
    formData.set('name', expected.name);
    formData.set('inst-name', expected.instName);
    formData.set('inst-type', expected.instType);
    formData.set('skill-level', expected.skillLevel);
    formData.set('work-amount', expected.workAmount);
    formData.set('accessories', expected.accessories);
    formData.set('story', expected.story);

    //Act 
    // Call the function you're testing and set the result to a const
    const jobTag = serviceRequest(formData);


    //Assert
    assert.deepEqual(jobTag, expected);
});
