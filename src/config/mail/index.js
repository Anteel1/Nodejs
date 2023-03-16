var nodemailer = require("nodemailer");
var env = require("../../../env");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: env.email.user,
    pass: env.email.pass,
  },
});

module.exports = transporter;
