import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { firebase } from "@firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBUTd5_OZexWx4iG-MScH8mTmSRJCqmZlw",
  authDomain: "note-application-67a0c.firebaseapp.com",
  projectId: "note-application-67a0c",
  storageBucket: "note-application-67a0c.appspot.com",
  messagingSenderId: "1054319275219",
  appId: "1:1054319275219:web:3cff6e9a6d0ec01d417826",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
