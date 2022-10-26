const form = document.getElementById('registration-form');
const submitbtn = document.querySelector('button');


const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

const verifyPasswords = () => {

    if(passwordInput.value === confirmPasswordInput.value){
        confirmPasswordInput.setCustomValidity("");
    }else{
        confirmPasswordInput.setCustomValidity("Your password don't match. Please type the same password again.");
    }

}
const addFormSubmissionAttempted = () =>{
    form.classList.add('submission-attempted');
}


passwordInput.addEventListener('input',verifyPasswords,false);
confirmPasswordInput.addEventListener('input',verifyPasswords,false);
submitbtn.addEventListener('click',addFormSubmissionAttempted,false);

