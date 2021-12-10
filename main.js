// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwuUSPAcOKZUnHJkPWFLirBPAJERLPNbM",
  authDomain: "hope-kay-c2c5c.firebaseapp.com",
  projectId: "hope-kay-c2c5c",
  storageBucket: "hope-kay-c2c5c.appspot.com",
  messagingSenderId: "237555813893",
  appId: "1:237555813893:web:de2b9b164c00184430166c",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

document.getElementById('contact form').addEventListener('submit', submitform);

// submit form
function submitform(e){
    e.preventDefault();

    // Get values
    var name= getinputval('name')
    var surname= getinputval('surname')
    var email= getinputval('email')
    var phone= getinputval('phone')
    var message= getinputval('message');

    // Save massage
    saveMassage(name, surname, email, phone, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';
    
    // Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);

     // Clear form
     document.getElementById('contactForm').reset();
}

// Function to  get form values
function getinputval(id){
    return document.getElementById(id).value;
}

// Save massage to firebase
function saveMassage(name, company, email, phone, massage){
    var newMassageRef.push();
    newMassageRef.set({
        name: name,
        surname: surname,
        email: email,
        phone: phone,
        massage:massage
    });
}