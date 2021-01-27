import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyClHB_uyFfV_c3scW0fZ8baiZQyOMd4_ZU",
    authDomain: "react-ecommerce-coderhouse.firebaseapp.com",
    projectId: "react-ecommerce-coderhouse",
    storageBucket: "react-ecommerce-coderhouse.appspot.com",
    messagingSenderId: "13756296340",
    appId: "1:13756296340:web:f8742477f7a5e5ac835881"
});

export const getFirebase = () => {
    return app;
}

export const getFirestore = () => { //tengo acceso directo al firestore, es la que voy a usar en los componentes
    return firebase.firestore(app);
}
