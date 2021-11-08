// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebase from 'firebase/app';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/analytics';
// import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAppwWX9w3i6xW9XnwYgGtM2qjdWT6UTew',
	authDomain: 'linkme-14a04.firebaseapp.com',
	projectId: 'linkme-14a04',
	storageBucket: 'linkme-14a04.appspot.com',
	messagingSenderId: '765167473832',
	appId: '1:765167473832:web:fed572b7752aa2ca721e9d',
	measurementId: 'G-BYJR7LSW6C',
};

const auth = getAuth();
function signInWEmail() {}
// function signInWEmail(email, password) {
// 	// const app =
// 	initializeApp(firebaseConfig);
// 	// app;
// 	signInWithEmailAndPassword(auth, email, password)
// 		.then((userCredential) => {
// 			// Signed in
// 			const user = userCredential.user;
// 			console.log(user);
// 		})
// 		.catch((error) => {
// 			const errorCode = error.code;
// 			const errorMessage = error.message;
// 			console.log(errorCode + ' ' + errorMessage);
// 		});
// }

// function firebaseIntial() {
// 	if (!firebase.apps.length) {
// 		console.log('in firebase.apps.length');
// 		firebase.initializeApp(firebaseConfig);
// 	} else {
// 		firebase.app(); // if already initialized, use that one
// 		login();
// 		console.log('in firebase.apps else statement');
// 	}
// }

// function login() {
// 	let email = 'joshghori@gmail.com';
// 	let password = 'test123';
// 	firebase
// 		.auth()
// 		.signInWithEmailAndPassword(email, password)
// 		.then((u) => {
// 			console.log('Successfully Logged In');
// 			console.log(email);
// 		})
// 		.catch((err) => {
// 			console.log('Error: ' + err.toString());
// 		});
// }
export { signInWEmail };

// const analytics = getAnalytics(app);
