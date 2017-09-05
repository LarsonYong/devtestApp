/**
 * Created by jack on 9/1/17.
 */
var mongoose = require('mongoose');
// Connection URL
var db = 'mongodb://localhost:27017/userDetails';
mongoose.createConnection(db,function (error) {
    if (error){
        console.log(error)
    }else {
        console.log("Build collection connected")
    }
});

var Schema = mongoose.Schema;
var build_Schema = new Schema({
    BuildVersion: String,
    BuildType: String,
    TestType: String,
    TestResult: String,
    Bug: String,
    Description: String,
    TestUnit: String,
    TestDate: String,
    TestDetails: String
});
// {
//     "_id": "59add8b8ae48a5d67710d46d",
//     "BuildVersion": "2-1-12.20170901233520",
//     "BuildType": "Partial",
//     "TestResult": "",
//     "Bug": "",
//     "TestUnits": "",
//     "Description": "TK1 build,analytics new feature",
//     "TestType": "Normal",
//     "TestDate": "",
//     "TestDeatils": ""
// },
// {
//     "_id": "59add7b9439993ceb6d0fcc5",
//     "BuildVersion": "2-1-12-20170831201458",
//     "TestType": "Regression",
//     "Description": "Odroid unit build",
//     "TestResult": "Pass",
//     "Bug": "",
//     "TestUnits": "12156,13304",
//     "BuildType": "full",
//     "TestDate": "0831~0901",
//     "TestDetails": "Reboot Test during long weekend, and regression test"
// }

var Build = mongoose.model('builds', build_Schema);

module.exports = Build;
