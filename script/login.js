
let url = "http://localhost:3000/api/users"

//actice login button
const activelogin = document.querySelector('#active-login')
const activeregister = document.querySelector('#active-register')

const loginForm = document.querySelector('.login-form');
const registeForm = document.querySelector('.register-form')


//otp button and form values
// const otpBtn = document.querySelector("#otp-btn");
const otpForm = document.querySelector(".otp-form");


//login button and values
const logInEmail = document.querySelector("#login-email");
const logInPassword = document.querySelector("#login-password");
const logInBtn = document.querySelector("#login-btn");

//register user values and button
const registerName = document.querySelector("#register-name");
const registerEmail = document.querySelector("#register-email");
const registerPassword = document.querySelector("#register-password");
const registerBtn = document.querySelector("#register-btn");


//enable and disabel forms  

function toggleForms(activeForm, inactiveForm) {
    activeForm.classList.add('active');
    activeForm.classList.remove('inactive');
    inactiveForm.classList.remove('active');
    inactiveForm.classList.add('inactive');
}

activelogin.addEventListener('click', () => {
    toggleForms(loginForm, registeForm);
});

activeregister.addEventListener('click', () => {
    toggleForms(registeForm, loginForm);
});

//otp verify enable 
const otpEnable = () => {
    loginForm.classList.remove('active');
    registeForm.classList.remove('active');
    loginForm.classList.add('inactive');
    registeForm.classList.add('inactive');
    otpForm.classList.remove('inactive');
}


//commond Header

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");


//register user

const registerNewUser = () => {
    const createUserParams = JSON.stringify({
        "name": `${registerName.value}`,
        "email": `${registerEmail.value}`,
        "password": `${registerPassword.value}`
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: createUserParams
    };

    fetch(`${url}/register`, requestOptions)
        .then((data) => data.json())
        .then((response) => {
            console.log(response)
            if (response.message === "User registered successfully. Please verify your OTP.") {
                otpEnable();
            } else { alert(response) }
        })
        .catch((error) => console.error(error));
}


//login user

const loginUser = () => {
    const loginUserParams = JSON.stringify({
        "email": `${logInEmail.value}`,
        "password": `${logInPassword.value}`
    });
    const loginRequestOptions = {
        method: "POST",
        headers: myHeaders,
        body: loginUserParams,
        redirect: "follow"
    };
    console.log(loginUserParams)
    fetch(`${url}/login`, loginRequestOptions)
        .then((data) => data.json())
        .then((response) => {
            console.log(response)
            if (response.message == "Login successful") {
                window.location.href = '/';
            }
            else {
                alert(response)
            }
        })
        .catch((error) => console.error(error));
}


registerBtn.addEventListener('click', registerNewUser);

logInBtn.addEventListener('click', loginUser);











