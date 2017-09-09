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
        console.log("Unit collection connected")
    }
});

var Schema = mongoose.Schema;
var Unit_Schema = new Schema({
    UnitId: String,
    Platform: String,
    CameraType: String,
    BuildVersion: String,
    SensorVersion: String,
    UpdateTime: String
});

// [
//     {
//         "_id": "59adafd67c6218c5e02d8752",
//         "UnitId": "12156",
//         "Platform": "Odroid",
//         "CameraType": "ShanyIR",
//         "BuildVersion": "2-1-12-20170831201458",
//         "SensorVersion": "10019",
//         "UpdateTime": "0831",
//         "BuildHistory": [
//             {
//                 "2-1-12-20170827201458": "08/27/2017"
//             },
//             {
//                 "2-1-12-20170831201458": "08/31/2017"
//             }
//         ]
//     }
// ]

var Unit = mongoose.model('units', Unit_Schema);

module.exports = Unit;
