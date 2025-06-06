// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJSK8OL27yMyVuWN_RXKKK5bNw7h8z464",
  authDomain: "brandshop-auth-project.firebaseapp.com",
  projectId: "brandshop-auth-project",
  storageBucket: "brandshop-auth-project.appspot.com",
  messagingSenderId: "347123400379",
  appId: "1:347123400379:web:1c407009753a5ea4c5739e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;