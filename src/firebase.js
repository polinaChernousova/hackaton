// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXQLKEWpAuqXyh2evULyGpA86UqDOe8F8",
  authDomain: "book-store-3e08d.firebaseapp.com",
  projectId: "book-store-3e08d",
  storageBucket: "book-store-3e08d.appspot.com",
  messagingSenderId: "774589805408",
  appId: "1:774589805408:web:97219fad5b544222752405",
  measurementId: "G-BCQJRJDMYF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;
