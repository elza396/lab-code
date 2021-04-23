import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
    apiKey: "AIzaSyAypwNpKLdGThypEiYlCqWuxZ_EkzgEQ7w",
    authDomain: "lab-code-test.firebaseapp.com",
    projectId: "lab-code-test"
});

export const DB = firebase.firestore();


