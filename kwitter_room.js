var firebaseConfig = {
  apiKey: "AIzaSyDAJE29TDm3YllKCKu32fJ3x5L29azFLFk",
  authDomain: "projectkwi.firebaseapp.com",
  databaseURL: "https://projectkwi-default-rtdb.firebaseio.com",
  projectId: "projectkwi",
  storageBucket: "projectkwi.appspot.com",
  messagingSenderId: "643119211377",
  appId: "1:643119211377:web:f901c38805eb7fd4b48cd0"
};
  
  
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " +  user_name + "!";
function addRoom(){
  room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
  purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location = "kwitter_page.html";

}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  
  console.log("room name -" + Room_names);
  row = "<div class = 'room_name' id= "+ Room_names +" onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
  document.getElementById("output").innerHTML += row;


 
  });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}