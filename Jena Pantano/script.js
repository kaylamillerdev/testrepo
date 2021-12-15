let goldCoins = 0;
function rollDice() {
    for(i=0; i < 11; i++){
        const roll = Math.floor(Math.random()*6) + 1;
        alert("you have rolled a " + roll + ".");
        if(roll === 1){
            alert("Coins Earned: " + goldCoins);
            break;
        }
        if((roll === 4) && (goldCoins > 0)){
            goldCoins -= 1;
            alert("Coins Earned: " + goldCoins);
            break;
        }
        if(roll < 5){
            break;
        }
        if(roll === 5){
            goldCoins += 5;
            alert("Coins Earned: " + goldCoins);
            break;
        }
        if(roll === 6){
            goldCoins += 6;
            alert("Coins Earned: " + goldCoins);
        }
        if(i == 10){
            alert("Thanks for playing!")
            break;
        }
    }
    alert("Total Gold Coins Earned: " + goldCoins + "!");

    keepPlaying = prompt("Do you want to keep playing?")
    if(keepPlaying == "Yes" || keepPlaying == "y"){
        rollDice();
    } else {
        alert("Goodbye! Shutting Down...");
    }   
}