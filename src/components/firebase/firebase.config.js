import { initializeApp } from "firebase/app";

const firebaseConfig = {
  vite_apiKey:import.meta.env.VITE_apiKey,
  vite_authDomain:import.meta.env.VITE_authDomain,
  vite_projectId:import.meta.env.VITE_projectId,
  vite_storageBucket:import.meta.env.VITE_storageBucket,
  vite_messagingSenderId:import.meta.env.VITE_messagingSenderId,
  vite_appId:import.meta.env.VITE_appId
};

const app = initializeApp(firebaseConfig);
export default app;