// CODE IS GREEN, ORANGE, PURPLE, BLUE, RED, YELLOW, PINK 
// or: 7, 3, 2, 4, 1, 5, 6

var currentCode = [];
const correctCode = [7, 3, 2, 4, 1, 5, 6];

function ignite(candleNum) {
    document.getElementById("flame" + candleNum.toString()).style.visibility="visible"; //make the flame appear above the candle
    document.getElementById("candle" + candleNum.toString()).disabled = true; //make it so the user can't click that candle again
    currentCode.push(candleNum); //add the user's choice to their current code
    console.log(currentCode) // for testing

    if (currentCode.length == 7) //if the user has lit the last candle
        if (JSON.stringify(currentCode) === JSON.stringify(correctCode)) //check if it matches (stringify bc u can't directly compare arrays with == or ===)
            passed();
        else
            failed();
};

function passed() {
    document.getElementById("CeleBg").style.visibility="visible" // show win screen

    console.log("player win")
};

function failed() {
    for(let i = 1; i < 8; i++){ // unlight the flames all 7 candles
        document.getElementById("flame" + i.toString()).style.visibility="hidden";
    }
    for(let i = 1; i < 8; i++){ // re-enable all 7 candles to be clicked again
        document.getElementById("candle" + i.toString()).disabled = false;
    }
    currentCode = []; // reset/clear the user's current code attempt

    console.log("player fail")
};


//Congratulations on solving this year's scavenger hunt puzzle thingie! For your birthday reward, you finally get your own minecraft java account! (Whenever you want to redeem the prize, just enter this code into amazon and follow the instructions there "code")
//BUT WAIT! THERE'S MORE! Marlia also got you SPOTIFY PREMIUM for 6 months!! I'll tell you in person how to redeem it bc i don't feel like typing it here lol. Happy birthday!!!