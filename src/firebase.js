// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";   // 用來存文字
import { getStorage } from "firebase/storage";       // 用來存圖片

const firebaseConfig = {
  apiKey: "AIzaSyAhs6Hap_VTMTD0xKEB3qGDJJIw6NqYZHk",
  authDomain: "my-salon-app-85dd7.firebaseapp.com",
  projectId: "my-salon-app-85dd7",
  storageBucket: "my-salon-app-85dd7.firebasestorage.app",
  messagingSenderId: "455789570278",
  appId: "1:455789570278:web:f6a70b681ad74bf2f5f327",
  measurementId: "G-TT4MFK4MXH"
};

// 初始化 Firebase App
const app = initializeApp(firebaseConfig);

// 匯出 Firestore 和 Storage
export const db = getFirestore(app);
export const storage = getStorage(app);