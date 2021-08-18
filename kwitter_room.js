
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

      user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;

             firebase.database().ref("/").child(room_name).update({
                  purpose: "Adding Room Name"
            });
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "kwitter_page.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
            console.log("room_name - " + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
            document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToroomname(name){
      console.log(name);
      localStorage.setItem("Roomname",name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("Username");
      localStorage.removeItem("Roomname");
      window.location = "index.html";
}