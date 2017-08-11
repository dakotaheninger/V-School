let express = require("express");

let chatRouter = express.Router();

let Chat = require("../models/chat-model");

chatRouter.get("/", (req, res) =>{
    Chat.find({}, (err, data) =>{
        if(err){
            res.status(500).send({"Message": "Error in server", err})
        } else {
            res.status(200).send({"Message": "Success, here is your data", data})
        }

    })
});

module.exports = chatRouter;