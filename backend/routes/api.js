/**
 * Created by jack on 8/1/17.
 */
var express=require('express');
var http =require('http');
var router=express.Router();
var ObjectID = require('mongodb').ObjectID;
var mongoose = require('mongoose');
// Connection URL
var db = 'mongodb://localhost:27017/userDetails';
var User = require('../database/dataFile');
var unit_db = 'mongodb://localhost:27017/unitDetails';
var Unit = require('../database/unitFile');
var Build = require('../database/buildFile');
var Todo = require('../database/todoFile');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');





// Get users list
router.get('/getUserlist',function(req,res,next){
    User.find({},function (err,docs) {
        res.send(docs);
        console.log("Get user list");
    })
});


// Get builds list
router.get('/getBuildlist',function (req,res,next) {
    Build.find({},function (err,docs) {
        res.send(docs);
        console.log("Get build list");
    })
})

// Get units list
router.get('/getUnitlist',function (req,res,next) {
    Unit.find({},function (err,docs) {
        res.send(docs);
        console.log("Get unit list")
    })
})


// Get Unit info
router.get('/getUnit/:unitId',function (req,res,next) {
    const unitId = req.params.unitId;
    const pa = {"UnitId":unitId};
    Unit.find(pa,function (err,data) {
        if (data.length > 0){
            res.json(data);
            console.log("Unit found");
            console.log(data);
        }else{
            res.json({"status":"404","message":"Unit not found"});
            console.log("Unit not found")
        }
    })
})


// Get Todo list
router.get('/getTodolist', function (req,res,next) {
    Todo.find({}, function (err, docs) {
        res.send(docs);
        console.log('Get Todo list');
        console.log(docs);
    })
})


// Update unit build history
router.post('/UpdateHistory/', function (req,res,next) {
    const UnitId = req.body.UnitId;
    const Id = req.body.Id;
    const build = req.body.Build;
    const time = req.body.Time;
    const query = {'UnitId': UnitId}
    const update = {$push:{'BuildHistory':{"Build":build,"Time":time}}}
    Unit.update(query, update,function(err) {
        if (err) {
            console.log(err);
        }else {
            console.log("Updated")
            res.json({"message":'Updated'})
        }
    })
})


// Search Build
router.get('/getBuild/:buildId',function (req,res,next) {
    const buildId = req.params.buildId;
    Build.find({"BuildVersion":buildId},function (err,data) {
        console.log(data);
        console.log(buildId);
        if (data.length > 0){
            res.json(data);
            console.log("Build found");
            console.log(data)
        }else{
            res.json({"status":"404","message":'Build is not found'});
            console.log("Build not found")
        }
    })
});


// Get Build info
router.get('/getBuild/:buildId',function (req,res,next) {
    const buildId = String(req.params.buildId);
    const pa = {"BuildVersion":buildId};
    Build.find(pa,function (err,data) {
        if (data.length > 0){
            res.json(data);
            console.log("Build found");
            console.log(data);
        }else{
            res.json({"status":"404","message":"Build not found"});
            console.log("Build not found");
        }
    })
})


// Update Build info
router.post('/updateBuild',function (req,res,next) {
    const buildversion = req.body.BuildVersion;
    Build.findById(req.body.id, function (err, data) {
        console.log(req.body.id);
        console.log(data);
        if (err) {
            res.json({"message":err})
        }else {
            
            // Update each attribute with any possible attribute that may have been submitted in the body of the request
            // If that attribute isn't in the request body, default back to whatever it was before.
            data.Bug = req.body.Bug || data.Bug;
            data.BuildType = req.body.BuildType ||data.BuildType;
            data.Description = req.body.Description ||data.Description;
            data.TestDate = req.body.TestDate ||data.TestDate;
            data.TestDetails = req.body.TestDetails ||data.TestDetails;
            data.TestResult = req.body.TestResult ||data.TestResult;
            data.TestType = req.body.TestType ||data.TestType;
            data.TestUnits = req.body.TestUnits ||data.TestUnits;
            data.save(function(err,data) {
                if (err) {
                    res.json({"message":err})
                }
                res.json({message: "Build infomation updated"})
                console.log("build updated")
            })
        }
    })

    // Build.findOneAndUpdate({BuildVersion: req.body.BuildVersion}),{$set:{
    //     'Bug': req.body.Bug,
    //     'BuildType': req.body.
    // }}
})

