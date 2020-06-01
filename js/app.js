// turorial that helped me https://www.youtube.com/watch?v=XwPVlXb5thI and https://www.youtube.com/watch?v=YOViDMVWac8
//I was able to piece together bits a pieces from seeing the code he used to filter out some of my issues  "mispelled, forgetting things" because he went over it after the fact with his actual class - his was a webinar on yt for a class while i can NOW explain the codeing i still cant seem to fully piece it together in my head there is a diconnect between using and reading that i hope ill fix here soon. also most of my annotations are for me in the future if im looking back on this and am confused.




var player=[]; //the variable 'players' equal a not yet determind array - will be determined later in code.
var markers=["🎃","👻"]; //the variable 'markers' is equal to (defined as) the array of X and O
// if i want to see the marker or alert(0, for x or 1 for 0)
var scores = [0,0]; // this arrays both elements are the value of 0 in the 0 and the 1 spot - this is basically saying [x(player1), 0(player2)] and then i need to increase the number for their score
player[0] = "Player 1";
player[1] = "Player 2";
var playerTurn =  0; // this is a simple variable that lets you toggle between defined object - these are defined later in the code - player turn is grabbed by gameDiv.inner..... +markers[playerTurn] ... this if statement also helps define the x o of a character from the array "[]" that was given in the above variables
var winCondition = /* start of my array for wincondtions */ [ 7, 56, 73, 84, 146, 273, 292, 488];
var gameEnd = false;

function pointCount (points) { // ANNOTATION!! This is not the same as ln25
    scores[playerTurn] += points; // this is where points are calculated for the ^ durectly above numbers - - - there is not a calculator written yet, well kinda
} 

function winnerCheck() { // checking the winners scores
    console.log (scores[0] + " " + scores[1]);
    for (var i = 0; i < winCondition.length; i++) { // i equals 0 as long as i is less than the length of the winValue
        if ((winCondition[i] & scores[playerTurn]) == winCondition[i]) { // so i orginally if (winCondition[i] & scores[playerTurn] == winCondition[i]) { and it wasnt calculating wincondistions properly there were certain parameters that messed it up bascially this does the math without doing proper math i needed
            gameEnd = true;
            alert (player[playerTurn] + " is the Thiccest XD !!");
        }

    } 
}

function game(gameDiv, pointsPlayer) { //if the box is empty add a player marker if the box is populater dont so to do that i add and if statement ... points was added later - learning/watching i also added 1 2 4 8 16 etc to onclick / also this is the declaration of points 
    if (!gameEnd) {    
    if (gameDiv.innerHTML == "&nbsp;") {
        pointCount(pointsPlayer);
    gameDiv.innerHTML = "<span>" + markers[playerTurn] + "</span>";
    winnerCheck();
    alternatePlayer();
    /*how do you target things? document.getElementBy - minor breakthrough on this one - -  tbh honestly almost cried XD - 
     the video also showed
    function game(gameDiv) { 
    gameDiv.attributes["0"] // whatever the attibute is id'd as - if not sure use dev tool basically this is an array so it works as one so the first item in my <div>'s !!not pappa div!! is the onclick
    gameDiv.innerHTML = "<span>" + markers[playerTurn] + "</span>";
    alternatePlayer(); */
    }
}
}
//this in conjuction with html"onclick... replaces document.getElementById does the same thing in this case
//also I originally had:
/* function game(gameDiv) {
    gameDiv.innerText = "x";
}
this let me add a letter but changing it to an innerHTML tag and then letting js add html lines gave me more control/styling fun 
*/ 
//this funciton will toggle between p1 and p2

function alternatePlayer() {
    if(playerTurn == 0) playerTurn = 1;
    else playerTurn = 0;

    document.getElementById("Pname").innerText = player[playerTurn] + " 's Turn";
    //this is asking the document to get an element ((NOT ELEMENTS check spelling)) by its id tag ("what the id tag is" in "" becuase if not then it isnt looking for it properly - not sur0e why yet) the innerText is dor displaying playerTurn
}
//if the box is empty add a player marker if the box is populater dont 

//I wasnt sure how or where to check for win conditions so i kept using the video to kinda piece this together
