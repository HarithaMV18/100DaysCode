const content_box=document.querySelectorAll(".content-box");
window.addEventListener("scroll",function(){
    const triggerHeight=Math.round(window.innerHeight/5*4)
    //The innerHeight property returns the height of a window's content area.
    content_box.forEach((item)=>{
        const item_top=item.getBoundingClientRect().top;
        if(item_top<triggerHeight){
            item.classList.add("show")
        }
        else{
            item.classList.remove("show")
        }
    })


    
})
