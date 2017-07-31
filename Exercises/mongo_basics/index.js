let mongoDB = require("mongodb");
let MongoClient = mongoDB.MongoClient;
let url = "mongodb://localhost:27017/catbabies";

MongoClient.connect(url, (err, db)=>{
    if(err){
        console.log("Error in running mongodb", err);
    } else {
        console.log("Success you have connected to the database");
        let catbabies = db.collection("catbabies");

        catbabies.updateOne({_id: new mongoDB.ObjectID("597fb217c917be409c7f23ce")}, {$set: {color: "Orange"}}, (err, result) =>{
            if(err){
                console.log(err);
            } else {
                console.log(`Success item was updated`);
            }
        });


        catbabies.find({}).toArray((err, data) =>{
            if(err){
                console.log(err)
            }
            console.log(data);
            db.close();
        });

        // catbabies.insertOne({
        //     name: "Jacob",
        //     color: "brown",
        //     age: 82
        // }, (err, result) =>{
        //     if(err){
        //         console.log(err)
        //     } else {
        //         console.log(result);
        //     }
        // })

        // catbabies.deleteOne({_id: new mongoDB.ObjectID("597fb309a6ae0b41e1bc1c81")}, (err, result) =>{
        //     if(err){
        //         console.log(err)
        //     } else {
        //         console.log(result);
        //     }
        // });


    }
});

