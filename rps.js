var gameChoices = ["r", "p", "s"];
var wins = 0;
var losses = 0;
var ties = 0;

for (var i = 0; i < 3; i++) {
    // play each individual round!
    // collect the user choice
    var userChoice = prompt("type 'r' or 'p' or 's' to start!");
    userChoice = userChoice.toLowerCase();
    console.log("User: " + userChoice);
    
    // generate computer choice (random)
    var computerChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    console.log("Computer: " + computerChoice);

    // display both user and computer choice
    alert(`You Chose: ${userChoice} | Computer Chose: ${computerChoice}`);

    // calculate whether user win/lose/tie and alert the result
    if (userChoice === "r" && computerChoice === "s") {
        wins ++;
        alert(`You won! You've won ${wins} time so far!`);
    }
    else if (userChoice === "r" && computerChoice === "p") {
       losses ++;
       alert(`You lost! You've lost ${losses} time so far!`);
    }
    else if (userChoice === "r" && computerChoice === "r") {
        ties ++;
        alert(`You tied! You've tied ${ties} time so far!`);
    }
    else if (userChoice === "s" && computerChoice === "p") {
        wins ++;
        alert(`You won! You've won ${wins} time so far!`);
    }
    else if (userChoice === "s" && computerChoice === "r") {
        losses ++;
        alert(`You lost! You've lost ${losses} time so far!`);
    }
    else if (userChoice === "s" && computerChoice === "s") {
        ties ++;
        alert(`You tied! You've tied ${ties} time so far!`);
    }
    else if (userChoice === "p" && computerChoice === "r") {
        wins ++;
        alert(`You won! You've won ${wins} time so far!`);
    }
    else if (userChoice === "p" && computerChoice === "s") {
        losses ++;
        alert(`You lost! You've lost ${losses} time so far!`);
    }
    else if (userChoice === "p" && computerChoice === "p") {
        ties ++;
        alert(`You tied! You've tied ${ties} time so far!`);
    }




}