import firebase from "firebase/app";

import "firebase/analytics";

import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
    apiKey: "AIzaSyAPYtLe5OsiSkIokLQD7b9u6JOHjQuuzsc",
    authDomain: "xact-62c61.firebaseapp.com",
    projectId: "xact-62c61",
    storageBucket: "xact-62c61.appspot.com",
    messagingSenderId: "14603543991",
    appId: "1:14603543991:web:7f4537c6f29fe6519c7432"
});

export const db = firebase.firestore();
export const auth = firebase.auth();
