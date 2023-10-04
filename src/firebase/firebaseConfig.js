import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDb6fhya6o3LjIRRy1nb9qislBJgWvsyAY",
  authDomain: "pedramoura-926cc.firebaseapp.com",
  projectId: "pedramoura-926cc",
  storageBucket: "pedramoura-926cc.appspot.com",
  messagingSenderId: "903279984235",
  appId: "1:903279984235:web:15c261d0b9f744313d3b2e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
