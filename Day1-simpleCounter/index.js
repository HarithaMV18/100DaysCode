let minusBtn=document.getElementById("minus");
let plusBtn=document.getElementById("plus");
let resultBox=document.querySelector(".result");
let result=resultBox.textContent;
let reset=document.querySelector("#reset").addEventListener("click",function(){
    resultBox.textContent=0;
});
function increment(){
   result++;
  resultBox.classList.add("yellow");
  setTimeout(function(){
    resultBox.classList.remove("yellow")
  },100)
   resultBox.textContent=result;


}
function decrement(){
    result--;
    resultBox.classList.add("red");
    setTimeout(function(){
        resultBox.classList.remove("red")
      },100)
    resultBox.textContent=result;
    
 
 }
plusBtn.addEventListener("click", increment);
minusBtn.addEventListener("click",decrement);
