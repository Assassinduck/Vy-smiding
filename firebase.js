//const firebase = require("firebase");
// Required for side-effects






import firebase from "firebase/app"

import "firebase/firestore"
 
  const firebaseConfig = {
    apiKey: "AIzaSyBb0BppJgB9n9FV4ODI2un2c0-PQ3dBSys",
    authDomain: "react-native-smidig.firebaseapp.com",
    databaseURL: "https://react-native-smidig.firebaseio.com",
    projectId: "react-native-smidig",
    storageBucket: "react-native-smidig.appspot.com",
    messagingSenderId: "799589533157",
    appId: "1:799589533157:web:99c3212b07d95868885b0c",
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    console.log("init firebase");
    
}
  



  




export default firebase