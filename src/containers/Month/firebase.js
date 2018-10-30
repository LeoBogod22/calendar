import * as firebase from "firebase";
var firebaseConfig = {
 apiKey: "AIzaSyApQsGhOkU1Vp4IdVdHMLa30kRYubmozLA",
    authDomain: "chatbot-8d3eb.firebaseapp.com",
    databaseURL: "https://chatbot-8d3eb.firebaseio.com",
    projectId: "chatbot-8d3eb",
    storageBucket: "chatbot-8d3eb.appspot.com",
    messagingSenderId: "409863846617"
};
  firebase.initializeApp(firebaseConfig);

const databaseRef = firebase.database().ref();

export const tasksRef = databaseRef.child('tasks');

export const timeRef = firebase.database.ServerValue.TIMESTAMP;
export default databaseRef;