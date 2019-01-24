var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'soruby1298@gmail.com',
    pass: 'sorubynallur12'
  }
});

var mailOptions = {
  from: 'soruby1298@gmail.com',
  to: 'info@uki.life',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
