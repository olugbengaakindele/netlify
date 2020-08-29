//Develop a UI class the renders HTML
class UI{
    constructor(){
        // the main element in the result section when data is presented
        this.profile = document.getElementById('profile');

    }
    // this shows the data if user exist
    showProfile(user){
        this.profile.innerHTML = `
        <div class= "row">
            <div class ="col-md-3"> 
                <img src ="${user.avatar_url}" class="img-fluid mb-2">
                <a href = "${user.html_url}" target="_blank" class = "btn btn-success btn-block">View Profile</a>
            </div>
            <div class ="col-md-9"> 
               <div class= "row mt-1">
                    <span class="badge badge-primary ml-3 ">Followers: ${user.followers}</span>
                    <span class="badge badge-info ml-3">Login ID: ${user.login}</span>
                    <span class="badge badge-success ml-3">Name: ${user.name}</span>
               </div>
               <br><br>  
               <div class= "row mt-1">
                    <div class = "card card-body">
                        <ul class = "list-group">
                            <li>profile created: ${user.created_at}</li>
                            <li>last updated: ${user.updated_at}</li>
                            <li class= "text-danger">${user.public_repos} public repos</li>
                            <li>url: ${user.url}</li>

                        </ul>
                      
                    </div>
               </div>
            </div>
                
 

        </div>

        `
    }
    // this clears result section is user does not exist
    clearProfile(){
        this.profile.innerHTML = `<div class= "row">
                                    <h6>No profile match </h6>
                                  </div>`;
    }
}