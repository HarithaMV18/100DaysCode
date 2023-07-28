let rightSlider=document.getElementById("right");
let leftSlider=document.getElementById("left");
let counter=0;
let imgLength=4;     
function rightFunction(){

    document.getElementsByTagName("img")[counter].classList.remove("active");
    counter=(imgLength + counter + 1) % imgLength;
    document.getElementsByTagName("img")[counter].classList.add("active");

} 
function leftFunction(){

    document.getElementsByTagName("img")[counter].classList.remove("active");
    counter=(imgLength + counter - 1) % imgLength;
    document.getElementsByTagName("img")[counter].classList.add("active");

} 

rightSlider.addEventListener("click",()=>rightFunction());
leftSlider.addEventListener("click",()=>leftFunction()); 
            
        