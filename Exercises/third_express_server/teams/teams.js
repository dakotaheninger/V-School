const EXPRESS = require("express");

let uuid = require("uuid");

let teamsRouter = EXPRESS.Router();

let teamsArr = [
    {
        city: "Dallas",
        state: "Texas",
        name: "Cowboys",
        sport: "Football",
        id: uuid()
    },
    {
        city: "Salt Lake City",
        state: "Utah",
        name: "Jazz",
        sport: "Basketball",
        id: uuid()
    },
    {
        city: "Boston",
        state: "Massachusetts",
        name: "Red Sox",
        sport: "Baseball",
        id: uuid()
    },
    {
        city: "Salt Lake City",
        state: "Utah",
        name: "Bees",
        sport: "Baseball",
        id: uuid()
    }
];


teamsRouter.get("/", (req, res)=>{
    let search = teamsArr.filter((item) =>{
        for(let key in req.query){
            if(req.query[key] != item[key]){
                return false;
            }
        }
        return true;
    });
    res.status(200).send({"Message": "Success, here is your data", data: search});
});

teamsRouter.post("/", (req, res) =>{
    let template = {
        city: "",
        state: "",
        name: "",
        sport: "",

    };
    for(let key in req.body){
        if(!template.hasOwnProperty(key)){
            continue;
        } else {
            template[key] = req.body[key];
        }
    }
    template._id = uuid();
    teamsArr.push(template);
    res.status(201).send({"Message": "Success, data was posted", data: teamsArr});
});

teamsRouter.get("/:id", (req, res) =>{
    for(let i = 0; i < teamsArr.length; i++){
        if(teamsArr[i].id === req.params.id){
            return res.status(200).send({"Message": "Success, here is your data", data: teamsArr[i]})
        }
    }
    return res.status(404).send({"Message": "ERROR NOT FOUND"})
});

teamsRouter.delete("/:id", (req, res) =>{
    for(let i = 0; i < teamsArr.length; i++){
        if(teamsArr[i].id === req.params.id){
            teamsArr.splic(i, 1);
            return res.status(200).send({"Message": "Success, data was deleted", data: teamsArr})
        }
    }
    return res.status(404).send({"Message": "ERROR NOT FOUND"})
});

teamsRouter.put("/:id", (req, res) =>{
    for(let i = 0; i < teamsArr.length; i++){
        if(teamsArr[i].id === req.params.id){
            for(let key in req.body){
                if(teamsArr[i].hasOwnProperty(key)){
                    teamsArr[i][key] = req.body[key]
                }
            }
            return res.status(200).send({"Message": "Success, item updated"})
        }
    }
    return res.status(404).send({"Message": "ERROR NOT FOUND"})
});

module.exports = teamsRouter;

