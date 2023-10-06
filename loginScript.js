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

document.getElementById("loginOverlay").setAttribute("style", "opacity : 0; z-index: -10;");
document.getElementById("logOverButton").onclick = toggleLoginOverlay

function toggleLoginOverlay() {
    document.getElementById("loginOverlay").setAttribute("style", "opacity : 1;")
    console.log("login overlay was toggled!")
}
// toggleLoginOverlay()


document.getElementById("loginButton").onclick = handleLogin
function handleLogin() {    
    document.getElementById("loginNotifications").innerHTML = " <h1 class=' text-white'> Processing request... </h1>"
    const name = document.getElementById("name").value
    const pswd = document.getElementById("pswd").value
    get( ref(database, "users/" + name)).then((response) => {
        console.log(response.val())
        if (response.val().pswd == pswd) {
            console.log("login verified");
            document.getElementById("loginNotifications").innerText = "Login Successful!"
            document.getElementById("userName").innerText = name;
        } else {
            document.getElementById("loginNotifications").innerHTML = " <h1 class=' text-red-300'> Login Failed :( <br>Check your password! </h1>"
        }
    }).catch((err) => {
        document.getElementById("loginNotifications").innerHTML = " <h1 class=' text-red-300'> The user does not exist! </h1>"
    });
}

document.getElementById("signupButton").onclick = handleSignup
function handleSignup() {
    document.getElementById("loginNotifications").innerHTML = " <h1 class=' text-white'> Processing request... </h1>"
    const name = document.getElementById("name").value
    const pswd = document.getElementById("pswd").value
    get( ref(database, "users/" + name)).then((response) => {
        document.getElementById("loginNotifications").innerHTML = " <h1 class=' text-red-300'> The user already exists! </h1>"
        if ( response.val() == null ) {
            document.getElementById("loginNotifications").innerHTML = " <h1 class=' text-red-300'> The user does not exist! </h1>"
            set( ref(database, "users/" + name), { "name" : name, "pswd" : pswd }).then(() => {
                console.log("User created successfully!")
                document.getElementById("loginNotifications").innerHTML = "<h1> Sign Up Successful! Now Login with the same. </h1>"
            }).catch((err) => {
                 document.getElementById("loginNotifications").innerHTML = " <h1 class=' text-red-300'> Failure : unknown reason :( </h1>"
                console.log("Failed - unknown reason :(");
            });    
        }
        }
    ).catch((err) => {
        document.getElementById("loginNotifications").innerHTML = " <h1 class=' text-red-300'> The user does not exist! </h1>"
        set( ref(database, "users/" + name), { "name" : name, "pswd" : pswd }).then(() => {
            console.log("User created successfully!")
            document.getElementById("loginNotifications").innerHTML = "<h1> Sign Up Successful! Now Login with the same. </h1>"
        }).catch((err) => {
             document.getElementById("loginNotifications").innerHTML = " <h1 class=' text-red-300'> Failure : unknown reason :( </h1>"
            console.log("Failed - unknown reason :(");
        });
    });
}


document.getElementById("skipButton").onclick = handleSkip
function handleSkip() {
    document.getElementById("loginOverlay").setAttribute("style", "opacity:0; z-index: -10;")
    console.log("skipped login")
}

// document.getElementById("visitCounter").innerText = "fetching...";
// get ( ref(database, "visitors/number") ).then ( (response) => {
//     if ( response.val() == null ) {
//         console.log("no visitors")
//         set ( ref(database, "visitors"), {"number" : 1}).then(() => {
//             console.log("got first visitor!");
//         }).catch((err) => {
//             console.log ("Could not increment visitors :(");
//         })
//         document.getElementById("visitCounter").innerText = "error";
//     } else {
//         set ( ref(database, "visitors"), {"number" : response.val() + 1}).then(() => {
//             console.log("incremented visitor number!");
//         }).catch((err) => {
//             console.log ("Could not increment visitors :(");
//         })
//         console.log("Got total visitors = " + (response.val() + 1));
//         document.getElementById("visitCounter").innerHTML = "<span class = ' text-2xl'>" + ( response.val() + 1) + "</span>";
//         };
//     }).catch ((err) => {
//         console.log ("Faced issues in fetching visits" + err);
//     })

