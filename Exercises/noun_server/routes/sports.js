let express = require("express");
let uuid = require("uuid");

let sportsRouter = express.Router();

let sportsArr = [
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
    }
];

sportsRouter.get("/", (req, res) => {
    console.log(req.query);
    let search = sportsArr.filter((item) => {
        for (let key in req.query) {
            if (req.query[key] != item[key]) {
                return false;
            }
        }
        return true;

    });
    res.status(200).send({"Message": "Success, here is your data", data: search});
});

sportsRouter.post("/", (req, res) => {
    let newSports = req.body;
    newSports.id = uuid();
    sportsArr.push(newSports);
    res.status(201).send({"Message": "Success, data was posted", data: sportsArr})
});

sportsRouter.get("/:id", (req, res) => {
    for (let i = 0; i < sportsArr.length; i++) {
        if (sportsArr[i].id === req.params.id) {
            return res.status(200).send({"Message": "Success, here is your data", data: sportsArr[i]})
        }
    }
    return res.status(404).send({"Message": "ERROR NOT FOUND"})
});

sportsRouter.delete("/:id", (req, res) => {
    for (let i = 0; i < sportsArr.length; i++) {
        if (sportsArr[i].id === req.params.id) {
            sportsArr.splice(i, 1);
            return res.status(200).send({"Message": "Success, item deleted"})
        }
    }
    return res.status(404).send({"Message": "ERROR NOT FOUND"})
});

sportsRouter.put("/:id", (req, res) => {
    for (let i = 0; i < sportsArr.length; i++) {
        if (sportsArr[i].id === req.params.id) {
            for (let key in req.body) {
                if (sportsArr[i].hasOwnProperty(key)) {
                    sportsArr[i][key] = req.body[key];
                }
            }
            return res.status(200).send({"Message": "Success, item updated"})
        }
    }
    return res.status(404).send({"Message": "ERROR NOT FOUND"})
});


module.exports= sportsRouter;