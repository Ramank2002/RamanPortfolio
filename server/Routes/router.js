const express = require("express");
const router = new express.Router();
const users = require("../models/userSchema");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

// register user details

router.post("/register", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject) {
    res.status(401).json({ status: 401, error: "All input require" });
  }
  try {
    const preuser = await users.findOne({ email: email });
    if (preuser) {
      const userMessage = await preuser.Messagesave(message);
      console.log(userMessage);
      const mailOptions = {
        from: `"${name}" <${email}>`,
        to: process.env.EMAIL,
        subject: `"${name}" <${email}> : ${subject}`,
        text: message,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("Error sending email", error);
          res.status(500).json({ status: 500, error: "Error sending email" });
        } else {
          console.log("Email sent", info.response);
          res
            .status(201)
            .json({ status: 201, message: "Email sent successfully" });
        }
      });
    } else {
      const finalUser = new users({
        name,
        email,
        subject,
        message,
      });
      const storeData = await finalUser.save();
      const mailOptions = {
        from: `"${name}" <${email}>`,
        to: process.env.EMAIL,
        subject: subject,
        text: message,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("Error sending email", error);
          res.status(500).json({ status: 500, error: "Error sending email" });
        } else {
          console.log("Email sent", info.response);
          res
            .status(201)
            .json({ status: 201, message: "Email sent successfully" });
        }
      });
      res.status(201).json({ status: 201, storeData });
    }
  } catch (error) {
    res.status(401).json({ status: 401, error: "All input require" });
    console.log("catch error", error);
  }
});

module.exports = router;

// router.post("/register", async (req, res) => {
//   console.log(req.body);

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL,
//       pass: process.env.PASS,
//     },
//   });

//   const mailOptions = {
//     from: req.body.email,
//     to: process.env.EMAIL,
//     subject: req.body.subject,
//     text: req.body.message
//   };

//   transporter.sendMail(mailOptions,(error,info)=>{
//     if(error){
//       console.log(error);
//       res.send('error');
//     }else{
//       console.log('Email sent: '+ info.response);
//       res.send("success");
//     }
//   })
// });
