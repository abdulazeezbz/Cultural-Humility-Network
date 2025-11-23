import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCE4dVow0Hb7XjjzSJ5FtUDm_zspr-nqqc",
  authDomain: "cultural-humility.firebaseapp.com",
  databaseURL: "https://cultural-humility-default-rtdb.firebaseio.com/",
  projectId: "cultural-humility",
  storageBucket: "cultural-humility.firebasestorage.app",
  messagingSenderId: "953964566330",
  appId: "1:953964566330:web:7b5b8a8e7d7205e18ca203",
  measurementId: "G-BB5SW9C7SV"

};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, push };
