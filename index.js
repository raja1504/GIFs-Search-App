// import our functions from ourFunctions.js
const ourFunctions = require('./ourFunctions.js');

// ===== Firebase configuration (start) ==== //
let firebaseConfig = {
    apiKey: "AIzaSyA5ItxHAyDo8-UI3NvXdZE0GjKeByBk4mU",
    authDomain: "taskapp-86246.firebaseapp.com",
    projectId: "taskapp-86246",
    storageBucket: "taskapp-86246.appspot.com",
    messagingSenderId: "1098706312535",
    appId: "1:1098706312535:web:7e45a8f0b7fae192c77212",
    measurementId: "G-LJK377FX4L"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// ===== Firebase configuration (end) ==== //

// button variables
let loginBtn = document.getElementById('loginBtn');
let registerBtn = document.getElementById('registerBtn');
let submitBtn = document.getElementById('submitBtn');
// input field variables
let userInput = document.getElementById('login');
let passInput = document.getElementById('password');


// login tab
loginBtn.addEventListener('click', function(e) {
    userInput.value = "";
    passInput.value = "";
    this.className = 'active';
    registerBtn.className = 'inactive underlineHover';
    submitBtn.value = 'Login';
});

//register tab
registerBtn.addEventListener('click', function(e) {
    userInput.value = "";
    passInput.value = "";
    this.className = 'active';
    loginBtn.className = 'inactive underlineHover';
    submitBtn.value = 'Register';
});

// submit button
submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    if (submitBtn.value === 'Register') {
        // check if any inputs are empty
        if (ourFunctions.checkIfInputEmpty(userInput.value, passInput.value)) {
            console.log('Please fill in all fields.');
        } else {
                ourFunctions.registerUser(userInput.value, passInput.value);
            }
    } else if (submitBtn.value === 'Login') {
        ourFunctions.loginUser(userInput.value, passInput.value);
    }
})