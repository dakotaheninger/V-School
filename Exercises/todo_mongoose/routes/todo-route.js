let express = require("express");
let todoRouter = express.Router();

let Todo = require("../models/todo.js");

todoRouter.use((req, res, next) =>{
    for(let key in req.query){
        if(typeof req.query[key] === `string`){
            req.query[key] = req.query[key].toLowerCase();
        }
    }
    next();
});

todoRouter.get("/", (req, res) => {
    Todo.find(req.query, (err, data) => {
        if (err) {
            res.status(500).send({"Message": "Error Within Server", err});
        } else {
            res.status(200).send({"Message": "Success, here is your data", data});
        }
    })
});

todoRouter.post("/", (req, res) => {
    let newTodo = Todo(req.body);
    newTodo.save((err, data) => {
        if (err) {
            res.status(500).send({"Message": "Error Within Server", err});
        } else {
            res.status(201).send({"Message": "Success, Item Posted", data});
        }
    })

});

todoRouter.get("/:id", (req, res) =>{
    Todo.findOne({_id: req.params.id}, (err, data) =>{
        if(err){
            res.status(500).send({"Message": "Error within server", data});
        } else if(data === null){
            res.status(404).send({"Message": "Error Not Found"})
        }
        else {
            res.status(200).send({"Message": "Success, here is your data", data});
        }
    })
});

todoRouter.put("/:id", (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body, (err, data) =>{
        if(err){
            res.status(500).send({"Message": "Error within server", data});
        } else if(data === null){
            res.status(404).send({"Message": "Error Not Found"})
        } else {
            res.status(200).send({"Message": "Success, Item Updated", data});
        }
    })
});

todoRouter.delete("/:id", (req, res) => {
    Todo.findByIdAndRemove(req.params.id, (err, data) =>{
        if(err){
            res.status(500).send({"Message": "Error in server", err});
        } else {
            res.status(200).send({"Message": "Success, Item Deleted", data});
        }
    })

});

module.exports = todoRouter;