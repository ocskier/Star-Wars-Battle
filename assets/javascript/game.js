var DarthMaul = createPlyrAttr("Darth Maul");
var Rey = createPlyrAttr("Rey");
var Emperor = createPlyrAttr("Emperor Palpatine");
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

function createPlyrAttr (name) {
    var charname = name;
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

function ifAttack (offPlr,defPwr) {
    thisPlr = offPlr;
    thisPlr.totalAttackPwr += thisPlr.baseAttackPwr;
    thisPlr.charHP -= defPwr;
    $("#playerArea .myoffcard ul li").text(thisPlr.charHP + " HP");
    return thisPlr;
}

function wasAttacked (defPlr,offPwr){
    thisPlr = defPlr;
    thisPlr.charHP -= offPwr;
    $("#defenderArea .mycard ul li").text(thisPlr.charHP + " HP");
    return thisPlr;
}

console.log(Plyr1);
console.log(Plyr2);

$("#darthMaul").on("click",function() {
    playerClick = "darthMaul";
    if (!pickedfirst) {
        $("#darthMaul").remove();
        Plyr1 = getPlayer();
        $("#playerArea").append('<div class="card w-100 myoffcard" style="width: 2rem;"><img class="card-img-top" src="assets/images/Darth-Maul-02-icon.png" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Darth Maul</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">'+ DarthMaul.charHP + "HP</li></ul></div>");
        pickedfirst = true;
    } 
    else if (!pickedsecond) {
        $("#darthMaul").remove();
        $("#defenderArea").append('<div class="card w-100 mycard" style="width: 2rem;"><img class="card-img-top" src="assets/images/Darth-Maul-02-icon.png" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Darth Maul</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">'+ DarthMaul.charHP + "HP</li></ul></div>");
        Plyr2 = getPlayer ();
        pickedsecond = true;
    }
    else if (!pickedthird && defDead) {
        $("#darthMaul").remove();
        $("#defenderArea").append('<div class="card w-100 mycard" style="width: 2rem;"><img class="card-img-top" src="assets/images/Darth-Maul-02-icon.png" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Darth Maul</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">'+ DarthMaul.charHP + "HP</li></ul></div>");
        Plyr2 = getPlayer ();
        defDead = false;
        pickedthird = true;
    }
    else if (!pickedLast && defDead) {
        $("#darthMaul").remove();
        $("#defenderArea").append('<div class="card w-100 mycard" style="width: 2rem;"><img class="card-img-top" src="assets/images/Darth-Maul-02-icon.png" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Darth Maul</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">'+ DarthMaul.charHP + "HP</li></ul></div>");
        Plyr2 = getPlayer ();
        defDead = false;
        pickedLast = true;
    }
});

$("#rey").on("click",function() {
    playerClick = "rey";
    if (!pickedfirst) {
        $("#rey").remove();
        Plyr1 = getPlayer();
        $("#playerArea").append('<div class="card w-100 myoffcard" style="width: 2rem;"><img class="card-img-top" src="assets/images/main-thumb-t-1785517-200-boztfctkwxbzmfjwurneimbimaluhaxk.jpeg" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Rey</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">'+ Rey.charHP + "HP</li></ul></div>");
        pickedfirst = true;
    } 
    else if (!pickedsecond) {
        $("#rey").remove();
        $("#defenderArea").append('<div class="card w-100 mycard" style="width: 2rem;"><img class="card-img-top" src="assets/images/main-thumb-t-1785517-200-boztfctkwxbzmfjwurneimbimaluhaxk.jpeg" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Rey</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">'+ Rey.charHP + "HP</li></ul></div>");
        Plyr2 = getPlayer ();
        pickedsecond = true;
    }
    else if (!pickedthird && defDead) {
        $("#rey").remove();
        $("#defenderArea").append('<div class="card w-100 mycard" style="width: 2rem;"><img class="card-img-top" src="assets/images/main-thumb-t-1785517-200-boztfctkwxbzmfjwurneimbimaluhaxk.jpeg" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Rey</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">'+ Rey.charHP + "HP</li></ul></div>");
        Plyr2 = getPlayer ();
        defDead = false;
        pickedthird = true;
    }
    else if (!pickedLast && defDead) {
        $("#rey").remove();
        $("#defenderArea").append('<div class="card w-100 mycard" style="width: 2rem;"><img class="card-img-top" src="assets/images/main-thumb-t-1785517-200-boztfctkwxbzmfjwurneimbimaluhaxk.jpeg" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Rey</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">'+ Rey.charHP + "HP</li></ul></div>");
        Plyr2 = getPlayer ();
        defDead = false;
        pickedLast = true;
    }
});

$("#emperorPalp").on("click",function() {
    playerClick = "emperorPalp";
    if (!pickedfirst) {
        $("#emperorPalp").remove();
        $("#playerArea").append('<div class="card w-100 myoffcard" style="width: 2rem;"><img class="card-img-top" src="assets/images/rendition1.img.jpg" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Emperor</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">' + Emperor.charHP + "HP</li></ul></div>");
        Plyr1 = getPlayer();
        pickedfirst = true;
    }
    else if (!pickedsecond) {
        $("#emperorPalp").remove();
        $("#defenderArea").append('<div class="card w-100 mycard" style="width: 2rem;"><img class="card-img-top" src="assets/images/rendition1.img.jpg" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Emperor</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">' + Emperor.charHP + "HP</li></ul></div>");
        Plyr2 = getPlayer ();
        pickedsecond = true;
    }
    else if (!pickedthird && defDead) {
        $("#emperorPalp").remove();
        $("#defenderArea").append('<div class="card w-100 mycard" style="width: 2rem;"><img class="card-img-top" src="assets/images/rendition1.img.jpg" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Emperor</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">' + Emperor.charHP + "HP</li></ul></div>");
        Plyr2 = getPlayer ();
        defDead = false;
        pickedthird = true;
    }
    else if (!pickedLast && defDead) {
        $("#emperorPalp").remove();
        $("#defenderArea").append('<div class="card w-100 mycard" style="width: 2rem;"><img class="card-img-top" src="assets/images/rendition1.img.jpg" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Emperor</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">' + Emperor.charHP + "HP</li></ul></div>");
        Plyr2 = getPlayer ();
        defDead = false;
        pickedLast = true;
    }
});

$("#chewbacca").on("click",function() {
    playerClick = "chewbacca";
    if (!pickedfirst) {
        $("#chewbacca").remove();
        Plyr1 = getPlayer();
        $("#playerArea").append('<div class="card w-100 myoffcard" style="width: 2rem;"><img class="card-img-top" src="assets/images/ChewbaccaROTS.jpg" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Chewbacca</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">'+ Chewbacca.charHP + "HP</li></ul></div>");
        pickedfirst = true;
    } 
    else if (!pickedsecond) {
        $("#chewbacca").remove();
        $("#defenderArea").append('<div class="card w-100 mycard" style="width: 2rem;"><img class="card-img-top" src="assets/images/ChewbaccaROTS.jpg" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Chewbacca</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">'+ Chewbacca.charHP + "HP</li></ul></div>");
        Plyr2 = getPlayer ();
        pickedsecond = true;
    }
    else if (!pickedthird && defDead) {
        $("#chewbacca").remove();
        $("#defenderArea").append('<div class="card w-100 mycard" style="width: 2rem;"><img class="card-img-top" src="assets/images/ChewbaccaROTS.jpg" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Chewbacca</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">'+ Chewbacca.charHP + "HP</li></ul></div>");
        Plyr2 = getPlayer ();
        defDead = false;
        pickedthird = true;
    }
    else if (!pickedLast && defDead) {
        $("#chewbacca").remove();
        $("#defenderArea").append('<div class="card w-100 mycard" style="width: 2rem;"><img class="card-img-top" src="assets/images/ChewbaccaROTS.jpg" alt="Card image cap"><div class="card-body" style="padding: 5px 0 0 0;"><h5 class="card-title">Chewbacca</h5><p class="card-text"></p></div><ul class="list-group list-group-flush"><li class="list-group-item">'+ Chewbacca.charHP + "HP</li></ul></div>");
        Plyr2 = getPlayer ();
        defDead = false;
        pickedLast = true;
    }
});

$("#attack").on("click", function() {
    if (playersLeft >0) {
        if (pickedsecond && !defDead) {
            Plyr2 = wasAttacked(Plyr2,Plyr1.totalAttackPwr);
            Plyr1 = ifAttack(Plyr1,Plyr2.counterAttackPwr);
            console.log(Plyr1);
            console.log(Plyr2);
            if (Plyr1.charHP <=0) {
                alert("Your dead!!");
                location.reload();
            }
            if (Plyr2.charHP <= 0) {
                playersLeft -= 1;
                $("#defenderArea").empty();
                defDead = true;
                if (playersLeft > 0) {
                setTimeout(function () {
                    alert("Pick another enemy!")}, 800);
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