// Add unit
router.post('/unit/add',function (req,res,next) {
    const unitId = req.body.UnitId;
    var unit = new Unit({
        UnitId: unitId,
    });
    mongoose.createConnection(unit_db,function(error) {
        if (error){
            console.log(error)
        }else{
            console.log("Unit DB Connected!")
        }
     });
    console.log(Unit);
    console.log(unitId)
    Unit.count({"UnitId":unitId},function (err,data) {
         console.log(data);
         if(data > 0){
             res.json({"status":"406","message":"Unit already exist"});
             console.log("Unit already exist");
         }else{
             unit.save(function (err) {
                 if(err){
                     res.send(err);
                     console.log(err)
                 }else{
                     res.json({"status":"202","message":"Success!"});
                     console.log("Unit added")
                 }
             });
         }
     });
});

// Add Build
router.post('/build/add',function (req,res,next) {
    const buildId = req.body.BuildId;
    
    var build = new Build({
        BuildVersion: buildId,
    });
    console.log("buildId")
    console.log("111",buildId)
    Build.count({"BuildVersion":buildId},function (err,data) {
         console.log(data);
         if(data > 0){
             res.json({"status":"406","message":"Build already exist"});
             console.log("Build already exist");
         }else{
             build.save(function (err) {
                 if(err){
                     res.send(err);
                     console.log(err)
                 }else{
                     res.json({"status":"202","message":"Success!"});
                     console.log("Unit added")
                 }
             });
         }
     });
});


// User verification
router.post('/users/authenticate',function (req,res,next) {
    var requestbody = req.body;
    var username = requestbody.username;
    var password = requestbody.password;
    User.find({"Username":username}, function (err,data) {
        if( password === data[0].Password){
            res.send(data);
            console.log("User verified")
        }else{
            res.status(401).json({message:'Username or Password is not correct'});
            console.log("Username or Password is not correct")
        }
    })
});


// Search user
router.get('/getUser/:name',function (req,res,next) {
    const username = req.params.name;
    User.find({"Username":username},function (err,data) {
        console.log(data);
        console.log(username);
        if (data.length > 0){
            res.json(data);
            console.log("User found");
            console.log(data)
        }else{
            res.json({"status":"404","message":'User is not found'});
            console.log("User not found")
        }
    })
});


// Add user
router.post('/user/add',function (req,res,next) {
   const username = req.body.username;
   const password = req.body.password;
   var user = new User({
       Username: username,
       Password: password
   });
   // mongoose.createConnection(db,function(error) {
   //     if (error){
   //         console.log(error)
   //     }else{
   //         console.log("Connected!")
   //     }
   // });
    User.count({"Username":username},function (err,data) {
        // console.log(data[0].Username);
        if(data > 0){
            res.json({"status":"406","message":"User name already exist"});
            console.log("User already exist");
        }else{
            user.save(function (err) {
                if(err){
                    res.send(err);
                    console.log(err)
                }else{
                    res.json({"status":"202","message":"Success!"});
                    console.log("User added")
                }
            });
        }
    });
});


// Update user
router.post('/user/update',function (req,res,next) {

});


// Delete user
router.post('/user/delete',function (req,res) {
    const username = req.body.username;
    // mongoose.createConnection(db,function (error) {
    //     if (error){
    //         console.log(error)
    //     }else{
    //         console.log("Connected!")
    //     }
    // });
    if (User.find({"Username":username})){
        User.find({"Username":username}).remove().exec();
        res.send("User removed");
        console.log("User removed")
    }else{
        res.send("User not Found");
        console.log("User not Found")
    }
});


// User register
router.post('/register',function (req,res,next) {
    if( !req.body.username || !req.body.username){
        return res.status(400).json({message: 'please enter register data'})
    }
    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.save(function (err) {
        if(err){
            return next(err);
        }
        return res.json({token:user.name})
    });

});


// v5 login api
router.post('/v5login60',function (req,res,next) {
    var username = req.body.username;
    var password = req.body.password;
    request.post(
        'http://devtest.v5systems.us:4480/api/login', {
            form:{
                username:username,
                password:password
            }
        },
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                var setcookie = response.headers["set-cookie"];
                var body1= body;

                if ( setcookie ) {
                    setcookie.forEach(
                        function ( cookiestr ) {
                            console.log( "COOKIE: " + cookiestr );
                        }
                    );
                }
                res.json({"body":body1,"cookie":setcookie})
            }else{
                console.log('err')
            }
        }
    );
});

