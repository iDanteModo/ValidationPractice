function validationForm() {
    const form = document.querySelector('form');
    const email = document.getElementById('email');
    const emailError = document.querySelector('#email + span.errorMsg');
    const country = document.getElementById('country');
    const countryError = document.querySelector('#country + span.errorMsg');
    const zipcode = document.getElementById('zipcode');
    const zipcodeError = document.querySelector('#zipcode + span.errorMsg');
    const password = document.getElementById('password');
    const passwordError = document.querySelector('#password + span.errorMsg');
    const confirm_password = document.getElementById('passwordConfirmation');
    const confirm_password_Error = document.querySelector('#passwordConfirmation + span.errorMsg');
    const submit = document.querySelector('button');

    email.addEventListener('input', () => {
        emailError.textContent ="";
        if(!email.validity.valid){
            errorDisplay();
        }
    })

    country.addEventListener('input', () => {
        countryError.textContent = "";
        if(!country.validity.valid){
            errorDisplay();
        }
    })

    zipcode.addEventListener('input', () => {
        zipcodeError.textContent ="";
        if(!zipcode.validity.valid){
            errorDisplay();
        }
    })

    password.addEventListener('input', () =>{
        passwordError.textContent = "";
        if(!password.validity.valid){
            errorDisplay();
        }
    })

    confirm_password.addEventListener('input', () => {
        confirm_password.textContent = "";
        if(!confirm_password.validity.valid){
            errorDisplay();
        }
    })

    const errorDisplay = () => {
        // EMAIL
        if(email.validity.valueMissing){
            emailError.textContent = "Email Required";
            email.classList.add('error');
        }else if(email.validity.typeMismatch) {
            emailError.textContent = "Please enter a valid email";
            email.classList.add('error');
        }
        // COUNTRY
        if(country.validity.valueMissing) {
            countryError.textContent = "Country Required";
            country.classList.add('error');
        }else if(country.validity.patternMismatch) {
            countryError.textContent = "Please enter a valid country";
            country.classList.add('error');
        }
        // ZIPCODE
        if(zipcode.validity.valueMissing) {
            zipcodeError.textContent = "Zipcode Required";
            zipcode.classList.add('error');
        }else if(zipcode.validity.patternMismatch) {
            zipcodeError.textContent = "Please enter a valid Zipcode";
            zipcode.classList.add('error');
        }
        // PASSWORD
        if(password.validity.valueMissing) {
            passwordError.textContent = "Password Required";
            password.classList.add('error');
        }else if(password.validity.tooShort) {
            passwordError.textContent = "Minimum 6 characters";
            password.classList.add('error');
        }else if(password.validity.tooLong) {
            passwordError.textContent = "Maximum 15 characters";
            password.classList.add('error');
        }
        // CONFIRM PASSWORD
        if(confirm_password.validity.valueMissing) {
            confirm_password_Error.textContent = "Password Required";
            confirm_password.classList.add('error');
        }else if(confirm_password.validity.tooShort) {
            confirm_password_Error.textContent = "Minimum 6 characters";
            confirm_password.classList.add('error');
        }else if(confirm_password.validity.tooLong) {
            confirm_password_Error.textContent = "Maximum 15 characters";
            confirm_password.classList.add('error');
        }
    }


};

validationForm();