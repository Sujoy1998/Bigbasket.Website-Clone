const loginPage = document.getElementById("loginpage");
const loginBtn = document.getElementById("Login");
let x=0;
function signIn(){
    console.log("hii");
    
    if(x===0){
        loginPage.style.display='flex';
        x=1;
        
    }
    else if(x===1){
        loginPage.style.display='none';
        x=0;
        console.log("HIII")
    }
    
}
