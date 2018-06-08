var Random = null;

$( document ).ready(function() {
    Random=Math.floor(Math.random()* 101 + 19)

    $("#randomNumber").text(Random);
})

 

var circle1= Math.floor(Math.random()*12)
var circle2= Math.floor(Math.random()*12)
var circle3= Math.floor(Math.random()*12)
var circle4= Math.floor(Math.random()*12)

var userTotal = 0;
var wins = 0;
var losses = 0;
// var Random = ("");






$("#numberWins").text(wins);
$("#numberLosses").text(losses);



function reset() {
    Random=Math.floor(Math.random()* 101 + 19);
    
    $('#randomNumber').text(Random);

    circle1= Math.floor(Math.random()*12)
    circle2= Math.floor(Math.random()*12)
    circle3= Math.floor(Math.random()*12)
    circle4= Math.floor(Math.random()*12)
    userTotal = 0;
    $('#finalTotal').text(userTotal);

}

function sweet() {
    alert("YOU WIN!!!");
    wins++;
    $('#numberWins').text(wins);
    reset()
}

function loser() {
    alert("YOU LOSE SUCKER!!!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
}

// click for balls
$('#circle1').on ('click', function(){
    userTotal = userTotal + circle1;
    console.log("New userTotal= " + userTotal) 
    $('#finalTotal').text(userTotal);

    if  (userTotal == Random) {
        sweet();
    }
        else if ( userTotal > Random) {
            loser();
        }


})

$('#circle2').on ('click', function(){
    userTotal = userTotal + circle2;
    console.log("New userTotal= " + userTotal)
    $('#finalTotal').text(userTotal);

    if  (userTotal == Random) {
        sweet();
    }
        else if ( userTotal > Random) {
            loser();
        }


})

$("#circle3").on ('click', function(){
    userTotal = userTotal + circle3;
    console.log("New userTotal= " + userTotal)
    $('#finalTotal').text(userTotal);

    if  (userTotal == Random) {
        sweet();
    }
        else if ( userTotal > Random) {
            loser();
        }


})
$('#circle4').on ('click', function(){
    userTotal = userTotal + circle4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);

    if  (userTotal == Random) {
        sweet();
    }
        else if ( userTotal > Random) {
            loser();
        }


});





