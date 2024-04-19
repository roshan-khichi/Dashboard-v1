
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDlbCGSeXHcVp4AxFz6jXt2zu_Xtl3wZ9E",
    authDomain: "dashboard-version-1-d56c4.firebaseapp.com",
    projectId: "dashboard-version-1-d56c4",
    storageBucket: "dashboard-version-1-d56c4.appspot.com",
    messagingSenderId: "92703874642",
    appId: "1:92703874642:web:1641105232aa0cf156498b",
    measurementId: "G-ND9NF86WX7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

//login button and values
const logInEmail = document.querySelector("#login-email");
const logInpassword = document.querySelector("#login-password");
const logInBtn = document.querySelector("#login-btn");

//register user values and button
const registerName = document.querySelector("#register-name");
const registerEmail = document.querySelector("#register-email");
const registerPassword = document.querySelector("#register-password");
const registerBtn = document.querySelector("#register-btn");

//actice login button
const activelogin = document.querySelector('#active-login')
const activeregister = document.querySelector('#active-register')

const loginForm = document.querySelector('.login-form');
const registeForm = document.querySelector('.register-form')


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


// //register user
// const registerUser = async () => {
//     const signUpEmail = registerEmail.value;
//     const signUpPassword = registerPassword.value;
//     createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
//         .then((userCredential) => {
//             const user = userCredential.user;
//             console.log(user);
//             alert("Your account is created!");
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log(errorCode + errorMessage);
//         })
// }

// //login user
// const userLogin = async () => {
//     const loginEmail = logInEmail.value;
//     const loginPassword = logInpassword.value;
//     signInWithEmailAndPassword(auth, loginEmail, loginPassword)
//         .then((userCredential) => {
//             const user = userCredential.user;
//             alert("Sign in successfully");
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log(errorCode + errorMessage);
//         })
// }

// //check user
// const checkAuthState = async () => {
//     onAuthStateChanged(auth, user => {
//         if (user) {

//         }
//         else {

//         }
//     })
// }



// registerBtn.addEventListener('click', registerUser)
// logInBtn.addEventListener('click', userLogin)
