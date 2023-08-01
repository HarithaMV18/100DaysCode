let buttonColours=["red", "blue", "green", "yellow"];
let gamePattern=[];
let userClickedPattern=[];
let level=0;
let i=0;

function playSound(btnColor){
    
    switch(btnColor){
       
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
        default:
            let wrong=new Audio('sounds/wrong.mp3');
            wrong.play();

    }
    
}

function nextSequence(){
    let randomNumber=Math.floor(Math.random() * 4);
    let randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    level++;
    $("h1").text("Level "+level);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

}
$("#main-heading").click(function(){
    $("#main-heading").hide();
    $(".grid-items").before("<h1>Level</h1>")
    nextSequence();
})

function animatePress(currentColour){
 $("#"+currentColour).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColour).removeClass("pressed")
  },100)

}
function verify(userClickedPatternLength)
{

if(gamePattern[userClickedPatternLength]===userClickedPattern[userClickedPatternLength]){
   
   
    if(gamePattern.length===userClickedPattern.length)
    {
        
        setTimeout(function (){
        userClickedPattern=[]
        nextSequence()},1000);
    }
}

else{
    playSound("wrong");
                $("h1").text("Game Over");
                $("body").addClass("gameOver");
                setTimeout(function(){
                    $("body").removeClass("gameOver")  ;
                   
                },200)
                $("#retry").show();
                $("#retry").click(function(){
                    document.location.reload();
                });
}
}


$("button").on("click",function(e){
    let userChosenColor=e.target.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    verify(userClickedPattern.length -1);
})

