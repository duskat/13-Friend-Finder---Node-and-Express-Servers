var friendsArray = require("../data/friends")

function arrayDifference(A, B) {
    var c = 0;
    for(let i = 0; i < A.length; i++) {
        c = c + Math.abs(A[i] - B[i])
      }
      console.log(c);
      return c;
}

function getBestFriend (friendsArray){
    var friendsScoreTracker = [];
    //to find maximum number in array
    

    for (var i = 0; i < friendsArray.length; i++){
        var lastFriend = friendsArray[friendsArray.length-1];
        console.log(lastFriend);
        var indexOflastFriend = friendsArray.indexOf(lastFriend);
        var scoreLastFriend = friendsArray[indexOflastFriend].scores;
        // friendsArray[i].scores - scoreLastFriend
        arrayDifference(friendsArray[i].scores, scoreLastFriend);
        friendsScoreTracker.push(arrayDifference);
        // friendsScoreTracker.push(arrayDifference);    
    }
    var maxValue = Math.max(friendsScoreTracker);
    console.log(maxValue)
    var matchScore = friendsScoreTracker.indexOf(maxValue);

    return friendsArray[matchScore]
}

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friendsArray)
    });
    app.post("/api/friends", function(req, res){
        friendsArray.push(req.body);
        res.json(getBestFriend(friendsArray))
    });

}
