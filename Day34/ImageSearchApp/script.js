const apiKey='Rl_SeE1yhLKAIM6qDNIggmQZdmw3m8CfwZgyfy1sOMY';
const submitBtn=document.querySelector('input[type="submit"]');
const inputImg=document.querySelector('input[type="text"]');
const main_img_container=document.querySelector('.main-img-container');
const load_more_btn=document.getElementById('load-more');
let inputImgValue="";
let dataArr=[];
let page=1;

const getImages=async(inputImgValue,page)=>{
    try {
       
        const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputImgValue}&client_id=${apiKey}`;
        const getImagesData=await fetch(url).then((response)=>response.json())
    
        if(page===1){
            dataArr=getImagesData.results;
        }
        else{
            dataArr=[...dataArr,...getImagesData.results]
        }
      
     
       main_img_container.innerHTML=dataArr.map((item)=>{
       
       return `<div class="images">
       <a href=${item.links.html} target="_blank"><img src=${item.urls.small} alt=${item.alt_description
       }></a>   
          <p id="img-description">${item.alt_description}</p>
      </div>`

       }).join("")
       load_more_btn.style.display="block";
        
    } catch (error) {
        console.log(error)
        
    }
}
submitBtn.addEventListener("click",function(e){
    e.preventDefault();
  inputImgValue=inputImg.value;
   getImages(inputImgValue,page)
})
load_more_btn.addEventListener("click",function(e){
 page++;
 getImages(inputImg.value,page)
})
