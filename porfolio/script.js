const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/sendEmail', (req, res) => {
  const { to, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'yahyahaider043@gmail.com',
      pass: 'SS_Yahya123'
    }
  });

  const mailOptions = {
    from: 'your_email@gmail.com',
    to: to,
    subject: subject,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully');
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

document.getElementById('send message').addEventListener('click', () => {
    const to = 'yahyahaider043@gmail.com';
    const subject = '';
    const message = '';
  
    fetch('/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ to, subject, message })
    })
      .then(response => response.text())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  });
  