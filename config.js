import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyBueAAXL_hUSTQUXcRuT7dmhgQtDqz8bb8",
	authDomain: "e-library-app-4b16d.firebaseapp.com",
	projectId: "e-library-app-4b16d",
	storageBucket: "e-library-app-4b16d.appspot.com",
	messagingSenderId: "901121375065",
	appId: "1:901121375065:web:a860ff1dd994dfb41cea48"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
