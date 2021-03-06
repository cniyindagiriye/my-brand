import setupUI from "./functions/setUI.js";

const auth = firebase.auth(); 
document.addEventListener('DOMContentLoaded', () => {  
       
    auth.onAuthStateChanged(user => {
        if(user){
            console.log(user.email)
            setupUI();
            const logout = document.querySelector("#logout");
            logout.addEventListener('click', e=> {
                e.preventDefault();
                auth.signOut().then(()=>{
                    window.location.replace("./login.html");
                });
    })

        }else{
        
        }
    })   

})

export default auth;