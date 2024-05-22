import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { env } from "process";

const firebaseConfig = {
    apiKey: env.API_KEY,
    authDomain: "productdesign-d72a5.firebaseapp.com",
    projectId: "productdesign-d72a5",
    storageBucket: "productdesign-d72a5.appspot.com",
    messagingSenderId: "577663087865",
    appId: "1:577663087865:web:6c927f89d3896272905e28",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
