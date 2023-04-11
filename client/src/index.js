import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter as Router } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {initializeAnalytics } from  "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyD_OKCjgVUePBaR6KmvjCirYEOSyB_8qTg",
    authDomain: "dsgt-website.firebaseapp.com",
    databaseURL: "https://dsgt-website.firebaseio.com",
    projectId: "dsgt-website",
    storageBucket: "dsgt-website.appspot.com",
    messagingSenderId: "672446353769",
    appId: "1:672446353769:web:f98c65e7ff823af3",
    measurementId: "G-JD5EVFJVXW",
};
const app = initializeApp(firebaseConfig);
initializeAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
