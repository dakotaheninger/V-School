let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

let todoRouter = require("./routes/todo-route.js");

mongoose.connect("mongodb://localhost:27017/todos");

let app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

app.use("/todo", todoRouter);

app.listen(PORT, ()=>{
    console.log(`Server has started on port ${PORT}`);
});
