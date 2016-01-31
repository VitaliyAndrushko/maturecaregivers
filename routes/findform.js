var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET findform page. */
router.get('/', function(req, res, next) {
  res.render('findform', { title: 'Find caregivers' });
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
        text: 'You have a new submission with the following details...Who is the care for? ' + req.body.careFor + ' Age of care recipient? ' + req.body.age + ' Enter location where care is required? ' + req.body.sity + ' ' + req.body.state + ' Current living situation? ' + req.body.living + ' Estimated level of care? ' + req.body.level + ' General Services Needed: ' + req.body.services + ' How do you plan on financing? ' + req.body.optRadioFinancing + ' First Name: ' + req.body.firstName + ' Last Name: ' + req.body.lastName + ' Email: ' + req.body.email + ' Phone: ' + req.body.phone + ' Have you hired a caregiver in the past? ' + req.body.optLastQuestion,
        html: '<p>You have a new submission with the following details...</p><ul><li>Who is the care for? <strong>' + req.body.careFor+'</strong></li><li>Age of care recipient? <strong>' + req.body.age +'</strong></li><li>Enter location where care is required? <strong>' + req.body.city + ' ' + req.body.state + '</strong></li><li>Current living situation? <strong>' + req.body.living +'</strong></li><li>Estimated level of care? <strong>' + req.body.level +'</strong></li><li>General Services Needed: <strong>' + req.body.services +'</strong></li><li>How do you plan on financing? <strong>' + req.body.optRadioFinancing +'</strong></li><li>First Name: <strong>' + req.body.firstName +'</strong></li><li>Last Name: <strong>' + req.body.lastName +'</strong></li><li>Email: <strong>' + req.body.email +'</strong></li><li>Phone: <strong>' + req.body.phone +'</strong></li><li>Have you hired a caregiver in the past? <strong>' + req.body.optLastQuestion + '</strong></li></ul>'
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if(error) {
            console.log(error);
            res.redirect('/');
        } else {
            console.log('Message Sent: ' + info.response);
            res.redirect('/');
        }
    });

});

module.exports = router;
