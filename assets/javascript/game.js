$( document ).ready(function() {
    var Random=Math.floor(Math.random()* 101 +19)

    $("#randomNumber").text(Random);
})

/* $("#randomNumber").text(Random);
 */

var num1= Math.floor(Math.random()*11+1)
var num2= Math.floor(Math.random()*11+1)
var num3= Math.floor(Math.random()*11+1)
var num4= Math.floor(Math.random()*11+1)

var userTotal = 0;
var wins = 0;
var losses = 0;

// variahbles

var userTotal = 0;
var wins = 0;
var losses = 0;

$("numberWins").text(wins);
$("numberLosses").text(losses);



function reset() {
    Random=Math.floor(Math.random()*101+19);
    console.log(random);
    $('randomNumber').text(Random);

    num1= Math.floor(Math.random()*11+1)
    num2= Math.floor(Math.random()*11+1)
    num3= Math.floor(Math.random()*11+1)
    num4= Math.floor(Math.random()*11+1)
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
    $('numberLosses').text(losses);
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
    /* console.log("New userTotal= " + userTotal); */
    $('#finalTotal').text(userTotal);

    if  (userTotal == Random) {
        sweet();
    }
        else if ( userTotal > Random) {
            loser();
        }


});





