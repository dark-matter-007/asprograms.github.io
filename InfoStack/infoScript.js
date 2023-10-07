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



document.getElementById("applicationsForJoining").innerText = "fetching...";
get ( ref(database, "applications/joining") ).then ( (response) => {
    if ( response.val() == null ) {
        document.getElementById("applicationsForJoining").innerHTML = "<span class=' text-3xl text-green-400 whitespace-nowrap'>Zero</span>";
    }  else {
        document.getElementById("applicationsForJoining").innerHTML = "<span class=' text-3xl text-green-400 whitespace-nowrap'>" + response.val() + "</span>";
    }
    console.log("working properly")
    }).catch ((err) => {
        console.log ("Faced issues in fetching applications : " + err);
    }
    )


document.getElementById("applicationForJoiningButton").onclick = increaseApplicationsForJoining;
function increaseApplicationsForJoining() {
    console.log("this function is invoked")
    get ( ref(database, "applications/joining") ).then ( (response) => {
        if ( response.val() == null ) {
            set ( ref(database, "applications"), {"joining" :  1}).then(() => {
                console.log("incremented applicationForJoining number!");
            }).catch((err) => {
                console.log ("Could not increment visitors :(");
            })} else {
            set ( ref(database, "applications"), {"joining" : response.val() + 1}).then(() => {
                console.log("incremented applicationForJoining number!");
            }).catch((err) => {
                console.log ("Could not increment visitors :(");
            })};
        })

}

// document.getElementById("loginButton").onclick = handleLogin
// function handleLogin() {    
//     document.getElementById("loginNotifications").innerHTML = " <h1 class=' text-white'> Processing request... </h1>"
//     const name = document.getElementById("name").value
//     const pswd = document.getElementById("pswd").value
//     get( ref(database, "users/" + name)).then((response) => {
//         console.log(response.val())
//         if (response.val().pswd == pswd) {
//             console.log("login verified");
//             document.getElementById("loginNotifications").innerText = "Login Successful!"
//             document.getElementById("userName").innerText = name;
//         } else {
//             document.getElementById("loginNotifications").innerHTML = " <h1 class=' text-red-300'> Login Failed :( <br>Check your password! </h1>"
//         }
//     }).catch((err) => {
//         document.getElementById("loginNotifications").innerHTML = " <h1 class=' text-red-300'> The user does not exist! </h1>"
//     });
// }
