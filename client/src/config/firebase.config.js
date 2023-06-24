// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { collection, getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBPRNGgMGNau0Df96ek03QVzHldf1hqYeE',
	authDomain: 'vpa-compi.firebaseapp.com',
	projectId: 'vpa-compi',
	storageBucket: 'vpa-compi.appspot.com',
	messagingSenderId: '693475840180',
	appId: '1:693475840180:web:09c4f7dcdc2c949d0307e1'
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const profileImgCollectionRefference = collection(db, 'ProfileImg');

export const storage = getStorage(app);

// Authentication Module
export const auth = getAuth(app);
