import firebase from "firebase/app";
import "firebase/analytics";

var firebaseConfig = {
  apiKey: "AIzaSyBiLhN-ZJT4Gq57CU8LJgiTTkOvufOhjQg",
  authDomain: "phoneson-art.firebaseapp.com",
  databaseURL: "https://phoneson-art.firebaseio.com",
  projectId: "phoneson-art",
  storageBucket: "phoneson-art.appspot.com",
  messagingSenderId: "206464800890",
  appId: "1:206464800890:web:5e458b7066d289dabfc3c3",
  measurementId: "G-EJMDDY37PT"
};

if (typeof window !== "undefined" && !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}
