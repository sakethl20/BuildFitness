// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM2-PeiGujlCn8Uynfobdr8TgwnkqNTls",
  authDomain: "fir-auth-4a531.firebaseapp.com",
  projectId: "fir-auth-4a531",
  storageBucket: "fir-auth-4a531.appspot.com",
  messagingSenderId: "321742393105",
  appId: "1:321742393105:web:d35176d987a6ab8488c6b0"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };