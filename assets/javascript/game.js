// Global Variables for player objects, booleans, and current player and enemy fighters
var DarthMaul = createPlyrAttr("Darth Maul");
var Rey = createPlyrAttr("Rey");
var Emperor = createPlyrAttr("The Emperor");
var Chewbacca= createPlyrAttr("Chewbacca");
var enemyLeft = 3;
var pickedfirst = false;
var pickedsecond = false;
var pickedthird = false;
var pickedLast = false;
var defDead = false;
var Plyr1 = {};
var Plyr2 = {};

// Printing to the console all the attributes of the four characters
console.log(DarthMaul);
console.log(Rey);
console.log(Emperor);
console.log(Chewbacca);

// Generating the random attributes for all 4 players
printPlrHP();

// Starting the game prompt and a slight delay for page to load
setTimeout(function () {
    alert("Pick a player for yourself!");
}, 1000);

// A f(x) for generating a characters random attributes for hp, current, base, and counter attack powers
function createPlyrAttr (Name) {
    var charname = Name;
    var hp = Math.floor(Math.random()*100)+100;
    var num2 = Math.floor(Math.random()*10)+10;
    var num3 = Math.floor(Math.random()*10)+15;
    var beenChosen = false;
    var thisPlr = {Name: charname, charHP: hp,totalAttackPwr: num2, baseAttackPwr: num2, counterAttackPwr: num3};
    return thisPlr;
}

// A f(x) for printing initial hp for each player card on screen
function printPlrHP () {
    $("#darthMaul .mycard ul li").text(DarthMaul.charHP + " HP");
    $("#rey .mycard ul li").text(Rey.charHP + " HP");
    $("#emperorPalp .mycard ul li").text(Emperor.charHP + " HP");
    $("#chewbacca .mycard ul li").text(Chewbacca.charHP + " HP"); 
}

// A f(x) to assign the players attribute holding object to his card when clicked on
function getPlayer () {
    if (playerClick == "darthMaul") {
        var player = DarthMaul;
    }
    else if (playerClick == "rey") {
        var player = Rey;
    }
    else if (playerClick == "emperorPalp") {
        var player = Emperor;
    }
    else if (playerClick == "chewbacca") {
        var player = Chewbacca;
    }
    console.log(player);
    return player;
}

// A f(x) to remove the pic of the character from the holding row when picked
function removePic (pick) {
    $("#" + pick).remove();
}

// A f(x) for assigning a character and his card to the player area and asking for next choice 
function movePlayer () {
    Plyr1 = getPlayer();
    pickedfirst = true;
    $("#battle-txt").append("<p>Pick an enemy player!</p>");
}

// A f(x) for assigning a character and his card to the enemy area and asking to attack
function moveNextEnemy () {
    Plyr2 = getPlayer ();
    $("#battle-txt").empty();
    $("#battle-txt").append("<p>Press Attack!</p>");
}

// A f(x) for adjusting the hp of player after attack
function ifAttack (offPlr,defName, defPwr) {
    thisPlr = offPlr;
    $("#battle-txt").append("<p>" + defName + " did " + defPwr + " damage to you!");
    thisPlr.totalAttackPwr += thisPlr.baseAttackPwr;
    thisPlr.charHP -= defPwr;
    if (thisPlr.charHP < 0) {
        $("#playerArea .myoffcard ul li").text("0 HP");
    }
    else {
        $("#playerArea .myoffcard ul li").text(thisPlr.charHP + " HP");
    }
        return thisPlr;
}

// A f(x) for adjusting the hp of enemy after attack
function wasAttacked (defPlr,offPwr){
    thisPlr = defPlr;
    $("#battle-txt").append("<p>You did " + offPwr + " damage to " + thisPlr.Name +"!");
    thisPlr.charHP -= offPwr;
    if (thisPlr.charHP < 0) {
        $("#defenderArea .mycard ul li").text("0 HP");
    }
    else {
        $("#defenderArea .mycard ul li").text(thisPlr.charHP + " HP");
    }
        return thisPlr;
}

// Click functions for each character for moving their respective cards based on click order and battle status

$("#darthMaul").on("click",function() {
    playerClick = "darthMaul";
    newOffDiv = $('<div class="card w-100 myoffcard" style="width: 2rem;"><img class="card-img-top" src="assets/images/Darth-Maul-02-icon.png" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Darth Maul</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">'+ DarthMaul.charHP + "HP</li></ul></div>");
    newDefDiv = $('<div class="card w-100 mycard" style="width: 2rem;"><img class="card-img-top" src="assets/images/Darth-Maul-02-icon.png" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Darth Maul</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">'+ DarthMaul.charHP + "HP</li></ul></div>");

    if (!pickedfirst) {
        removePic(playerClick);
        $("#playerArea").append(newOffDiv);
        movePlayer();
    } 
    else if (!pickedsecond) {
        removePic(playerClick);
        $("#defenderArea").append(newDefDiv);
        moveNextEnemy();
        pickedsecond = true;    
    }
    else if (!pickedthird && defDead) {
        removePic(playerClick);
        $("#defenderArea").append(newDefDiv);
        moveNextEnemy();
        defDead = false;
        pickedthird = true;
    }
    else if (!pickedLast && defDead) {
        removePic(playerClick);
        $("#defenderArea").append(newDefDiv);
        moveNextEnemy();
        defDead = false;
        pickedLast = true;
    }
});

