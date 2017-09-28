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
        console.log("event collection connected")
    }
});




var Schema = mongoose.Schema;
var eventDetails = new Schema({
    title: String,
    start: String,
    end: String,
    color: String
}) ;
var Event_Schema = new Schema({
    events: [eventDetails]
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

var CalEvent = mongoose.model('events', Event_Schema);

module.exports = CalEvent;
