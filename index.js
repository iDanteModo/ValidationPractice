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
    const confirm_password_Error = document.querySelector('#passwordConfirmation+ span.errorMsg');
    const submit = document.querySelector('button');
    let click = 0;

    email.addEventListener('input', () => {
        emailError.textContent ="";
        if(!email.validity.valid){
            validateInput(email);
        }
    })

    country.addEventListener('input', () => {
        countryError.textContent = "";
        if(!country.validity.valid){
            validateInput(country);
        }
    })

    zipcode.addEventListener('input', () => {
        zipcodeError.textContent ="";
        if(!zipcode.validity.valid){
            validateInput(zipcode);
        }
    })

    password.addEventListener('input', () =>{
        passwordError.textContent = "";
        if(!password.validity.valid){
            validateInput(password);
        }else {
            checkPasswords();
        }
    })

    confirm_password.addEventListener('input', () => {
        confirm_password_Error.textContent = "";
        if(!confirm_password.validity.valid){
            validateInput(confirm_password);
        }else {
            checkPasswords();
        }
    })

    submit.addEventListener('click', () => {
        localStorage.setItem('Email'+ click, email.value);
        localStorage.setItem('Country'+ click, country.value);
        localStorage.setItem('Zipcode' + click, zipcode.value);
        localStorage.setItem('Password' + click, password.value);
        click ++;
    })

    function validateInput(inputField) {
        const inputName = inputField.dataset.info;
        const inputError = "#" + inputField.dataset.info + "+span.errorMsg";
        const iError = document.querySelector(inputError);
        if(inputField.validity.valueMissing) {
            iError.textContent = `${inputName} is required`;
        }else if (inputField.validity.patternMismatch) {
            iError.textContent = `Please insert a valid ${inputName}`;
        }else if (inputField.validity.tooShort) {
            iError.textContent = "Minimum 6 characters";
        }else if (inputField.validity.typeMismatch) {
            iError.textContent = `Please insert a valid ${inputName};`
        }
    }

    function checkPasswords(){
       if(password.value != confirm_password.value){
        passwordError.textContent = "Passwords do not match";
        confirm_password_Error.textContent ="Passwords do not match";
        password.classList.remove('valid');
        confirm_password.classList.remove('valid');
        password.classList.add('notValid');
        confirm_password.classList.add('notValid');
       }else {
        passwordError.textContent = "";
        confirm_password_Error.textContent ="";
        password.classList.remove('notValid');
        confirm_password.classList.remove('notValid');
        password.classList.add('valid');
        confirm_password.classList.add('valid');
       }
        }

};

validationForm();