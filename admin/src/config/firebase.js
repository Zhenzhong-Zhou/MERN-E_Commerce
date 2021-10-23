// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyASdcF8YcEKCFg3R7HzBLUQcBZ_NyaUBUo",
	authDomain: "e-commerce-aa02c.firebaseapp.com",
	projectId: "e-commerce-aa02c",
	storageBucket: "e-commerce-aa02c.appspot.com",
	messagingSenderId: "752589405128",
	appId: "1:752589405128:web:f31b9cc5e5a5c929835efd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;