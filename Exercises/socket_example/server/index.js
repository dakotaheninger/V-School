let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");

let socketIO = require("socket.io");


let chatRouter = require("./routes/chat");



const PORT = process.env.PORT || 9000;


let app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.use(cors());

app.use("/chat", chatRouter);

let server = app.listen(PORT, ()=>{
    console.log(`Starting server on port ${PORT}`)
});


let io = socket.io(server);

io.on("connection", (socket) =>{
    console.log(`Client has connected with id of ${socket.id}`)
});