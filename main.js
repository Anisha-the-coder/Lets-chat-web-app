function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name" , user_name);
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
    window.location = "Lets-chat_room.html";
}