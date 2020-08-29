const gitFind = new gitFinder;
const ui = new UI;

// declare the search box 
const search_box = document.querySelector('#s_box');

// add eveent listner to searchbox ,when tying it return user profile details if it exisit
try{search_box.addEventListener('keyup', (e) => {
        // at key up, searchbox value becomes a word which is passed as the user profile name 
        // declare the word
        const search_val = e.target.value;
        //if statement to check if search box is empty or not
        if (search_val !== "" ){
            gitFind.getUser(search_val)
                .then( data => {
                if(data.profile_data.message){
                    //if search box is emoty, clear the result section
                    ui.clearProfile();

                }else {
                    //show data in the result section 
                    ui.showProfile(data.profile_data);
                    }
                }

                    )
        } else {
            //if search value does not exist , clear the result section
             ui.clearProfile();
        }
    }
)
} catch(e){
    alert (e.message);
} finally {

};

