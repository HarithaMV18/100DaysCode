const cancelIcon=document.querySelectorAll(".addClose");
const qTop=document.querySelectorAll(".section6 .questions .quesTop");
const displayBottom=document.querySelectorAll(".section6 .questions .quesBottom");
qTop.forEach((item,index)=>{
 
    item.addEventListener("click",function(e){

        if(cancelIcon[index].childNodes[0].className=="ri-add-line"){
            cancelIcon[index].innerHTML="<i class='ri-close-line'></i>"
            displayBottom[index].style.display="block";
            displayBottom[index].style.flexBasis="content";
            displayBottom[index].style.padding="20px";
        }
        else{
            cancelIcon[index].innerHTML="<i class='ri-add-line'></i>"
            displayBottom[index].style.display="none"
     
        }

    })
 
})
