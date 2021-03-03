var winsNeeded;
var computerScore;
var playerScore ;
getSession();

function playRound(playerPick) {
    var computerPick = Math.floor(Math.random() * 3) + 1; //1=rock, 2=paper, 3=scissors
    showPicks(computerPick, playerPick);
    var result = "";
    if(playerPick === computerPick) {
        result = "IT'S A DRAW! AS THEY SAY GREAT MINDS THINK ALIKE";
    } else if(playerPick == 1 && computerPick == 2 ||
             playerPick == 2 && computerPick == 3 ||
             playerPick == 3 && computerPick == 1) {
        result += "YOU LOST! ";
        computerScore++;
        $("#computer-score").text(computerScore);
    } else {
        result += "YOU WIN!"
        playerScore++;
        $("#player-score").text(playerScore);
    }
    if(playerPick == 1 && computerPick == 2 ||
        playerPick == 2 && computerPick == 1) {
        result += " THE ROCK JUST CAN'T HANDLE THE PAPER TOWEL!";
    } else if(playerPick == 1 && computerPick == 3 ||
        playerPick == 3 && computerPick == 1) {
        result += " THE SCISSORS WE'RE DEMOLISHED BY THE ROCK!";
    } else if(playerPick == 2 && computerPick == 3 ||
        playerPick == 3 && computerPick == 2) {
        result += " THE PAPER WAS CLEANLY CUT BY SCISSORS!";          
    }
    $("#last-result").text(result);
    if(computerScore >= winsNeeded || playerScore >= winsNeeded) {
        finishGame();
    } else {
        setSession();
    }
}

function startGame() {
    winsNeeded = $("#wins").val();
    if(winsNeeded != "" && winsNeeded > 0) { //if user submits empty box
        computerScore = 0;
        playerScore = 0;
        $("#computer-score").text(computerScore);
        $("#player-score").text(playerScore);
        $(".hidden").hide();
        $(".picks").show();
        $(".pick").show();
        $(".pickbutton").show();
        setSession();
    }
}

function finishGame() {
    if(computerScore>playerScore) {
        $("#end-result").text("YOU HAVE LOST! I WOULD LIKE TO THANK MY DEVELOPER FOR MY SUPERB AI.");
    } else {
        $("#end-result").text("YOU HAVE WON! JUST WAIT TILL I GET AN UPDATE!");
    }
    $(".pickbutton").hide();
    sessionStorage.clear();
}

function showPicks(computerPick, playerPick) {
    $(".hidden").hide();
    $("#player-pick-" + playerPick).show();
    $("#computer-pick-" + computerPick).show();
}

function getSession() { 
    computerScore = sessionStorage.getItem('computerScore');
    playerScore = sessionStorage.getItem('playerScore');
    winsNeeded = sessionStorage.getItem('winsNeeded');
}

function setSession() {
    sessionStorage.setItem('computerScore', computerScore);
    sessionStorage.setItem('playerScore', playerScore);
    sessionStorage.setItem('winsNeeded', winsNeeded);
}