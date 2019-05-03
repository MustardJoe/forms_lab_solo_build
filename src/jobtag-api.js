//marty equivalent === applicant-api.js
const jobtagApi = {
    storage: localStorage,

    save(jobtag) {
        //get array of jobtags and add jobtag to array
        const jobtags = jobtagApi.getAll();
        jobtags.push(jobtag);
        
        //serialize JSON
        const json = JSON.stringify(jobtags);
        //save to local storage
        jobtagApi.storage.setItem('jobtags', json);
    },
    get(name) {
        //use get all from api to get jobtags
        const jobtags = jobtagApi.getAll();
        //return array
        for(let i = 0; i < jobtags.length; i++) {
            const jobtag = jobtags[i];
            if(jobtag.name === name) {
                return jobtag;
            }
        }
    },
    getAll() {
        const json = jobtagApi.storage.getItem('jobtags');
        //deserialize
        let jobtags = JSON.parse(json);
        if(!jobtags) {
            jobtags = [];
        }
        return jobtags;
    } 
};

export default jobtagApi;