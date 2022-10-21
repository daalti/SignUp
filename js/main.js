const submitBtn = document.querySelector(".submit-btn");
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const mail = document.querySelector("#email");
const pass = document.querySelector("#password");
const errorTextName = document.querySelector(".error-text-name");
const errorTextLast = document.querySelector(".error-text-last");
const errorTextMail = document.querySelector(".error-text-mail");
const errorTextPass = document.querySelector(".error-text-pass");

var errorName = 0;
var errorLast = 0;
var errorMail = 0;
var errorPass = 0;

// Click state
submitBtn.addEventListener("click", () => {
    // NAME
    if (!fname.value){
        if (errorName == 0){
            fname.classList.toggle("error");
            errorTextName.classList.toggle("opacity");
            fname.setAttribute('placeholder', '');
            errorName = 1;
        }
    }
    else if (errorName == 1){
        fname.classList.toggle("error");
        errorTextName.classList.toggle("opacity");
        fname.setAttribute('placeholder', 'First Name');
        errorName = 0;
    } 
    
    // LAST NAME
    if (!lname.value){
        if (errorLast == 0){
            lname.classList.toggle("error");
            errorTextLast.classList.toggle("opacity");
            lname.setAttribute('placeholder', '');
            errorLast = 1;
        }
    }
    else if (errorLast == 1){
        lname.classList.toggle("error");
        lname.setAttribute('placeholder', 'Last Name');
        errorTextLast.classList.toggle("opacity");
        errorLast = 0;
    }  

    // MAIL
    if (!mail.value){
        if (errorMail == 0){
            mail.classList.toggle("error");
            errorTextMail.classList.toggle("opacity");
            mail.setAttribute('placeholder', '');
            errorMail = 1;
        }
    }
    else if (errorMail == 1){
        mail.classList.toggle("error");
        mail.setAttribute('placeholder', 'Email Address');
        errorTextMail.classList.toggle("opacity");
        errorMail = 0;
    }  

    // PASSWORD
    if (!pass.value){
        if (errorPass == 0){
            pass.classList.toggle("error");
            errorTextPass.classList.toggle("opacity");
            pass.setAttribute('placeholder', '');
            errorPass = 1;
        }
    }
    else if (errorPass == 1){
        pass.classList.toggle("error");
        pass.setAttribute('placeholder', 'Password');
        errorTextPass.classList.toggle("opacity");
        errorPass = 0;
    }  
  });