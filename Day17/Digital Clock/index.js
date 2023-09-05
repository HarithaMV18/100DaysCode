let hrs=document.querySelector("#hours");
let min=document.querySelector("#minutes");
let sec=document.querySelector("#seconds");
let mer=document.querySelector("#meridien");

let displayTime=()=>{
    let date=new Date();
    mer.innerHTML=date.getHours()>12?"PM" : "AM";
    hrs.childNodes[0].data=date.getHours()>12?date.getHours()%12:date.getHours();
    min.childNodes[0].data=date.getMinutes();
    sec.childNodes[0].data=date.getSeconds();
    //concatination 0 as prefix for values less than 10
    if(hrs.childNodes[0].data<10){
        hrs.childNodes[0].data=0+hrs.childNodes[0].data
    }
    if(min.childNodes[0].data<10){
        min.childNodes[0].data=0+min.childNodes[0].data
    }
    if(sec.childNodes[0].data<10){
        sec.childNodes[0].data=0+sec.childNodes[0].data
    }

}
setInterval(displayTime,1000)