$("#rey").on("click",function() {
    playerClick = "rey";
    newOffDiv = $('<div class="card w-100 myoffcard" style="width: 2rem;"><img class="card-img-top" src="assets/images/main-thumb-t-1785517-200-boztfctkwxbzmfjwurneimbimaluhaxk.jpeg" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Rey</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">'+ Rey.charHP + "HP</li></ul></div>");
    newDefDiv = $('<div class="card w-100 mycard" style="width: 2rem;"><img class="card-img-top" src="assets/images/main-thumb-t-1785517-200-boztfctkwxbzmfjwurneimbimaluhaxk.jpeg" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Rey</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">'+ Rey.charHP + "HP</li></ul></div>");

    if (!pickedfirst) {
        removePic(playerClick);
        $("#playerArea").append(newOffDiv);
        movePlayer();
    } 
    else if (!pickedsecond) {
        removePic(playerClick);
        $("#defenderArea").append(newDefDiv);
        moveNextEnemy();
        pickedsecond = true;
    }
    else if (!pickedthird && defDead) {
        removePic(playerClick);
        $("#defenderArea").append(newDefDiv);
        moveNextEnemy();
        defDead = false;
        pickedthird = true;
    }
    else if (!pickedLast && defDead) {
        removePic(playerClick);
        $("#defenderArea").append(newDefDiv);
        moveNextEnemy();
        defDead = false;
        pickedLast = true;
    }
});

$("#emperorPalp").on("click",function() {
    playerClick = "emperorPalp";
    newOffDiv = $('<div class="card w-100 myoffcard" style="width: 2rem;"><img class="card-img-top" src="assets/images/rendition1.img.jpg" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Emperor</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">' + Emperor.charHP + "HP</li></ul></div>");
    newDefDiv = $('<div class="card w-100 mycard" style="width: 2rem;"><img class="card-img-top" src="assets/images/rendition1.img.jpg" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Emperor</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">' + Emperor.charHP + "HP</li></ul></div>");
    
    if (!pickedfirst) {
        removePic(playerClick);
        $("#playerArea").append(newOffDiv);
        movePlayer();
    }
    else if (!pickedsecond) {
        removePic(playerClick);
        $("#defenderArea").append(newDefDiv);
        moveNextEnemy();
        pickedsecond = true;
    }
    else if (!pickedthird && defDead) {
        removePic(playerClick);
        $("#defenderArea").append(newDefDiv);
        moveNextEnemy();
        defDead = false;
        pickedthird = true;
    }
    else if (!pickedLast && defDead) {
        removePic(playerClick);
        $("#defenderArea").append(newDefDiv);
        moveNextEnemy();
        defDead = false;
        pickedLast = true;
    }
});

$("#chewbacca").on("click",function() {
    playerClick = "chewbacca";
    newOffDiv = $('<div class="card w-100 myoffcard" style="width: 2rem;"><img class="card-img-top" src="assets/images/ChewbaccaROTS.jpg" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Chewy</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">'+ Chewbacca.charHP + "HP</li></ul></div>");
    newDefDiv = $('<div class="card w-100 mycard" style="width: 2rem;"><img class="card-img-top" src="assets/images/ChewbaccaROTS.jpg" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Chewy</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">'+ Chewbacca.charHP + "HP</li></ul></div>");

    if (!pickedfirst) {
        removePic(playerClick);
        $("#playerArea").append(newOffDiv);
        movePlayer();
    } 
    else if (!pickedsecond) {
        removePic(playerClick);
        $("#defenderArea").append(newDefDiv);
        moveNextEnemy();
        pickedsecond = true;
    }
    else if (!pickedthird && defDead) {
        removePic(playerClick);
        $("#defenderArea").append(newDefDiv);
        moveNextEnemy();
        defDead = false;
        pickedthird = true;
    }
    else if (!pickedLast && defDead) {
        removePic(playerClick);
        $("#defenderArea").append(newDefDiv);
        moveNextEnemy();
        defDead = false;
        pickedLast = true;
    }
});

// Attack click function for adjusting hp, losing and winning game, dealing with attack and no enemy, etc.
$(".attackbtn").on("click", function() {
    if (enemyLeft >0) {
        if (pickedsecond && !defDead) {
            $("#battle-txt").empty();
            Plyr2 = wasAttacked(Plyr2,Plyr1.totalAttackPwr);
            Plyr1 = ifAttack(Plyr1,Plyr2.Name,Plyr2.counterAttackPwr);
            if (Plyr1.charHP <=0) {
                setTimeout(function () {
                    alert("Your dead!!!");
                    location.reload();
                }, 800);
            }
            else if (Plyr2.charHP <= 0) {
                enemyLeft--;
                $("#defenderArea").empty();
                $("#battle-txt").empty();
                $("#battle-txt").append("<p>You killed " + Plyr2.Name + "!</p>");
                defDead = true;
                if (enemyLeft > 0) {
                    $("#battle-txt").append("<p>Pick another enemy!</p>");
                }
                else {
                    setTimeout(function () {
                        alert("You won!!!");
                        location.reload();
                    }, 800);
                }
            } 
        }
        else if (!pickedfirst) { 
            alert("No player picked!");
        }
        else if (!pickedsecond) {
            alert("You haven't picked an enemy yet!");
        }
        else {
            alert("Pick another enemy!");
        }
    }
    else {
        alert("Everybodys dead!!!!");
    }
});