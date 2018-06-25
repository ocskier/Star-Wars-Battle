var DarthMaul = createPlyrAttr("Darth Maul");
var Rey = createPlyrAttr("Rey");
var Emperor = createPlyrAttr("The Emperor");
var Chewbacca= createPlyrAttr("Chewbacca");
var playersLeft = 3;
var pickedfirst = false;
var pickedsecond = false;
var pickedthird = false;
var pickedLast = false;
var defDead = false;
var Plyr1 = {};
var Plyr2 = {};

console.log(DarthMaul);
console.log(Rey);
console.log(Emperor);
console.log(Chewbacca);

printPlrHP();
setTimeout(function () {
    alert("Pick a player for yourself!");
}, 1000);

function createPlyrAttr (Name) {
    var charname = Name;
    var hp = Math.floor(Math.random()*102)+19;
    var num2 = Math.floor(Math.random()*6)+5;
    var num3 = Math.floor(Math.random()*6)+5;
    var beenChosen = false;
    var thisPlr = {Name: charname, charHP: hp,totalAttackPwr: num2, baseAttackPwr: num2, counterAttackPwr: num3};
    return thisPlr;
}

function printPlrHP () {
    $("#darthMaul .mycard ul li").text(DarthMaul.charHP + " HP");
    $("#rey .mycard ul li").text(Rey.charHP + " HP");
    $("#emperorPalp .mycard ul li").text(Emperor.charHP + " HP");
    $("#chewbacca .mycard ul li").text(Chewbacca.charHP + " HP"); 
}

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

function ifAttack (offPlr,defName, defPwr) {
    thisPlr = offPlr;
    $("#battle-txt").append("<p>" + defName + " did " + defPwr + " damage to you!");
    thisPlr.totalAttackPwr += thisPlr.baseAttackPwr;
    thisPlr.charHP -= defPwr;
    $("#playerArea .myoffcard ul li").text(thisPlr.charHP + " HP");
    return thisPlr;
}

function wasAttacked (defPlr,offPwr){
    thisPlr = defPlr;
    $("#battle-txt").append("<p>You did " + offPwr + " damage to " + thisPlr.Name +"!");
    thisPlr.charHP -= offPwr;
    $("#defenderArea .mycard ul li").text(thisPlr.charHP + " HP");
    return thisPlr;
}


$("#darthMaul").on("click",function() {
    playerClick = "darthMaul";
    if (!pickedfirst) {
        $("#darthMaul").remove();
        Plyr1 = getPlayer();
        $("#playerArea").append('<div class="card w-100 myoffcard" style="width: 2rem;"><img class="card-img-top" src="assets/images/Darth-Maul-02-icon.png" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Darth Maul</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">'+ DarthMaul.charHP + "HP</li></ul></div>");
        pickedfirst = true;
        $("#battle-txt").append("<p>Pick an enemy player!</p>");
    } 
    else if (!pickedsecond) {
        $("#darthMaul").remove();
        $("#battle-txt").empty();
        $("#defenderArea").append('<div class="card w-100 mycard" style="width: 2rem;"><img class="card-img-top" src="assets/images/Darth-Maul-02-icon.png" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Darth Maul</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">'+ DarthMaul.charHP + "HP</li></ul></div>");
        Plyr2 = getPlayer ();
        pickedsecond = true;
        $("#battle-txt").append("<p>Press Attack!</p>");
    }
    else if (!pickedthird && defDead) {
        $("#darthMaul").remove();
        $("#battle-txt").empty();
        $("#defenderArea").append('<div class="card w-100 mycard" style="width: 2rem;"><img class="card-img-top" src="assets/images/Darth-Maul-02-icon.png" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Darth Maul</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">'+ DarthMaul.charHP + "HP</li></ul></div>");
        Plyr2 = getPlayer ();
        defDead = false;
        pickedthird = true;
        $("#battle-txt").append("<p>Press Attack!</p>");
    }
    else if (!pickedLast && defDead) {
        $("#darthMaul").remove();
        $("#battle-txt").empty();
        $("#defenderArea").append('<div class="card w-100 mycard" style="width: 2rem;"><img class="card-img-top" src="assets/images/Darth-Maul-02-icon.png" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Darth Maul</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">'+ DarthMaul.charHP + "HP</li></ul></div>");
        Plyr2 = getPlayer ();
        defDead = false;
        pickedLast = true;
        $("#battle-txt").append("<p>Press Attack!</p>");
    }
});

$("#rey").on("click",function() {
    playerClick = "rey";
    if (!pickedfirst) {
        $("#rey").remove();
        Plyr1 = getPlayer();
        $("#playerArea").append('<div class="card w-100 myoffcard" style="width: 2rem;"><img class="card-img-top" src="assets/images/main-thumb-t-1785517-200-boztfctkwxbzmfjwurneimbimaluhaxk.jpeg" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Rey</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">'+ Rey.charHP + "HP</li></ul></div>");
        pickedfirst = true;
        $("#battle-txt").append("<p>Pick an enemy player!</p>");
    } 
    else if (!pickedsecond) {
        $("#rey").remove();
        $("#battle-txt").empty();
        $("#defenderArea").append('<div class="card w-100 mycard" style="width: 2rem;"><img class="card-img-top" src="assets/images/main-thumb-t-1785517-200-boztfctkwxbzmfjwurneimbimaluhaxk.jpeg" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Rey</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">'+ Rey.charHP + "HP</li></ul></div>");
        Plyr2 = getPlayer ();
        pickedsecond = true;
        $("#battle-txt").append("<p>Press Attack!</p>");
    }
    else if (!pickedthird && defDead) {
        $("#rey").remove();
        $("#battle-txt").empty();
        $("#defenderArea").append('<div class="card w-100 mycard" style="width: 2rem;"><img class="card-img-top" src="assets/images/main-thumb-t-1785517-200-boztfctkwxbzmfjwurneimbimaluhaxk.jpeg" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Rey</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">'+ Rey.charHP + "HP</li></ul></div>");
        Plyr2 = getPlayer ();
        defDead = false;
        pickedthird = true;
        $("#battle-txt").append("<p>Press Attack!</p>");
    }
    else if (!pickedLast && defDead) {
        $("#rey").remove();
        $("#battle-txt").empty();
        $("#defenderArea").append('<div class="card w-100 mycard" style="width: 2rem;"><img class="card-img-top" src="assets/images/main-thumb-t-1785517-200-boztfctkwxbzmfjwurneimbimaluhaxk.jpeg" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Rey</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">'+ Rey.charHP + "HP</li></ul></div>");
        Plyr2 = getPlayer ();
        defDead = false;
        pickedLast = true;
        $("#battle-txt").append("<p>Press Attack!</p>");
    }
});

