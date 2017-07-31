const EXPRESS = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");

let teamsRouter = require("./teams/teams.js");

const APP = EXPRESS();

const PORT = process.env.PORT || 8080;

APP.use(bodyParser.urlencoded({extended: false}));

APP.use(bodyParser.json());

APP.use(cors());

APP.use("/teams", teamsRouter);

APP.listen(PORT, ()=>{
    console.log(`Starting server on port ${PORT}`)
});



