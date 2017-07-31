const EXPRESS = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let uuid = require("uuid");

const APP = EXPRESS();

const PORT = process.env.PORT || 8080;

let bountyArr = [
    {
        id: uuid(),
        name: "Edward Cullen",
        location: "Tree House",
        price: 60,
        deadOrAlive: "Dead"
    },
    {
        id: uuid(),
       name: "Bella Cullen",
       location: "Tree House",
       price: 1000,
        deadOrAlive: "Alive"
    },
    {
        id: uuid(),
        name: "Micheal Jackson",
        location: "Wonder Land",
        price: 2000,
        deadOrAlive: "Dead"
    }
];
APP.use(bodyParser.urlencoded({extended: false}));

APP.use(bodyParser.json());

APP.use(cors());

APP.get("/", (req, res)=>{
    res.status(200).send({"Message": "Success, here is your data", data: bountyArr});
});

APP.post("/", (req, res)=>{
    let newBounty = req.body;
    newBounty.id = uuid();
    bountyArr.push(newBounty);
    res.status(201).send({"Message": "Success, data was posted", data: bountyArr});
});

APP.get("/:id", (req, res) =>{
    for(let i = 0; i < bountyArr.length; i++){
        if(bountyArr[i].id === req.params.id){
            return res.status(200).send(bountyArr[i]);
        }
    }
});

APP.delete("/:id", (req, res) =>{
    for(let i =0; i < bountyArr.length; i++){
        if(bountyArr[i].id === req.params.id){
            bountyArr.splice(i, 1);
            return res.status(200).send({message: "Delete Successful"});
        }
    }
    return res.status(404).send({message: "Error Not Found"})

});

APP.put("/:id", (req, res) =>{
    for(let i = 0; i < bountyArr.length; i++){
        if(bountyArr[i].id === req.params.id){
            for(let key in req.body){
                if(bountyArr[i].hasOwnProperty(key)){
                    bountyArr[i][key] = req.body[key];
                }
            }
            return res.status(200).send({message: "Update Successful"})

        }
    }
    return res.status(404).send({message: "Error Not Found"})
});

APP.listen(PORT, ()=>{
    console.log(`Starting server on port ${PORT}`);
});
