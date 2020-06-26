/* Add numbers to calculate score
create a score variable to keep and return total score
ideas:  -create a form that takes all numbers clicked on, pushes to an array, then adds them up
        -each number clicked on manipulates the html and automatically changes the score
        -get the id of each num clicked on to add
*/
let score = 0;

var addScore = function(num) {
    score += num;
    console.log(score)
    document.getElementById('scoreId').innerHTML = score;
}

//to clear/reset the score
var clearScore = function() {
    score = 0;
    document.getElementById('scoreId').innerHTML = score;
}