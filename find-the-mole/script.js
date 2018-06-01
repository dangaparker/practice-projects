$(document).ready(startGame);
player=0;
function startGame(){
  $(".mole").on("click",function(){
      player++
  })
   function randomMole(){
       $(".cover").css("display","block");
       var mathRandom= Math.floor(Math.random() *3);
       var moleString=".mole"+mathRandom;
       var cover=".cover"+mathRandom;
       $(cover).css("display","none");
       if(player==5)
       youWin();
       clearInterval(startInt);
        }
    var startInt=setInterval(randomMole,500);
}

function youWin() {
    $(".modalWin").removeClass("hidden");
}