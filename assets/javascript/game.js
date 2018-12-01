$(document).ready(function(){
          //this selects a random # to be shown at the start of the game (random # btwn 19 -120)
  var sRandom = Math.floor(Math.random()*101+19);

           //sending a random number (sRandom) to randomNumber id in html
  $("#randomNumber").text(sRandom);

          // settign random numbers for the jewels (random # btwn 1 - 12)
var bNum = Math.floor(Math.random()*11+1);
var gNum = Math.floor(Math.random()*11+1);
var rNum = Math.floor(Math.random()*11+1);
var yNum = Math.floor(Math.random()*11+1);

var userTotal=0;
var wins= 0;
var losses = 0;

$("#numberWins").text(wins);

$("#numberLosses").text(losses);


          //on clicks for the jewels
    //blue jewel
$("#bg").on('click', function(){
  userTotal = userTotal + bNum;
  //console.log("NEW userTotal = " + userTotal);
  $("#finalTotal").text(userTotal);

           // winning and losing conditions
  if (userTotal === sRandom){
    winner();
  }
  else if (userTotal > sRandom){
    loser();
  }
})

    //green jewel
$("#gg").on('click', function(){
  userTotal = userTotal + gNum;
  //console.log("NEW userTotal = " + userTotal);
  $("#finalTotal").text(userTotal);

            // winning and losing conditions
  if (userTotal === sRandom){
    winner();
  }
  else if (userTotal > sRandom){
    loser();
  }
})

    //red jewel
$("#rg").on('click', function(){
  userTotal = userTotal + rNum;
  //console.log("NEW userTotal = " + userTotal);
  $("#finalTotal").text(userTotal);

            // winning and losing conditions
  if (userTotal === sRandom){
    winner();
  }
  else if (userTotal > sRandom){
    loser();
  }
})

    //yellow jewel
$("#yg").on('click', function(){
  userTotal = userTotal + yNum;
  //console.log("NEW userTotal = " + userTotal);
  $("#finalTotal").text(userTotal);

            // winning and losing conditions
  if (userTotal === sRandom){
    winner();
  }
  else if (userTotal > sRandom){
    loser();
  }
})



          //resetting the game
function reset(){
  sRandom = Math.floor(Math.random()*101+19);
  //console.log(sRandom);
  $("#randomNumber").text(sRandom);

  bNum = Math.floor(Math.random()*11+1);
  gNum = Math.floor(Math.random()*11+1);
  rNum = Math.floor(Math.random()*11+1);
  yNum = Math.floor(Math.random()*11+1);
  
  userTotal = 0;

  $("#finalTotal").text(userTotal);
}



          //adds the wins to the userTotal
function winner(){
  alert("YOU WON!!");
  wins++;
  $("#numberWins").text(wins);
  reset();
}


            //adds the losses to the userTotal
function loser(){
  alert("YOU LOSE!!");
  losses++;
  $("#numberLosses").text(losses);
  reset();
}

})









