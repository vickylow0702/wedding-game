import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAn6-2i-HVO8helq4U0qUfMXjOs2pz17Yo",
  authDomain: "wedding-game-8a9be.firebaseapp.com",
  databaseURL: "https://wedding-game-8a9be-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wedding-game-8a9be",
  storageBucket: "wedding-game-8a9be.firebasestorage.app",
  messagingSenderId: "673225133868",
  appId: "1:673225133868:web:07b7254133470882696689"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);