const EXPRESS = require("express");

const APP = EXPRESS();

const PORT = process.env.PORT || 8080;

APP.get("/", (req, res)=>{
    res.status(200).send({"Message": "Success! You make your first Express Server"})
});

APP.listen(PORT, ()=>{
    console.log(`Starting server on port ${PORT}`);
});