let mongoose = require("mongoose");
let rs = require("readline-sync");
let User = require("./models/user.js");

mongoose.connect("mongodb://localhost:27017/userexample");

let username = rs.question("Username: ");
let password = rs.question("Password: ", {hideEchoBack: true});

let createUser = new User({
    username,
    password
});

// createUser.save((err, data) =>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log("New User Was Saved", data);
//     }
// });

User.findOne({username}, (err, currentUser) => {
    if (err) {
        console.log(err);
    } else if(currentUser === null){
        console.log("User not found");
    } else {
        currentUser.auth(password, (isCorrect)=>{
            if(isCorrect) {
                console.log("Success, Username and Password are correct");
            } else {
                console.log("Stop trying to log in to someone elses account you hacker")
            }
        })
    }
        });