/* 

// create a function "fight"
function fight() {
    window.alert("the fight has begun!")
}

// call the function fight
//   fight();

*/

// create window PROMPT function 
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
console.log(playerName, playerAttack, playerHealth);

// enemy values
var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

// welcome
var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
};

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
  
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;
  
    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + "." + enemyName + " now has " + enemyHealth + "remaining."
    );

    // check enemy health
    if (enemyHealth<=0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health remaining.");
    }
  
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;
  
    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + "." + playerName + " now has " + playerHealth + " remaining."
    );
    // check player health
    if (playerHealth<=0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health remaining.");
    }
};

// fight();

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

// if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2;
    }
    // if no (false), ask question again by running fight() again
    else {
      fight();
    }
}


// this will do math and log 20
//    console.log(10 + 10);
// what is this?
//    console.log("Our robot's name is " + playerName);

// var name = "your name";
// console.log(name); */

