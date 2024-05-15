const NAME_PAR = document.querySelector(".name_p");
const EMAIL_PAR = document.querySelector(".email_p");
const PASSWORD1_PAR = document.querySelector(".pass1_p");
const PASSWORD2_PAR = document.querySelector(".pass2_p");

const NAME = document.getElementById("name");
const EMAIL = document.getElementById("email");
const PASSWORD1 = document.getElementById("pass1");
const PASSWORD2 = document.getElementById("pass2");

const SIGNUP_LOGIN_BUTTON = document.getElementById("signup_login_button");
const LS_TRIG = document.getElementById("ls_trig");
const SL_FOOT = document.querySelector(".sl_foot");
const SIGNUP_LOGIN_PAR = document.querySelector(".sign_login");

const SHOW_HIDE_PASS = document.querySelectorAll(".show_hide_pass");


SHOW_HIDE_PASS.forEach((s)=>{
    s.addEventListener("mousedown",(event)=>{
        event.target.focus();
        event.target.src="svgs/show_pass.svg"
        event.target.parentNode.querySelector("input").type="text"
    })
})

SHOW_HIDE_PASS.forEach((s)=>{
    s.addEventListener("mouseup",(event)=>{
        event.target.focus();
        let user ;        event.target.parentNode.querySelector("input").type="password"
    })
})


LS_TRIG.addEventListener("click",(event)=>{
    let state = SIGNUP_LOGIN_PAR.getAttribute("state");
    if(state=="signup"){
        SIGNUP_LOGIN_PAR.setAttribute("state","login")
        SL_FOOT.querySelector("p").textContent = "Don't have an account ?";
        event.target.textContent = "Sign up";
        PASSWORD1_PAR.querySelector("p").style.display="none"
        NAME_PAR.style.display = "none";
        PASSWORD2_PAR.style.display="none";
        SIGNUP_LOGIN_BUTTON.textContent = "Log in";
        
    }
    else if(state=="login"){
        SIGNUP_LOGIN_PAR.setAttribute("state","signup")
        SL_FOOT.querySelector("p").textContent = "Already have an account ?";
        event.target.textContent = "Log in";
        PASSWORD1_PAR.querySelector("p").style.display="block"
        NAME_PAR.style.display = "block";
        PASSWORD2_PAR.style.display="block";
        SIGNUP_LOGIN_BUTTON.textContent = "Sign up"
    }  
})



SIGNUP_LOGIN_BUTTON.addEventListener("click",()=>{
    if(SIGNUP_LOGIN_BUTTON.textContent =="Log in" ){
        auth.signInWithEmailAndPassword(EMAIL.value,PASSWORD1.value)
        .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed in:", user);

        // sessionStorage.setItem("uid",user.uid);
        // document.cookie = "uid=" + user.uid;
        window.location.href = "index.html";
        sessionStorage.setItem("visited_signup_login", "true");
        // window.location.href = `index.html?uid=${user.uid}`;
        
        document.querySelectorAll('input').forEach(input => {
            input.value = '';
        });
        })
        .catch((error) => {
        console.error("Error signing in:", error.message);
    });
    
    }
    else{
        if(checker()){
            auth.createUserWithEmailAndPassword(EMAIL.value, PASSWORD1.value)
            .then((userCredential) => {
              const user = userCredential.user;
              console.log("User signed up:", user);
              db.collection("user").doc(user.uid).set({
                name : NAME.value,
                email : EMAIL.value,
                name : NAME.value 
              });
              document.querySelectorAll('input').forEach(input => {
                input.value = '';
            });
            window.location.href = "index.html";
            sessionStorage.setItem("visited_signup_login", "true");
            })
            .catch((error) => {
              console.error("Error signing up:", error.message);
            });
            }
            else{
                console.log("error at sign up")
            }
    }
    
});


function checker(){
    if(NAME.value.length > 1 && EMAIL.value.length >1 && (PASSWORD1.value == PASSWORD2.value)){
        return true;
    }
    else{
        return false;
    }
}

auth.onAuthStateChanged(function(user) {
    if (user) {
      console.log("user sign in");
    } else {
      console.log("user signed out")
    }

});


// sign out
function signOut() {
    auth.signOut()
      .then(() => {
        console.log("User signed out successfully");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  }

