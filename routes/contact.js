var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send', function(req, res, next) {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'vitaliyandrushkotest@gmail.com',
            pass: 'vitalikatestgmail'
        }
    });

    var mailOptions = {
        from: 'Vitaliy Andrushko <andrushkovitaliy@outlook.com>',
        to: 'vitalika1988@gmail.com',
        subject: 'Website Submission',
        text: 'You have a new submission with the following details...Name: ' + req.body.name + ' Email: ' + req.body.email + ' Subject: ' + req.body.subject + ' Message: ' + req.body.message,
        html: '<p>You have a new submission with the following details...</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Subject: '+req.body.subject+'</li><li>Message: '+req.body.message+'</li></ul>'
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if(error) {
            console.log(error);
            res.redirect('/');
        } else {
            console.log('Message Sent: ' + info.response);
            // res.redirect('/');
            res.render('contact', { title: 'Contact', success: true });

        }
    });

});

module.exports = router;
