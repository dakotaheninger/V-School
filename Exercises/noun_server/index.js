let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");

let sportsRouter = require("./routes/sports.js");


let app = express();

const PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({extend: false}));

app.use(bodyParser.json());

app.use(cors());

app.use("/sports", sportsRouter);

app.listen(PORT, () => {
    console.log(`Starting server on port ${PORT}`)
});



