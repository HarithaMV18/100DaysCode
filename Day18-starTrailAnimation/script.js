let container_pointer=document.querySelector(".container");

container_pointer.addEventListener("click",(event)=>{
   let randomColor= Math.floor(Math.random()*16777215).toString(16);
   let randomSize=Math.floor(Math.random() * 101)
   let divEle=document.createElement("div");
   container_pointer.appendChild(divEle);
  divEle.classList.add("star")

  let x_axis=event.offsetX;
  let y_axis=event.offsetY;
  divEle.style.top=(y_axis+"px");
  divEle.style.left=(x_axis+"px");
  divEle.style.backgroundColor="#"+randomColor;
  divEle.style.width=randomSize+"px";
  divEle.style.height=randomSize+"px";
 
   setTimeout(()=>{
    container_pointer.removeChild(divEle);
   },3000)





    
})
