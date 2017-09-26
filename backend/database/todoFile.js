/**
 * Created by jack on 8/1/17.
 */
var mongoose = require('mongoose');
// Connection URL
var db = 'mongodb://localhost:27017/userDetails';
mongoose.createConnection(db,function (error) {
    if (error){
        console.log(error)
    }else {
        console.log("Todo collection connected")
    }
});




var Schema = mongoose.Schema;
var listdetail = new Schema({
    text: String,
    color: String,
    isActive: String
}) 
var Todo_Schema = new Schema({
    list: [listdetail],
    todolist: String
});

// {
// 	"_id" : ObjectId("59c2f552351ece59c36102b6"),
// 	"list" : [
// 		[
// 			{
// 				"text" : "3333",
// 				"color" : "",
// 				"isActive" : ""
// 			}
// 		]
// 	]
// }

var Todo = mongoose.model('todos', Todo_Schema);

module.exports = Todo;
