let buttons = document.querySelectorAll(".btns");
let del = document.querySelectorAll(".btns-del");
let result = document.getElementById("content");
let nums = "";

function equals(nums) {
    try{(eval(nums))
  if (eval(nums)) {
    nums=eval(nums)
    result.innerHTML = nums;

  } else {
    nums="Error"
    result.innerHTML = "Error";
  
  }
}
catch(e){
    nums="Error"
  
    result.innerHTML = "Error";
}
return nums
}
function clearFunc(value) {
  nums = "";
  result.innerHTML = "";
}
for (let i = 0; i < buttons.length; i++) {
 
  buttons[i].addEventListener("click", (event) => {
    if(nums==="Error"){
        clearFunc(true)
    }


 
    nums += event.target.innerHTML;
    result.innerHTML = nums;
    if (event.target.innerHTML === "=") {
        nums=nums.slice(0, -1)
      nums=equals(nums);
    }
  });
}