router.post('/v5login50',function (req,res,next) {
    var username = req.body.username;
    var password = req.body.password;
    request.post(
        'http://10.70.32.50:4480/api/login', {
            form:{
                username:username,
                password:password
            }
        },
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                var setcookie = response.headers["set-cookie"];
                var body1= body;

                if ( setcookie ) {
                    setcookie.forEach(
                        function ( cookiestr ) {
                            console.log( "COOKIE: " + cookiestr );
                        }
                    );
                }
                res.json({"body":body1,"cookie":setcookie})
            }else{
                console.log('err')
            }
        }
    );
});

router.post('/v5login40',function (req,res,next) {
    var username = req.body.username;
    var password = req.body.password;
    request.post(
        'http://10.70.32.40:4480/api/login', {
            form:{
                username:username,
                password:password
            }
        },
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                var setcookie = response.headers["set-cookie"];
                var body1= body;

                if ( setcookie ) {
                    setcookie.forEach(
                        function ( cookiestr ) {
                            console.log( "COOKIE: " + cookiestr );
                        }
                    );
                }
                res.json({"body":body1,"cookie":setcookie})
            }else{
                console.log('err')
            }
        }
    );
});


// Get all connected units
router.post('/v5allconnect60',function (req,res,next) {
    var cookie = req.body.cookie;
    var options = {
        url: 'http://devtest.v5systems.us:4480/api/units/getAllConnectedUnits',
        method:'GET',
        headers: {
            'Cookie': cookie
        }
    };
    console.log(cookie);
    request(options,function (err,response,body) {
        console.log("body **************");
        console.log(body);
        res.send(body);
    })
});

router.post('/v5allconnect50',function (req,res,next) {
    var cookie = req.body.cookie;
    var options = {
        url: 'http://10.70.32.50:4480/api/units/getAllConnectedUnits',
        method:'GET',
        headers: {
            'Cookie': cookie
        }
    };
    console.log(cookie);
    request(options,function (err,response,body) {
        console.log("body **************");
        console.log(body);
        res.send(body);
    })
});

router.post('/v5allconnect40',function (req,res,next) {
    var cookie = req.body.cookie;
    var options = {
        url: 'http://10.70.32.40:4480/api/units/getAllConnectedUnits',
        method:'GET',
        headers: {
            'Cookie': cookie
        }
    };
    console.log(cookie);
    request(options,function (err,response,body) {
        console.log("body **************");
        console.log(body);
        res.send(body);
    })
});


// Get unit version info
router.post('/v5/60/units/info/:unitId',function (req,res,next) {
    const unitId = req.params.unitId;
    var cookie =req.body.cookie;
    var options = {
        url: 'http://devtest.v5systems.us:4480/api/units/info/' + unitId,
        method: 'GET',
        headers:{
            'Cookie':cookie
        }
    };
    console.log(options.url);
    request(options,function (err,response,body) {
        console.log(body);
        res.send(body);
    })
});

router.post('/v5/50/units/info/:unitId',function (req,res,next) {
    const unitId = req.params.unitId;
    var cookie =req.body.cookie;
    var options = {
        url: 'http://10.70.32.50:4480/api/units/info/' + unitId,
        method: 'GET',
        headers:{
            'Cookie':cookie
        }
    };
    console.log(options.url);
    request(options,function (err,response,body) {
        console.log(body);
        res.send(body);
    })
});

router.post('/v5/40/units/info/:unitId',function (req,res,next) {
    const unitId = req.params.unitId;
    var cookie =req.body.cookie;
    var options = {
        url: 'http://10.70.32.40:4480/api/units/info/' + unitId,
        method: 'GET',
        headers:{
            'Cookie':cookie
        }
    };
    console.log(options.url);
    request(options,function (err,response,body) {
        console.log(body);
        res.send(body);
    })
});

// exports.getJSON = function(options, onResult)
// {
//     console.log("rest::getJSON");
//
//     var port = options.port ;
//     var req = port.request(options, function(res)
//     {
//         var output = '';
//         console.log(options.host + ':' + res.statusCode);
//         res.setEncoding('utf8');
//
//         res.on('data', function (chunk) {
//             output += chunk;
//         });
//
//         res.on('end', function() {
//             var obj = JSON.parse(output);
//             onResult(res.statusCode, obj);
//         });
//     });
//
//     req.on('error', function(err) {
//         //res.send('error: ' + err.message);
//     });
//
//     req.end();
// };

module.exports=router;
