const menu_icon_click=document.querySelector(".menu-icon");
const close_icon_click=document.querySelector(".close-icon");
const side_nav_click=document.querySelector(".side-nav");
menu_icon_click.addEventListener("click",function(){

    side_nav_click.style.right="0px";
    side_nav_click.style.opacity="1";

  
})
close_icon_click.addEventListener("click",function(){
    side_nav_click.style.right="-200px";
    side_nav_click.style.opacity="0";

  
})