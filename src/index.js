import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyDCK8nyldHiz46NY_0thiHm3acvKodD_Jk",
  authDomain: "fungistore-4a0b6.firebaseapp.com",
  projectId: "fungistore-4a0b6",
  storageBucket: "fungistore-4a0b6.appspot.com",
  messagingSenderId: "127156793956",
  appId: "1:127156793956:web:d3840a19f9c73bd19b6571"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

