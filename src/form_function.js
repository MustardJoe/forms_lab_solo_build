function serviceRequest(formData) {
  
    const skillLevel = parseInt(formData.get('skill-level'));

    const jobTag = {
        name: formData.get('name'),
        instName: formData.get('inst-name'),
        instType: formData.get('inst-type'),
        skillLevel: skillLevel,
        workAmount: formData.get('work-amount'),
        accessories: formData.get('accessories'),
        story: formData.get('story'),

    };
    return jobTag;
} 

export default serviceRequest;