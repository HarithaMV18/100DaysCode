const menu_icon=document.querySelector(".ri-menu-line");
const close_icon=document.querySelector(".ri-close-line");
const menu_icons=document.querySelector(".menu-icons");
const menu_items=document.querySelectorAll(".menu-items ul li");
const content_div=document.querySelector(".content");
const rotate_section=document.querySelector(".rotate-section");
menu_icon.addEventListener("click",function(){
    menu_icons.style.transform=" translate(-65px,-40px)  rotate(-70deg)";
    // content_div.style.transform=" rotate(-30deg)";
    rotate_section.style.transform=" rotate(-20deg)";
    rotate_section.style.height="fit-content";
    function task(i){
        setTimeout(()=>{menu_items[i].classList.add("show")},1000*i)
    }
    for(let i=0;i<menu_items.length;i++){
      task(i);
    }
  

})
close_icon.addEventListener("click",function(){
    // menu_icons.style.transform=" translate(-65px,-30px)  rotate(0deg)";
    // content_div.style.transform=" rotate(0deg)";
    rotate_section.style.transform=" rotate(0deg)";
    menu_icons.style.transform=" translate(-65px,-30px)  rotate(0deg)";
    menu_items.forEach((item)=>{
        item.classList.remove("show")

    })
        
  
})