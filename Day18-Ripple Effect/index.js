let gridElements=document.querySelectorAll(".grid-item")
gridElements.forEach((item)=>{
   item.addEventListener("mouseover",(event)=>{
    let x_axis=event.pageX - item.offsetLeft;
    
    let y_axis=event.pageY - item.offsetTop;

    item.style.setProperty("--gridLeft",x_axis+"px");

    item.style.setProperty("--gridTop",y_axis+"px");

   })
})
