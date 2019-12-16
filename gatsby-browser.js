import firebase from "firebase/app"
import "firebase/analytics"

var firebaseConfig = {
  apiKey: "AIzaSyDPlRFVaAbZhzMMGxSWLhX-h50EQZtd-ls",
  authDomain: "phones-on.firebaseapp.com",
  databaseURL: "https://phones-on.firebaseio.com",
  projectId: "phones-on",
  storageBucket: "phones-on.appspot.com",
  messagingSenderId: "874335448783",
  appId: "1:874335448783:web:bc9e616d2d73266ad151ba",
  measurementId: "G-GGN691ME4Y",
}

if (typeof window !== "undefined" && !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
  firebase.analytics()
}