$("#emperorPalp").on("click",function() {
    playerClick = "emperorPalp";
    if (!pickedfirst) {
        $("#emperorPalp").remove();
        $("#playerArea").append('<div class="card w-100 myoffcard" style="width: 2rem;"><img class="card-img-top" src="assets/images/rendition1.img.jpg" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Emperor</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">' + Emperor.charHP + "HP</li></ul></div>");
        Plyr1 = getPlayer();
        pickedfirst = true;
        $("#battle-txt").append("<p>Pick an enemy player!</p>");
    }
    else if (!pickedsecond) {
        $("#emperorPalp").remove();
        $("#battle-txt").empty();
        $("#defenderArea").append('<div class="card w-100 mycard" style="width: 2rem;"><img class="card-img-top" src="assets/images/rendition1.img.jpg" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Emperor</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">' + Emperor.charHP + "HP</li></ul></div>");
        Plyr2 = getPlayer ();
        pickedsecond = true;
        $("#battle-txt").append("<p>Press Attack!</p>");
    }
    else if (!pickedthird && defDead) {
        $("#emperorPalp").remove();
        $("#battle-txt").empty();
        $("#defenderArea").append('<div class="card w-100 mycard" style="width: 2rem;"><img class="card-img-top" src="assets/images/rendition1.img.jpg" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Emperor</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">' + Emperor.charHP + "HP</li></ul></div>");
        Plyr2 = getPlayer ();
        defDead = false;
        pickedthird = true;
        $("#battle-txt").append("<p>Press Attack!</p>");
    }
    else if (!pickedLast && defDead) {
        $("#emperorPalp").remove();
        $("#battle-txt").empty();
        $("#defenderArea").append('<div class="card w-100 mycard" style="width: 2rem;"><img class="card-img-top" src="assets/images/rendition1.img.jpg" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Emperor</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">' + Emperor.charHP + "HP</li></ul></div>");
        Plyr2 = getPlayer ();
        defDead = false;
        pickedLast = true;
        $("#battle-txt").append("<p>Press Attack!</p>");
    }
});

$("#chewbacca").on("click",function() {
    playerClick = "chewbacca";
    if (!pickedfirst) {
        $("#chewbacca").remove();
        Plyr1 = getPlayer();
        $("#playerArea").append('<div class="card w-100 myoffcard" style="width: 2rem;"><img class="card-img-top" src="assets/images/ChewbaccaROTS.jpg" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Chewbacca</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">'+ Chewbacca.charHP + "HP</li></ul></div>");
        pickedfirst = true;
        $("#battle-txt").append("<p>Pick an enemy player!</p>");
    } 
    else if (!pickedsecond) {
        $("#chewbacca").remove();
        $("#battle-txt").empty();
        $("#defenderArea").append('<div class="card w-100 mycard" style="width: 2rem;"><img class="card-img-top" src="assets/images/ChewbaccaROTS.jpg" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Chewbacca</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">'+ Chewbacca.charHP + "HP</li></ul></div>");
        Plyr2 = getPlayer ();
        pickedsecond = true;
        $("#battle-txt").append("<p>Press Attack!</p>");
    }
    else if (!pickedthird && defDead) {
        $("#chewbacca").remove();
        $("#battle-txt").empty();
        $("#defenderArea").append('<div class="card w-100 mycard" style="width: 2rem;"><img class="card-img-top" src="assets/images/ChewbaccaROTS.jpg" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Chewbacca</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">'+ Chewbacca.charHP + "HP</li></ul></div>");
        Plyr2 = getPlayer ();
        defDead = false;
        pickedthird = true;
        $("#battle-txt").append("<p>Press Attack!</p>");
    }
    else if (!pickedLast && defDead) {
        $("#chewbacca").remove();
        $("#battle-txt").empty();
        $("#defenderArea").append('<div class="card w-100 mycard" style="width: 2rem;"><img class="card-img-top" src="assets/images/ChewbaccaROTS.jpg" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Chewbacca</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">'+ Chewbacca.charHP + "HP</li></ul></div>");
        Plyr2 = getPlayer ();
        defDead = false;
        pickedLast = true;
        $("#battle-txt").append("<p>Press Attack!</p>");
    }
});

$(".attackbtn").on("click", function() {
    if (playersLeft >0) {
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
                playersLeft -= 1;
                $("#defenderArea").empty();
                $("#battle-txt").empty();
                $("#battle-txt").append("<p>You killed " + Plyr2.Name + "!</p>");
                defDead = true;
                if (playersLeft > 0) {
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