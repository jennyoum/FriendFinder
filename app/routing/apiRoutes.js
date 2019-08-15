//var express = require("express");
//var path = require("path");
var friendsData = require("../data/friends");

//var app = express.Router();
module.exports = function(app){
app.get("/api/friends", function(req, res) {
    res.json(friendsData);
});

app.post("/signup/post", function(req,res){
    var newFriendsData = req.body.values;
    console.log(req.body);
    console.log(newFriendsData);
    console.log(friendsData.friendsData);
    var resultArr = [];
    
    for(var i = 0; i < friendsData.length; i++) {
        var result = 0;
        for(var u = 0; u < friendsData[i].values.length; u++) {
            result += Math.abs(req.body.values[u] - friendsData[i].values[u]);
            
        }
        resultArr.push(result);
    }
    var match = resultArr[0];
    var matchFriend = 0;
    for(var r = 0; r < resultArr.length; r++) {
        if( match > resultArr[r]) {
            match = resultArr[r];
            matchFriend = r;
        }
    }
    var newUser = {
        name: req.body.name,
        photo: req.body.photo,
        values: req.body.values
    }
    friendsData.push(newUser)
    res.json(friendsData[matchFriend]);
});
}
