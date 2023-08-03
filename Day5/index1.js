let arrList=[];

function deleteItems(e){
   e.target.parentElement.remove();
}
function displayItems(listValue){
  
   
    let list=document.createElement("li");
    list.innerHTML=listValue;
    let listFirstChild=document.querySelector(".list-items").firstElementChild;
   let listAppendChild=listFirstChild.appendChild(list) ;   
   let html='<i class="ri-delete-bin-line" onclick="deleteItems(event)"></i>';
   listAppendChild.insertAdjacentHTML("beforeend",html)
}
function addItems(){
    let items=document.querySelector("#item");
    let listValue=items.value;
    if(items.value!=""){
        arrList.push(items.value);
        if(items.value!=""){
            items.value="";
        }
        displayItems(listValue);

    }

    
}