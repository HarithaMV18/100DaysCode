let buttonColours=["green","red",  "yellow", "blue"];
let randomChosenColour;
let buttonIndex;
let count=1;
   function playSound(randomChosenColour){
    switch(randomChosenColour){
        case "red":
            let red=new Audio('sounds/red.mp3');
            red.play();
            break;
        case "green":
            let green=new Audio('sounds/green.mp3');
            green.play();
            break;
        case "yellow":
            let yellow=new Audio('sounds/yellow.mp3');
            yellow.play();
            break;
        case "blue":
            let blue=new Audio('sounds/blue.mp3');
            blue.play();
            break;

    }

   }
    
   function gameStartAuto(){
    let randomNumber=Math.floor(Math.random()*4);
    randomChosenColour=buttonColours[randomNumber];
    for(let i=0;i<count;i++){
        $("#"+randomChosenColour).fadeOut().fadeIn();
        playSound(randomChosenColour);
        return randomNumber;

    }
  

}
function gameStartPlayer(randomAuto){

 $("button").on("click",function(){

   buttonIndex=$("button").index(this);
  
    $("#"+buttonColours[buttonIndex]).fadeOut().fadeIn();
    playSound(buttonColours[buttonIndex]);
    if(randomAuto===buttonIndex){
    }

    }); 
}
// function gameCompare(){
//     console.log(randomAuto+"  "+randomPlayer)

// }
$(document).on("keypress click",function(){

    $("h1").text("Level "+count);
    let randomAuto=  gameStartAuto();
    gameStartPlayer(randomAuto);
})