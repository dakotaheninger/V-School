let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    dateDue: {
        type: Date,
        default: Date.now
    },
    price: Number
});

module.exports = mongoose.model("todoList", todoSchema);


// let Todo = mongoose.model("todoList", todoSchema);
//
// let newTodo = new Todo({
//     title: "Go Buy Grapes",
//     description: "Go To Harmons",
//     price: 4
// });
//
// newTodo.save((err, data) =>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log("Item was saved to database", data);
//     }
// });
//
// Todo.find({}, (err, data) =>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log("Success, here is your data", data);
//     }
// });
//
// Todo.findOne({_id: "5980ba1f81553a46aaaf28c2"}, (err, data) =>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log("Found Data", data);
//     }
// });
//
// Todo.findOneAndRemove({_id: "5980ba1f81553a46aaaf28c2"}, (err, data) =>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log("Deleted Succesfully", data);
//     }
// });
//
// let newData = {
//     title: "Update titel",
//     description: "This is updated"
// };
//
// Todo.findByIdAndUpdate({_id: "5980ba1f81553a46aaaf28c2"}, newData, {new: true}, (err, data)=>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log("Update Data", data);
//     }
// });