// let content_box=document.querySelector(".content");
// content_box.addEventListener("mousemove",(e)=>{
// let content_box_location=content_box.getBoundingClientRect();
// // console.log(content_box_location)
// let mouseLocation=Math.floor(e.clientX-content_box_location.left);
// let conter_box_center_location=Math.floor(content_box_location.width/2)
// if(mouseLocation<=conter_box_center_location){
// let red_color=Math.floor(gsap.utils.mapRange(0,conter_box_center_location,255,0,mouseLocation));
// console.log(red_color)
// gsap.to(".content",{
//     backgroundColor:`rgb(${red_color},0,0)`,
//     ease:"power4"
// })
    
// }
// else{
//     let blue_color=Math.floor(gsap.utils.mapRange(conter_box_center_location,content_box_location.width,0,255,mouseLocation));
//     gsap.to(".content",{
//         backgroundColor:`rgb(0,0,${blue_color})`,
//         transition:"backgroundColor 2s ease"
//     })
// }

// })
// content_box.addEventListener("mouseleave",()=>{
//    gsap.to(".content",{
//     backgroundColor:"white",
//     ease:"power4"
//    })
// })
let box=document.querySelector(".content");

box.addEventListener("mousemove",(e)=>{
    let box_location=box.getBoundingClientRect();
    
let box_location_center=Math.floor(box_location.width/2);
   
let mouseLocation=Math.floor(e.clientX-box_location.left)

if(mouseLocation<box_location_center){
   let red_color=Math.floor(gsap.utils.mapRange(0,box_location_center,255,0,mouseLocation))

   gsap.to(".content",{
    backgroundColor:`rgb(${red_color},0,0)`,
    ease:"power4"
   })
}
else{
    let blue_color=Math.floor(gsap.utils.mapRange(box_location_center,box_location.width,0,255,mouseLocation))
    gsap.to(".content",{
     backgroundColor:`rgb(0,0,${blue_color})`,
     ease:"power4"
    })
    
}
})
box.addEventListener("mouseleave",()=>{
    gsap.to(".content",{
        backgroundColor:"white",
        ease:"power4"
    })
})