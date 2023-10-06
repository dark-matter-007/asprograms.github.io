import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getDatabase, ref, get, set } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js";

// configure database requirements
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Get data from the Realtime Database once
// const myValRef = ref(database, "users/ashwin");

// get(myValRef)
//   .then((snapshot) => {
//     if (snapshot.exists()) {
//       const myVal = snapshot.val();
//       console.log("myVal value is - ", myVal);
//     } else {
//       console.log("No data available");
//     }
//   })
//   .catch((error) => {
//     console.error("Error reading data: ", error);
//   });



document.getElementById("loginButton").onclick = handleLogin
function handleLogin() {
    const name = document.getElementById("name").value
    const pswd = document.getElementById("pswd").value
    get( ref(database, "users/" + name)).then((response) => {
        console.log(response.val())
        if (response.val().pswd == pswd) {
            console.log("login verified");
            document.getElementById("loginNotifications").innerText = "Login Successful!"
        } else {
            document.getElementById("loginNotifications").innerHTML = " <h1 class=' text-red-300'> Login Failed :( <br>Check your password! </h1>"
        }
    }).catch((err) => {
        document.getElementById("loginNotifications").innerHTML = " <h1 class=' text-red-300'> The user does not exist! </h1>"
    });
}


document.getElementById("signupButton").onclick = handleSignup
function handleSignup() {
    const name = document.getElementById("name").value
    const pswd = document.getElementById("pswd").value
    set( ref(database, "users/" + name), { "name" : name, "pswd" : pswd }).then(() => {
        console.log("User created successfully!")
        document.getElementById("loginNotifications").innerHTML = "<h1> Sign Up Successful! Now LogIn with the same. </h1>"
    }).catch((err) => {
        console.log("Could NOT create user :(");
    });
}
