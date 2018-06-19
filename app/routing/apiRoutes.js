var friendsArray = require("../data/friends")

function arrayDifference(A, B) {
    var c = 0;
    for(let i = 0; i < A.length; i++) {
        c = c + Math.abs(A[i] - B[i])
      }
      console.log(c);
      return c;
}

function getBestFriend (pickles){
    var friendsScoreTracker = [];
    //to find maximum number in array

    for (var i = 0; i < pickles.length; i++){
        var lastFriend = pickles[pickles.length-1];
        var indexOflastFriend = pickles.indexOf(lastFriend);
        var scoreLastFriend = pickles[indexOflastFriend].scores;
        // pickles[i].scores - scoreLastFriend
        var c = arrayDifference(pickles[i].scores, scoreLastFriend);
        friendsScoreTracker.push(c);
        // friendsScoreTracker.push(arrayDifference);    
    }
    var maxValue = Math.max(...friendsScoreTracker);
    console.log(maxValue);  
    console.log(friendsScoreTracker)
    var matchScore = friendsScoreTracker.indexOf(maxValue);

    return pickles[matchScore]
}

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friendsArray)
    });
    app.post("/api/friends", function(req, res){
        friendsArray.push(req.body);
        res.json(getBestFriend(friendsArray));
    });

}
