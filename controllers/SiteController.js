const AccountSchema = require("../models/account");
const jwt = require('jsonwebtoken');

class SiteController{

    // [GET] /
    home(req, res, next){
        console.log(req.session.user);
        res.render("home");
    }

    // [GET] /register
    register(req, res, next){
        res.render("register");
    }

    // [POST] /register
    registerSubmit(req, res, next){
        AccountSchema.find({
            $or : [
                {email: req.body.email},
                {username: req.body.username}
            ]
        })
            .then(data => {
                if(data.length > 0){
                    res.json("Email or Username exists");
                }
                else{
                    AccountSchema.create
                    ({
                        email: req.body.email,
                        username: req.body.username,
                        password: req.body.password
                    })
                    .then(() => res.redirect("back"))
                }
            })
            .catch(next);

    }

    // [GET] /login
    login(req, res, next){
        res.render("login");
    }

    // [POST] /login
    loginSubmit(req, res, next){
        AccountSchema.findOne({
            username: req.body.username,
            password: req.body.password
        })
        .then(user => {
            // console.log(user);
            if(user){
                req.session.user = user._id;
                var token = jwt.sign({_id: user._id}, "quyetdaica")

                res.json({
                    message: 'success',
                    token: token
                });
            }
            else{
                res.status(400).json("Account not exist");
            }
        })
        .catch(next);
    }

    // [POST] /edit
    edit(req, res, next){
        res.json('edit success!');
    }

}

module.exports = new SiteController;