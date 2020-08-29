/* develop a class with methods to access the github api,
 which includes search texts as parameters */
class gitFinder{
    constructor(){

        this.clientId = '5c1f3e041ae59b853b7e';
        this.secret = '6184fd8fb4a3e0065e9b7479bd86d2a65e975e65';
    }
    // the user will be the search box value when typing
    async getUser(user){
        const profile_res = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.secret}`)
        const profile_data = await profile_res.json();
        return {
            profile_data 
        }

    }

};
