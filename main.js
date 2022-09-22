var clear1 = false
var clear2 = false
var clear3 = false
var clear4 = false
var clear5 = false
var clear6 = false
var clear7 = false

var lit1 = false
var lit2 = false
var lit3 = false
var lit4 = false
var lit5 = false
var lit6 = false
var lit7 = false

function ignite1() {
    document.getElementById("flame1").style.visibility="visible"
    console.log("red signal")
    lit1 = true
    if (clear1 == true && clear2 == true && clear3 == true && clear4 == true) {
        clear5 = true;
        console.log('clear5')
    }
    checker()
}
function ignite2() {
    document.getElementById("flame2").style.visibility="visible"
    lit2 = true;
    if (clear1 == true && clear2 == true) {
        clear3 = true;
        console.log('clear3')
    }
    checker()
}
function ignite3() {
    document.getElementById("flame3").style.visibility="visible"
    lit3 = true;
    if (clear1 == true) {
        clear2 = true
        console.log('clear2')
    }
    checker()
}
function ignite4() {
    document.getElementById("flame4").style.visibility="visible"
    lit4 = true
    if (clear1 == true && clear2 == true && clear3 == true) {
        clear4 = true;
        console.log('clear4')
    }
    checker()
}
function ignite5() {
    document.getElementById("flame5").style.visibility="visible"
    lit5 = true;
    if (clear1 == true && clear2 == true && clear3 == true && clear4 == true && clear5 == true) {
        clear6 = true;
        console.log('clear6')
    }
    checker()
}
function ignite6() {
    document.getElementById("flame6").style.visibility="visible"
    lit6 = true;
    if (clear1 == true && clear2 == true && clear3 == true && clear4 == true && clear5 == true && clear6 == true) {
        clear7 = true;
        console.log('clear7')
        passed();
    }
    console.log(clear1, clear2, clear3, clear4, clear5, clear6, clear7)
    //checker()
}
function ignite7() {
    document.getElementById("flame7").style.visibility="visible"
    lit7 = true;
    clear1 = true;
    console.log('clear1')
    checker();
}

function checker() {
    if (clear1 == true && clear2 == true && clear3 == true && clear4 == true && clear5 == true && clear6 == true && clear7 == true) {
        passed();
        console.log('passed')
    }
    if (lit1 == true && lit2 == true && lit3 == true && lit4 == true && lit5 == true && lit6 == true && lit7 == true && clear7 == false) {
        failed();
        console.log("failed")
    }
}


function failed() {
    unignite1();
    unignite2();
    unignite3();
    unignite4();
    unignite5();
    unignite6();
    unignite7();
    clear1 = false
    clear2 = false
    clear3 = false
    clear4 = false
    clear5 = false
    clear6 = false
    clear7 = false
    lit1 = false
    lit2 = false
    lit3 = false
    lit4 = false
    lit5 = false
    lit6 = false
    lit7 = false
}

function passed() {
    console.log("player win");
    document.getElementById("CeleBg").style.visibility="visible"
}

function unignite1() {
    document.getElementById("flame1").style.visibility="hidden"
    console.log("red signal")
}
function unignite2() {
    document.getElementById("flame2").style.visibility="hidden"
}
function unignite3() {
    document.getElementById("flame3").style.visibility="hidden"
}
function unignite4() {
    document.getElementById("flame4").style.visibility="hidden"
}
function unignite5() {
    document.getElementById("flame5").style.visibility="hidden"
}
function unignite6() {
    document.getElementById("flame6").style.visibility="hidden"
}
function unignite7() {
    document.getElementById("flame7").style.visibility="hidden"
}


//green, orange, purple, blue, red, yellow, pink


//Congratulations on solving this year's scavenger hunt puzzle thingie! For your birthday reward, you finally get your own minecraft java account! (Whenever you want to redeem the prize, just enter this code into amazon and follow the instructions there "code")
//BUT WAIT! THERE'S MORE! Marlia also got you SPOTIFY PREMIUM for 6 months!! I'll tell you in person how to redeem it bc i don't feel like typing it here lol. Happy birthday!!!