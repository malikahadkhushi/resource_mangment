const transporter = require("../utils/nodemailerConfig");
module.exports.notify_created_user = (email) => {
  let mailOptions = {
    from: "malikahadofficial226@gmail.com",
    to: email,
    subject: "Congratulations",
    text: "Congratulations Your Account Is created SUccessfully",
    html: `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          margin: 0;
          padding: 0;
        }
        .email-container {
          background-color: #ffffff;
          margin: 20px auto;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          max-width: 600px;
        }
        .header {
          text-align: center;
          padding-bottom: 20px;
          border-bottom: 1px solid #e0e0e0;
        }
        .header h1 {
          color: #333333;
        }
        .content {
          padding: 20px 0;
        }
        .content p {
          color: #666666;
          line-height: 1.6;
        }
        .footer {
          text-align: center;
          padding-top: 20px;
          border-top: 1px solid #e0e0e0;
          color: #999999;
          font-size: 12px;
        }
        .button {
          display: inline-block;
          padding: 10px 20px;
          margin-top: 20px;
          color: #ffffff;
          background-color: #007bff;
          text-decoration: none;
          border-radius: 5px;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <h1>Congratulations!</h1>
        </div>
        <div class="content">
          <p>Hi there,</p>
          <p>We are excited to welcome you to our community. Your account has been created successfully, and we are thrilled to have you with us.</p>
          <p>Thank you for joining us, and we look forward to providing you with the best experience possible.</p>
          <p>Best regards,</p>
          <p>The Team</p>
          <a href="#" class="button">Get Started</a>
        </div>
        <div class="footer">
          <p>If you have any questions, feel free to <a href="mailto:support@example.com">contact our support team</a>.</p>
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>`,
  };
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });
};

module.exports.send_password_reset_email = (email, resetCode) => {
  const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    .email-container {
      background-color: #ffffff;
      margin: 20px auto;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      max-width: 600px;
    }
    .header {
      text-align: center;
      padding-bottom: 20px;
      border-bottom: 1px solid #e0e0e0;
    }
    .header h1 {
      color: #333333;
    }
    .content {
      padding: 20px 0;
    }
    .content p {
      color: #666666;
      line-height: 1.6;
    }
    .code {
      display: inline-block;
      padding: 10px 20px;
      margin: 20px 0;
      font-size: 24px;
      color: #ffffff;
      background-color: #007bff;
      text-decoration: none;
      border-radius: 5px;
    }
    .footer {
      text-align: center;
      padding-top: 20px;
      border-top: 1px solid #e0e0e0;
      color: #999999;
      font-size: 12px;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>Password Reset Request</h1>
    </div>
    <div class="content">
      <p>Hi there,</p>
      <p>We received a request to reset your password. Please use the following code to reset your password:</p>
      <div class="code">${resetCode}</div>
      <p>If you did not request a password reset, please ignore this email or contact support if you have any questions.</p>
      <p>Best regards,</p>
      <p>The Support Team</p>
    </div>
    <div class="footer">
      <p>If you have any questions, feel free to <a href="mailto:support@example.com">contact our support team</a>.</p>
      <p>&copy; 2024 Your Company. All rights reserved.</p>
    </div>
  </div>
</body>
</html>`;

  let mailOptions = {
    from: "malikahadofficial226@gmail.com",
    to: email,
    subject: "Password Reset Request",
    html: htmlTemplate,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully with reset code " + resetCode);
    }
  });
};
