// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCGV6qyjvW0HnnjED2_9PscFFzaXdbYF9o",
    authDomain: "lets-chat-web-app-fec1f.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-fec1f-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-fec1f",
    storageBucket: "lets-chat-web-app-fec1f.appspot.com",
    messagingSenderId: "536739215423",
    appId: "1:536739215423:web:50a4ece538e9232bc7208a",
    measurementId: "G-431EVXE08W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name" , user_name);
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
    window.location = "Kwitter_room.html";
}