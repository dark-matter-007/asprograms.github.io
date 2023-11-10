// import nodemailer from "https://cdn.skypack.dev/nodemailer-browser";

function composeMail(userName) {
  const nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "ashwin.aksharma.p@gmail.com",
      pass: "wjrf acpq cqgy ldog",
    },
  });

  const mailOptions = {
    from: "ashwin.aksharma.p@gmail.com",
    to: "ashwin.aksharma@gmail.com",
    subject: "NotificationBus @ ASPrograms",
    text: `Hi ${userName}!\nWe are amused at having you being a part of our keep up services!`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
}

// Example usage
composeMail("John");
