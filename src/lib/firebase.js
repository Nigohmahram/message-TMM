import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: import.meta.env.VITE_API_KEY,
	authDomain: 'reactmessage-a3d9d.firebaseapp.com',
	projectId: 'reactmessage-a3d9d',
	storageBucket: 'reactmessage-a3d9d.appspot.com',
	messagingSenderId: '688203737396',
	appId: '1:688203737396:web:2612ba4ed7d927c2771d61',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
