

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

    room_name = localStorage.getItem("Roomname");
    user_name = localStorage.getItem("Username");

    console.log("room name "+room_name);
    console.log("user name "+user_name);

    function logout() {
          localStorage.removeItem("Roomname");
          localStorage.removeItem("Username");
          window.location.replace("index.html");
    }
    function send() {
          msg = document.getElementById("msg").value;
          console.log("Message "+msg);
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0,
                dislike:0
          });
          document.getElementById("msg").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      
//End code
      } });  }); }
getData();
