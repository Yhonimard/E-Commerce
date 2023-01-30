import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'jhon-e-commerce.firebaseapp.com',
  projectId: 'jhon-e-commerce',
  storageBucket: 'jhon-e-commerce.appspot.com',
  messagingSenderId: '881435429017',
  appId: '1:881435429017:web:2b792c4b8ef2b2bbe9d008',
  measurementId: 'G-PP7XZVDGQ2',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
