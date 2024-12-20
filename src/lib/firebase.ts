import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';
 
const firebaseConfig = {
  apiKey: "AIzaSyDWh3Wgf0bI94q7Mi4p0VBIQN73hrrqTQU",
  authDomain: "bai003.firebaseapp.com",
  projectId: "bai003",
  storageBucket: "bai003.firebasestorage.app",
  messagingSenderId: "218926154413",
  appId: "1:218926154413:web:0123fc7064e4d030fa7c24"
};

export let app;
try {
  app = initializeApp(firebaseConfig);
} catch (error) {
  console.error('Firebase initialization failed:', error);
  app = null;
}

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);