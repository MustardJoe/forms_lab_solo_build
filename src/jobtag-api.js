//marty equivalent === applicant-api.js
const jobtagApi = {
    storage: localStorage,

    save(jobtag) {
        //get array of jobtags
        const jobtags = jobtagApi.getAll();
        
        //serialize JSON
        const json = JSON.stringify(jobtag);
        //save to local storage
        localStorage.setItem('jobtag', json);
    },
    get() {
        //get from local stoage
        const json = localStorage.getItem('jobtag');
        //deserialize
        const jobtag = JSON.parse(json);
        //return
        return jobtag;
    }

};

export default jobtagApi;