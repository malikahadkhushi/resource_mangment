const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.ethereal.email",
  port: 465,
  secure: true, 
  auth: {
    user: "malikahadofficial226@gmail.com",
    pass: "aeomiugtgyzwnhlu",
  },
  connectionTimeout: 5 * 60 * 1000, 

});

module.exports = transporter;
