const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');
const config = require('../config/config');

router.post("/", (req, res) => {
    console.log(req.body);
    res.json({
        success: true,
        data: req.body
    });
    let mailTransporter = nodemailer.createTransport({ 
        service: 'Gmail', 
        auth: { 
            user: config.emailId, 
            pass: config.pwd
        } 
    }); 
        
    let mailDetails = { 
        from: config.emailId, 
        to: req.body.mailID, 
        subject: 'Total jobs payment successfully' , 
        html: `
            <p>Hi ` + req.body.transactionID + `,</p>
            <p>Your payment done. Payment id is ` + req.body.paymentID + ` and amount you payed ` + req.body.totalAmount + `</p>
            <p>Thanks,</p>
            <p>Totaljobs team</p>
            `
    }; 
        
    mailTransporter.sendMail(mailDetails, function(err, data) { 
        if(err) { 
            console.log('Error Occurs', err); 
        } else { 
            console.log('Email sent successfully'); 
        } 
    })
});

module.exports = router;