

//ARRAY
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];


var doubleWord = ["a","b","c",
              "d","e","f","g",
              "h","i","j","k",
              "l","m","n","o",
              "p","q","r","s",
              "t","u","v","w",
              "x","y","z"];

// Variables for tracking our wins, losses and ties. They begin at 0.
var wins = 0;
var losses = 0;
var guesses = 9;

    var random = alphabet[Math.floor(Math.random() * alphabet.length)];

    console.log(random)

//press a key, it will run the following function...

 function reset () {
    //chooses word randomly from the alphabet
    random = alphabet[Math.floor(Math.random() * alphabet.length)];
    guesses = 9; 
    console.log(random)
 }

document.onkeypress = function(result) {
    var userGuess = result.key;

    if(userGuess === random){
        wins++;
        alert("You Win");
        reset ();
    }else{
        guesses--;
    }

    if(guesses === 0){
        losses++;
        alert("You Lose");
  		reset();	           
 }

    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;

}  // moved to below the innerHTML update
