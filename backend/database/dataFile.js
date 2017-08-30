/**
 * Created by jack on 8/1/17.
 */
var mongoose = require('mongoose');
// Connection URL
var db = 'mongodb://localhost:27017/userDetails';
mongoose.connect(db,function (error) {
    if (error){
        console.log(error)
    }
});

var Schema = mongoose.Schema;
var User_Schema = new Schema({
    Username: String,
    Skill: String,
    Project: String,
    admin: Boolean,
    Password:String
});

var User = mongoose.model('users', User_Schema);

module.exports = User;
