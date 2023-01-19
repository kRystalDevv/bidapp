var bidNoEl = document.getElementById("bid-no-value");
var bidAmountEl = document.getElementById("bid-amount-value");
var coinsEl = document.getElementById("coins");
var showMessageEl = document.getElementById("show-message");
var showUserBidNoEl = document.getElementById("show-bid-no");
var showDiceNoEl = document.getElementById("show-dice-no");
var btnEl = document.getElementById("btn");
var diceBoxEl = document.getElementById("diceBox");
var myDice=document.getElementById("mydice")
var endGame=document.getElementById("end")
var dice1=document.getElementById("dice1")
console.log(dice1)
var dice2=document.getElementById("dice2")
console.log(dice2)
var endGamePara=document.getElementById("end")


//welcoming screen

setTimeout(function() {
    var videoContainer = document.getElementById("video-container");
    videoContainer.parentNode.removeChild(videoContainer);
  }, 10000);
  
  
  

// console.log(diceBoxEl); // Testing purpose only...!

var totalCoins = 1000;
diceBoxEl.style.display = "none";
myDice.style.display="none"
coinsEl.innerHTML = totalCoins;

 //to hide the end game button
 var ending=document.getElementById("btn-end")
 ending.style.display="none"
ending.classList.add('btn-end');
function clearForm() {
    document.getElementById("bid-no-value").value = "";
    document.getElementById("bid-amount-value").value = "";
};

// Note: Function to check valid bid no...!
function aceptableBidNo() {
    if (bidNoEl.value >= 1 && bidNoEl.value <= 6) {
        return true;
    }

    else {
        // console.log('Bid No should not less than 1 or greater than 6!');
        return false;
    };
};

// Note: Function to check valid bid amount...!
function acceptableAmount() {
    if (bidAmountEl.value >= 1 && bidAmountEl.value <= 500 && bidAmountEl.value <=totalCoins ) {
        return true;
    }

    else {
        return false;
        // console.log('Bid Amount should not less than 1 or greater than 500!');
    };
};


// Note: FUnction to generate dice...!
function generateDice() { return Math.ceil(Math.random() * 5) };

// Note: Function to show bid result...!
function isBidMatched(diceValue) {
    if (diceValue == Number(bidNoEl.value)) {
        return true;
    }

    else {
        return false;
    };
};

// Function to add class to img
function shake(){
    const mydice = document.getElementById('mydice');
    const diceBox = document.getElementById('diceBox');
    mydice.classList.add('shake');
    diceBox.classList.add('shake');
    
    setTimeout(() => {
      mydice.classList.remove('shake');
      diceBox.classList.remove('shake');
    }, 500);
  }
 
  

// Note: Function to play game...!
function playGame() {
    if (aceptableBidNo()) {
        if (acceptableAmount()) {
            var dice = generateDice();

            var customUrl = `./assests/Dice${dice}.png`;

            myDice.style.display="block"
            myDice.style.borderRadius="20px"
            myDice.src=`./assests/Dice${Number(bidNoEl.value)}.png`
            diceBoxEl.style.display = "block";
            diceBoxEl.style.borderRadius="20px"
            diceBoxEl.src = customUrl;

            showUserBidNoEl.innerHTML = bidNoEl.value;
            showDiceNoEl.innerHTML = dice;
            ending.style.display="block"
            

            if (isBidMatched(dice)) {
                // Note: Calculation for adding coins...!
                showMessageEl.innerHTML = "Congratulation! you won the bid!";
                totalCoins = totalCoins + Number(bidAmountEl.value);
                coinsEl.innerHTML = totalCoins;
                //class
                shake();
            }

            else {
                // Note: Calculation for subtracting coins...!
                showMessageEl.innerHTML = "Sorry! you loss the bid!";
                totalCoins = totalCoins - Number(bidAmountEl.value);
                coinsEl.innerHTML = totalCoins;
                //class
                shake();
                // console.log(totalCoins);

                if (totalCoins == 0 || totalCoins < 1) {
                    btnEl.disabled = true;
                    showMessageEl.innerHTML = "Game Over!";
                    //class
                    shake();
                    clearForm();
                };
               
            };
            clearForm();
        }

        else {
            alert("Bid Amount should not less than 1 or greater than 500 and it should be less than total coins or equal to!");
        };
    }

    else {
        alert("Bid No should not less than 1 or greater than 6!");
    };
};
//to end the game
function endgame(){
    console.log("testing")
    endGamePara.innerHTML=`you won ${totalCoins} Coins`
    myDice.style.display="none"
    dice1.remove()
    dice2.remove()
    btnEl.style.display="none"
    
}