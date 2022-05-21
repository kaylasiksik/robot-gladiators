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

// enemy values
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

// fight function
var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
        // ask player if they'd like to fight or run
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + ' has decided to skip this fight. Goodbye!');
                // subtract money from playerMoney for skipping
                playerMoney = Math.max(0, playerMoney - 10);
                console.log("playerMoney", playerMoney)
                break;
            }
        }
  
        // generate random damage value based on player's attack power 
        var damage = random(playerAttack - 3, playerAttack);

        enemyHealth = Math.max(0, enemyHealth - damage);
        
        console.log(
            playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
        );
 
        // check enemy health
        if (enemyHealth <= 0) {
            window.alert(enemyName + ' has died!');
  
            // award player money for winning
            playerMoney = playerMoney + 20;
            // leave while() loop since enemy is dead
            break;
        } else {
            window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
        }
        
        // generate random damage value based on enemy's attack power
        var damage = random(enemyAttack -3, enemyAttack);
    
        playerHealth = Math.max(0, playerHealth - damage);
        
        console.log(
            enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
        );
  
        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + ' has died!');
            // leave while() loop if player is dead
            break;
        } else {
            window.alert(playerName + ' still has ' + playerHealth + ' health left.');
        }
    } // end of while loop
}; // end of fight function



// function to start a new game
var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10

    for (var i = 0; i < enemyNames.length; i++) {
        // check enemy's health
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            // pick new enemy to fight based on index of enemyNames array
            var pickedEnemyName = enemyNames[i];
            // resent enemy health before starting new fight 
            enemyHealth = random(40, 60);
    
            // use debugger to pause script
            // debugger; 
    
            // pass pickedEnemyName variable value into fight function
            fight(pickedEnemyName);

            // if player is still alive and there are enemies remaining
            // ensures that shop() is called after every fight but only if the loop iterator, i, still has room to increment.
            if (playerHealth > 0 && i < enemyNames.length -1) {
                // ask if player wants to use the shop
                var storeConfirm = window.confirm("The fight is over. Would you like to visit the shop before the next round?");
                // if yes, take them to the store() function
                if (storeConfirm) {
                    shop();
                }
            } // end shop questions
        } // if player is not alive, break out of the loop and let endGame() run
        else {
            window.alert("You have lost your robot in battle! Game Over.");
            break;
        } 
    } // end for loop
    // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();
};

// function to end entire game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
    // if player is still alive, player wins
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! you now have a score of " + playerMoney + " .");
    } else {
        window.alert("You've lost your robot in battle.");
    }
    
    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
    
    if (playAgainConfirm) {
        // resart game
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}; // end endGame() function

// shop function
var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    // console.log("entered the shop");
    
    // use switch to carry out action
    switch (shopOptionPrompt) {
        case "refill": // new case
        case "REFILL":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
                // increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        case "upgrade": // new case
        case "UPGRADE":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
            // increase attack and decrease money
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!")
            }
            break;
        case "LEAVE": // new case
        case "leave":
            window.alert("Leaving the store.");
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;  
    }
};

// function to generate a random numeric value
var random = function(min, max) {
    var value = Math.floor(Math.random() * max - min +1) + min;

    return value;
};



// start game when the page first loads 
startGame();

