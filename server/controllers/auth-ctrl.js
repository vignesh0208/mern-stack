const nodemailer = require('nodemailer');

const AuthUser = require("../models/auth-user");
const AdminAuthUser = require("../models/admin-auth-user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

RegisterUser = (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    AuthUser.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: "Email already exists" });
        } 
        else {

            let mailTransporter = nodemailer.createTransport({ 
                service: 'Gmail', 
                auth: { 
                    user: config.emailId, 
                    pass: config.pwd
                } 
            }); 
              
            let mailDetails = { 
                from: config.emailId, 
                to: req.body.email, 
                subject: 'Total jobs registration successfully', 
                html: `
                    <p>Hi ` + req.body.name + `,</p>
                    <p>Thanks for registration <b>` + req.body.name + `</b>.</p>
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

            const newUser = new AuthUser({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser
                    .save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err));
                });
            });
        }
    });
}

LoginUser = (req, res) => {  
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    AuthUser.findOne({ email }).then(user => {
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" });
        }

        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                const payload = {
                    id: user.id,
                    name: user.name
                };
                jwt.sign(
                    payload,
                    config.secretOrKey,
                    (err) => {
                        res.json({
                            success: true,
                            data: user
                        });
                    }
                );
            } else {
                return res
                .status(400)
                .json({ passwordincorrect: "Password incorrect" });
            }
        });
        
    });
}


AdminRegisterUser = (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    AdminAuthUser.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: "Email already exists" });
        } 
        else {
            const newUser = new AdminAuthUser({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser
                    .save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err));
                });
            });
        }
    });
}

AdminLoginUser = (req, res) => {  
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    AdminAuthUser.findOne({ email }).then(user => {
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" });
        }

        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                const payload = {
                    id: user.id,
                    name: user.name
                };
                jwt.sign(
                    payload,
                    config.secretOrKey,
                    (err, token) => {
                        res.json({
                            success: true,
                            token: token
                        });
                    }
                );
            } else {
                return res
                .status(400)
                .json({ passwordincorrect: "Password incorrect" });
            }
        });
    });
}

UserDetail = (req, res) => {
    AuthUser.find({ }).then(userDetail => {
        res.json({
            data: userDetail,
        });
    })
}

UserRole = (req, res) => {
    if(req.body.active) {
        AuthUser.updateOne({ _id: req.body._id }, { $set: {
            "active": false
        }}).exec((err) => {
            if(err) return err;
            let mailTransporter = nodemailer.createTransport({ 
                service: 'Gmail', 
                auth: { 
                    user: config.emailId, 
                    pass: config.pwd
                } 
            }); 
              
            let mailDetails = { 
                from: config.emailId, 
                to: req.body.email, 
                subject: 'Total jobs - Your account deactive', 
                html: `
                    <p>Hi ` + req.body.name + `,</p>
                    <p>Your account temporarily deactive <b>` + req.body.name + `</b>. It will active soon.</p>
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
            return res.json({ success: 'Deactive' })
        })
    }
    else {
        AuthUser.updateOne({ _id: req.body._id }, { $set: {
            "active": true
        }}).exec((err) => {
            if(err) return err;
            let mailTransporter = nodemailer.createTransport({ 
                service: 'Gmail', 
                auth: { 
                    user: config.emailId, 
                    pass: config.pwd
                } 
            }); 
              
            let mailDetails = { 
                from: config.emailId, 
                to: req.body.email, 
                subject: 'Total jobs - Your account active', 
                html: `
                    <p>Hi ` + req.body.name + `,</p>
                    <p>Your account active sucessfully <b>` + req.body.name + `</b>.</p>
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
            return res.json({ success: 'Active' })
        })
    }
}

module.exports = {RegisterUser, LoginUser, AdminRegisterUser, AdminLoginUser, UserDetail, UserRole}