import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDlLRvgf8tz5Zi9MkE1KVQKM8hiYoPZxHU",
    authDomain: "asprogramsdatabase.firebaseapp.com",
    databaseURL: "https://asprogramsdatabase-default-rtdb.firebaseio.com",
    projectId: "asprogramsdatabase",
    storageBucket: "asprogramsdatabase.appspot.com",
    messagingSenderId: "405177669223",
    appId: "1:405177669223:web:0fb0eedfb59d17877c66c2",
    measurementId: "G-C5WDGFVTZY"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

// Push data to the Realtime Database
const usersRef = ref(database, "users/ashwin");
// const visitsRef = ref(database, "visitors/visitors");
// const userData = {
//   name: "Ashwin",
//   email: "ashwin.aksharma@gmail.com"
// };

// set(databaseRef, userData)
//   .then(() => {
//     console.log("Data has been successfully written to the database.");
//   })
//   .catch((error) => {
//     console.error("Error writing data to the database: ", error);
//   });

let user;
get( ref(database, "users/ashwin")).then(
    (response) => {
        console.log ("The response received from firebase is : ", response.val().name);
        user = response.val().name;
        document.getElementById("userName").innerText = "Welcome : " + user // because scope of newly defined value lies within this block :()
    }
).catch(
    (err) => {
        console.error ("Error reading data from firebase : ", err);
        document.getElementById("userName").innerText = "Welcome : Error"
    }
)

console.log ("Yes it is working fine")