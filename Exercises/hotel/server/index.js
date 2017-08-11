let express = require("express");
let cors = require("cors");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let settings = require("./config/settings");

let authRouter = require("./routes/auth.js");
let hotelRouter = require("./routes/hotel.js");

let PORT = process.env.PORT || settings.port;

mongoose.connect(`mongodb://localhost:27017/${settings.db}`);


let app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use("/auth", authRouter);
app.use("/hotel", hotelRouter);

app.listen(PORT, ()=>{
    console.log(`Server is starting on port ${PORT}`)
});

