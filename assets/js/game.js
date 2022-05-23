/* GAME FUNCTIONS */

// function to generate a random numeric value
var random = function(min, max) {
    var value = Math.floor(Math.random() * max - min +1) + min;

    return value;
};

/* START FIGHT() FUNCTION */
var fight = function(enemies) { // fight function
    while (player.health > 0 && enemies.health > 0) {
        // ask player if they'd like to fight or run
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
        
        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            
            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(player.name + ' has decided to skip this fight. Goodbye!');
                
                // subtract money from playerMoney for skipping
                player.money = Math.max(0, player.money - 10);
                console.log("playerMoney", player.money)
                break;
            }
        }
  
        // generate random damage value based on player's attack power 
        var damage = random(player.attack - 3, player.attack);

        enemies.health = Math.max(0, enemies.health - damage);
        
        console.log(
            player.name + ' attacked ' + enemies.name + '. ' + enemies.name + ' now has ' + enemies.health + ' health remaining.'
        );

        // debugger;
 
        // check enemy health
        if (enemies.health <= 0) {
            window.alert(enemies.name + ' has died!');
  
            // award player money for winning
            player.money = player.money + 20;
            
            // leave while() loop since enemy is dead
            break;
        } else {
            window.alert(enemies.name + ' still has ' + enemies.health + ' health left.');
        }
        
        // generate random damage value based on enemy's attack power
        var damage = random(enemies.attack - 3, enemies.attack);
    
        player.health = Math.max(0, player.health - damage);
        
        console.log(
            enemies.name + ' attacked ' + player.name + '. ' + player.name + ' now has ' + player.health + ' health remaining.'
        );
  
        // check player's health
        if (player.health <= 0) {
            window.alert(player.name + ' has died!');
            // leave while() loop if player is dead
            break;
        } else {
            window.alert(player.name + ' still has ' + player.health + ' health left.');
        }
    } // end of while loop
}; 
/* END OF FIGHT FUNCTION */


/* STARTGAME() FUNCTION */
var startGame = function() {
    // reset player stats
    player.reset();

    for (var i = 0; i < enemies.length; i++) {
        // check enemy's health
        if (player.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            // pick new enemy to fight based on index of enemies 
            var enemy = enemies[i];
            // resent enemy health before starting new fight 
            enemy.health = random(40, 60);
    
            // debugger; 
        
            // pass pickedEnemyName variable value into fight function
            fight(enemy);

            // if player is still alive and there are enemies remaining
            // ensures that shop() is called after every fight but only if the loop iterator, i, still has room to increment.
            if (player.health > 0 && i < enemies.length - 1) {
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
/* STARTGAME() FUNCTION END */


/* ENDGAME() FUNCTION */
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
    
    // if player is still alive, player wins
    if (player.health > 0) {
        window.alert("Great job, you've survived the game! you now have a score of " + player.money + " .");
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
}; 
/* END ENDGAME() FUNCTION */


/* SHOP() FUNCTION */
var shop = function() {
    
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    
    // use switch to carry out action
    switch (shopOptionPrompt) {
        
        case "refill": // new case
        case "REFILL":
            player.refill();
            break;
        case "UPGRADE":
        case "upgrade":
            player.upgrade();
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
/* END SHOP() FUNCTION */


/* GAME INFORMATION AND VARIABLES */

/* PLAYER() FUNCTION */
var player = {          // player info object to replace player variables
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function () {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refill: function () {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for $7.");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("you don't have enough money!");
        }
    },
    upgrade: function() { 
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for $7.");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("you don't have enough money!");
        }
    }
}; /* END PLAYER() VAR */

/* ENEMIES() VAR */
var enemies = [
    {
        name: "Roberto",
        attack: random(10,14)
    },
    {
        name: "Amy Maree",
        attack: random(10,14)
    },
    {
        name: "Robo Trumble",
        attack: random(10,14)
    }
]; /* END ENEMIES() VAR */

console.log(enemies);
console.log(enemies[0]);
console.log(enemies[0].name[3]);
console.log(enemies[0]['attack']);

/* RUN GAME */
startGame();


/* 
NOTES, EXAMPLES, AND STRUCTURAL CHANGES FROM PREVIOUS CODE


// create a function "fight"
function fight() {
    window.alert("the fight has begun!")
}

// call the function fight
//   fight();

*/

// original player variables
    // var playerName = window.prompt("What is your robot's name?");
    // var playerHealth = 100;
    // var playerAttack = 10;
    // var playerMoney = 10;

// original enemy values
    // var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
    // var enemyHealth = 50;
    // var enemyAttack = 12;

//  NOTE: can now INDEX ACCESS robot objects with enemies[0]
//  ACCESS a robot's properties with enemies[0].name.



/* ORIGINAL CASE CODE 
var shop = function() {
    
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    // console.log("entered the shop");
    
    // use switch to carry out action
    switch (shopOptionPrompt) {
            if (player.money >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
                
                // increase health and decrease money
                player.health = player.health + 20;
                player.money = player.money - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;

        case "upgrade": // new case
        case "UPGRADE":
            if (player.money >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
            
                // increase attack and decrease money
            player.attack = player.attack + 6;
            player.money = player.money - 7;
            }
            else {
                window.alert("You don't have enough money!")
            }
            break;
        */
