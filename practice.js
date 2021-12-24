import { initializeApp } from "firebase/app";
var config = {
    apiKey: "AIzaSyC1rVjATd9KRj2262B0t1LGotn9wnGMISM",
    authDomain: "kwitter-19542.firebaseapp.com",
    databaseURL: "https://kwitter-19542-default-rtdb.firebaseio.com",
    projectId: "kwitter-19542",
    storageBucket: "kwitter-19542.appspot.com",
    messagingSenderId: "1025194240115",
    appId: "1:1025194240115:web:7dd4b691bc5e8073fe2206"
  };
  
  // Initialize Firebase
  var app = initializeApp(config);
//ADD YOUR FIREBASE LINKS

function addUser(){
user_name= document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
    purpose:"adding User"
});

}