import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDIx3_GJefNIzLgP1M_bA23-xVO8O9ZCfc",
    authDomain: "gate-cse-rn.firebaseapp.com",
    databaseURL: "https://gate-cse-rn.firebaseio.com",
    projectId: "gate-cse-rn",
    storageBucket: "gate-cse-rn.appspot.com",
    messagingSenderId: "39604630999",
    appId: "1:39604630999:web:d74f14a56602bafec3c792",
    measurementId: "G-RP9GW50351"
  };


firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
