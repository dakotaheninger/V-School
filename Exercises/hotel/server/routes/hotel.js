let express = require("express");
let hotelRouter = express.Router();
let expressJwt = require("express-jwt");
let settings = require("../config/settings.js");
let authorization = expressJwt({secret: settings.secret});

hotelRouter.get("/events", (req, res) =>{
    res.status(200).send({"Message": "Here are the events at the hotel", data: []})
});

hotelRouter.get("/guests", authorization, (req, res) =>{
    res.status(200).send({"Message": "Here are the guests at the hotel", data: []});
});


module.exports = hotelRouter;