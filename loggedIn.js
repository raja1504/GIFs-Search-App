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

// use firebase's signout method.
let logoutBtn = document.getElementById('logout');

logoutBtn.addEventListener('click', function(e) {
    firebase.auth().signOut().then(() => {
        console.log('Logging out...');
        // direct to main login/resgistration page
        window.location.href = './index.html';
    }).catch(err => {
        console.log(err);
    })
});
