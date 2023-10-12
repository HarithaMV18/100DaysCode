const content_box=document.querySelectorAll(".content-box");
const scrollfunction=()=>{
 
    const triggerHeight=Math.ceil(window.innerHeight/5*4)

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


    
}
window.addEventListener("scroll",scrollfunction);
document.body.addEventListener("touchmove",scrollfunction);
