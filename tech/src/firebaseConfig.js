// src/firebase/firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDMcXgXuaMvLlIIU730LiNP0UN_tigo6go",
  authDomain: "commercetechback.firebaseapp.com",
  projectId: "commercetechback",
  storageBucket: "commercetechback.appspot.com",
  messagingSenderId: "1018077120060",
  appId: "1:1018077120060:web:ae80fef1f62920c1a52539",
  measurementId: "G-3XMSX8LNLR"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Inicializar o Firestore
const db = getFirestore(app);

export { db };
