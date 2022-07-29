  // Import the functions you need from the SDKs you need
  import { initializeApp} from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js' 
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCldRR5HQhYgsn3xflgI86rfVoL2Ss62Bg",
    authDomain: "learningnodejs-cec4e.firebaseapp.com",
    projectId: "learningnodejs-cec4e",
    storageBucket: "learningnodejs-cec4e.appspot.com",
    messagingSenderId: "303032642952",
    appId: "1:303032642952:web:7c6f9f0ff3940fc458de3d"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

    
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js' 
console.log("test1")
const auth = getAuth();
function createUser(email, password){
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}
function loginUser(email, password){
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    }); 
}
module.exports = { loginUser, createUser};
