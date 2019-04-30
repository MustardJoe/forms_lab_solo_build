const jobtagApi = {
    save(jobtag) {
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