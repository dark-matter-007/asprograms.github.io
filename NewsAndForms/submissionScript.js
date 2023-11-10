import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
// import nodemailer from "https://cdn.skypack.dev/nodemailer-browser";
import {
  getDatabase,
  ref,
  get,
  set,
} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDlLRvgf8tz5Zi9MkE1KVQKM8hiYoPZxHU",
  authDomain: "asprogramsdatabase.firebaseapp.com",
  databaseURL: "https://asprogramsdatabase-default-rtdb.firebaseio.com",
  projectId: "asprogramsdatabase",
  storageBucket: "asprogramsdatabase.appspot.com",
  messagingSenderId: "405177669223",
  appId: "1:405177669223:web:0fb0eedfb59d17877c66c2",
  measurementId: "G-C5WDGFVTZY",
};

// composeMail("testUser");

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

document.getElementById("submissionButton").onclick = () => {
  if (
    confirm(
      "Sure about submitting your details and subscribing to the service?"
    )
  ) {
    submit();
  }
};
function submit() {
  try {
    get(ref(database, "keepUpSubscribers/")).then((response) => {
      const numm = response.val();
      const len = Object.keys(numm).length;

      const subscriberName = document.getElementById("subscriberName").value;
      const subscriberOption =
        document.getElementById("subscriberOption").value;
      const subscriberContact =
        document.getElementById("subscriberContact").value;
      const subscriberMail = document.getElementById("subscriberMail").value;

      if (subscriberMail == "" && subscriberContact == "") {
        alert("Some required field has been left empty!");
      } else {
        const newSubscriber = {
          name: subscriberName,
          option: subscriberOption,
          contact: subscriberContact,
          mail: subscriberMail,
        };

        set(
          ref(database, "keepUpSubscribers/" + (len + 1).toString()),
          newSubscriber
        );
        alert("Thank you for being enrolled with us!");
        // composeMail(subscriberName);
        alert("We have sent you a mail too!");
      }
    });
  } catch {
    alert("Could not enroll you... Please try again!");
  }
}

// function composeMail(userName) {
//   const nodemailer = require("nodemailer-browser");
//   const transporter = nodemailer.createTransport({
//     service: "Gmail",
//     auth: {
//       user: "ashwin.aksharma.p@gmail.com",
//       pass: "wjrf acpq cqgy ldog",
//     },
//   });

//   const mailOptions = {
//     from: "ashwin.aksharma.p@gmail.com",
//     to: "ashwin.aksharma@gmail.com",
//     subject: "NotificationBus @ ASPrograms",
//     text:
//       "Hii" +
//       userName +
//       "! \nWe are amused at having you being a part of our keep up services!",
//   };

//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       console.error("Error sending email:", error);
//     } else {
//       console.log("Email sent:", info.response);
//     }
//   });
// }
