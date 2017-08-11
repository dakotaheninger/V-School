let express = require("express");
let authRouter = express.Router();
let jwt = require("jsonwebtoken");
let settings = require("../config/settings.js");

let User = require("../models/user.js");

let passport = require("passport");
let Strategy = require("passport-local");

passport.use(new Strategy((username, password, done) =>{
    User.findOne({username}, (err, currentUser) =>{
        if(err){
            done(err, false);
        } else if(currentUser === null) {
            done(null, false)
        } else {
            currentUser.auth(password, (isCorrect) =>{
                if(isCorrect) {
                    done(null, true);
                } else {
                    done(null, false)
                }
            });
        }
    })
}));

authRouter.use(passport.initialize());

authRouter.post("/login", passport.authenticate("local", {session: false}), (req, res) =>{
    User.findOne({username: req.body.username}, (err, data) =>{
        if(err) {
            res.status(500).send({"Message": "Error"}, err);
        } else if(data === null){
            res.status(404).send({"Message": "Error Not Found"});
        } else {
            let payload = {username: data.username};
            res.status(201).send({
                "Message": "Success, Auth token issued",
                "Token": jwt.sign(payload, settings.secret, {expiresIn: 30 * 60})
            })
        }
    })
});

authRouter.post("/signup", (req, res) =>{
    let makeUser = new User(req.body);
    makeUser.save((err, data) =>{
        if(err){
            res.status(500).send({"Message": "Error in Server"})
        } else {
            res.status(200).send({"Message": "User was Created"})
        }
    })
});

module.exports = authRouter;