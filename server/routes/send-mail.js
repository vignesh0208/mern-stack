const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');

router.post("/", (req, res) => {
    console.log(req.body);
    res.json({
        success: true,
        data: req.body
    });
    // let mailTransporter = nodemailer.createTransport({ 
    //     service: 'Gmail', 
    //     auth: { 
    //         user: 'v19ne5h1994@gmail.com', 
    //         pass: 'vignesh0208'
    //     } 
    // }); 
        
    // let mailDetails = { 
    //     from: 'v19ne5h1994@gmail.com', 
    //     to: req.body.email, 
    //     subject: 'Total jobs registration successfully', 
    //     html: `
    //         <p>Hi ` + req.body.name + `,</p>
    //         <p>Thanks for registration <b>` + req.body.name + `</b>.</p>
    //         <p>Thanks,</p>
    //         <p>Totaljobs team</p>
    //         `
    // }; 
        
    // mailTransporter.sendMail(mailDetails, function(err, data) { 
    //     if(err) { 
    //         console.log('Error Occurs', err); 
    //     } else { 
    //         console.log('Email sent successfully'); 
    //     } 
    // })
});

module.exports = router;