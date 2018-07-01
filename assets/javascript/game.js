// Global Variables for player objects, booleans, and current player and enemy fighters
var DarthMaul = createPlyrAttr("darthMaul");
var Rey = createPlyrAttr("rey");
var Emperor = createPlyrAttr("emperorPalp");
var Chewbacca= createPlyrAttr("chewbacca");
var picDarth = '<img class="card-img-top" src="assets/images/Darth-Maul-02-icon.png" alt="Card image cap">';
var picRey = '<img class="card-img-top" src="assets/images/main-thumb-t-1785517-200-boztfctkwxbzmfjwurneimbimaluhaxk.jpeg" alt="Card image cap">';
var enemyLeft = 3;
var pickedfirst, pickedsecond, pickedthird, pickedLast, defDead = false;
var Plyr1, Plyr2 = {};

// Printing to the console all the attributes of the four characters
console.log(DarthMaul);
console.log(Rey);
console.log(Emperor);
console.log(Chewbacca);
$("#battle-txt").append("<p>Pick a Player for Yourself!</p>");

// A f(x) for generating a characters random attributes for hp, current, base, and counter attack powers
function createPlyrAttr (Name) {
    var charname = Name;
    var hp = Math.floor(Math.random()*100)+100;
    var num3 = Math.floor(Math.random()*10)+15;
    var num2 = Math.floor(Math.random()*10)+10;
    var thisPlr = {Name: charname, charHP: hp,totalAttackPwr: num2, baseAttackPwr: num2, counterAttackPwr: num3, 
        printPlrHP: function() {$('#' + this.Name +" .mycard ul li").text(this.charHP + " HP");}};
    thisPlr.printPlrHP();
    return thisPlr;
}

// A f(x) for assigning a character and his card to the player area and asking for next choice 
function movePlayer (playerchar) {
    Plyr1 = playerchar;
    pickedfirst = true;
    $("#battle-txt").empty().append("<p>Pick an enemy player!</p>");
}

// A f(x) for assigning a character and his card to the enemy area and asking to attack
function moveNextEnemy (playerchar) {
    Plyr2 = playerchar;
    $("#battle-txt").empty().append("<p>Press Attack!</p>");
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

// A f(x) for deciding actions for player cards based on click order and battle status
function choosePic (picName,OffDiv,DefDiv) {
    if (!pickedfirst) {
        $("#"+picName.Name).remove();
        $("#playerArea").append(OffDiv);
        movePlayer(picName);
    } 
    else if (!pickedsecond) {
        $("#"+picName.Name).remove();
        $("#defenderArea").append(DefDiv);
        moveNextEnemy(picName);
        pickedsecond = true;    
    }
    else if (!pickedthird && defDead) {
        $("#"+picName.Name).remove();
        $("#defenderArea").append(DefDiv);
        moveNextEnemy(picName);
        defDead = false;
        pickedthird = true;
    }
    else if (!pickedLast && defDead) {
        $("#"+picName.Name).remove();
        $("#defenderArea").append(DefDiv);
        moveNextEnemy(picName);
        defDead = false;
        pickedLast = true;
    }
}

// Click functions for each character for moving their respective cards

$("#darthMaul").on("click",function() {
    newOffDiv = $('<div class="card w-100 myoffcard" style="width: 2rem;">'+picDarth+'<div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Darth Maul</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">'+ DarthMaul.charHP + "HP</li></ul></div>");
    newDefDiv = $('<div class="card w-100 mycard" style="width: 2rem;"><img class="card-img-top" src="assets/images/Darth-Maul-02-icon.png" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Darth Maul</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">'+ DarthMaul.charHP + "HP</li></ul></div>");
    choosePic(DarthMaul,newOffDiv,newDefDiv);
});

$("#rey").on("click",function() {
    newOffDiv = $('<div class="card w-100 myoffcard" style="width: 2rem;"><img class="card-img-top" src="assets/images/main-thumb-t-1785517-200-boztfctkwxbzmfjwurneimbimaluhaxk.jpeg" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Rey</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">'+ Rey.charHP + "HP</li></ul></div>");
    newDefDiv = $('<div class="card w-100 mycard" style="width: 2rem;"><img class="card-img-top" src="assets/images/main-thumb-t-1785517-200-boztfctkwxbzmfjwurneimbimaluhaxk.jpeg" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Rey</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">'+ Rey.charHP + "HP</li></ul></div>");
    choosePic(Rey,newOffDiv,newDefDiv);
});

$("#emperorPalp").on("click",function() {
    newOffDiv = $('<div class="card w-100 myoffcard" style="width: 2rem;"><img class="card-img-top" src="assets/images/rendition1.img.jpg" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Emperor</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">' + Emperor.charHP + "HP</li></ul></div>");
    newDefDiv = $('<div class="card w-100 mycard" style="width: 2rem;"><img class="card-img-top" src="assets/images/rendition1.img.jpg" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Emperor</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">' + Emperor.charHP + "HP</li></ul></div>");
    choosePic(Emperor,newOffDiv,newDefDiv);
});

$("#chewbacca").on("click",function() {
    newOffDiv = $('<div class="card w-100 myoffcard" style="width: 2rem;"><img class="card-img-top" src="assets/images/ChewbaccaROTS.jpg" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Chewy</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">'+ Chewbacca.charHP + "HP</li></ul></div>");
    newDefDiv = $('<div class="card w-100 mycard" style="width: 2rem;"><img class="card-img-top" src="assets/images/ChewbaccaROTS.jpg" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Chewy</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">'+ Chewbacca.charHP + "HP</li></ul></div>");
    choosePic(Chewbacca,newOffDiv,newDefDiv);
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
                $("#battle-txt").empty().append("<p>You killed " + Plyr2.Name + "!</p>");
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
            $("#battle-txt").empty().append("<p>No player picked yet!</p>");
        }
        else if (!pickedsecond) {
            $("#battle-txt").empty().append("<p>You haven't picked an enemy yet!</p>");
        }
    }
});