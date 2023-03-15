var nodemailer = require("nodemailer");
var env = require("../../../env");
const createTestSendEmail = async () => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: env.email.user,
      pass: env.email.pass,
    },
  });
  var mailOptions = {
    from: "luonglkvn1000@gmail.com",
    to: "luonglkvn100@gmail.com",
    subject: "Demo send mail",
    text: "Hello sy!",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
module.exports = createTestSendEmail();
