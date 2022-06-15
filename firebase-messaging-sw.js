// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyAPYtLe5OsiSkIokLQD7b9u6JOHjQuuzsc",
    authDomain: "xact-62c61.firebaseapp.com",
    projectId: "xact-62c61",
    storageBucket: "xact-62c61.appspot.com",
    messagingSenderId: "14603543991",
    appId: "1:14603543991:web:7f4537c6f29fe6519c7432"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('onBackgroundMessage');
    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: payload.notification.image,
    });
    self.registration.hideNotification();
});
