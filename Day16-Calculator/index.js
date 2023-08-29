let buttons = document.querySelectorAll(".btns");
let del = document.querySelectorAll(".btns-del");
let result = document.getElementById("content");
let nums = "";
let count = 0;

function equals(nums) {
  try {
    // eval(nums);
    if (eval(nums) || eval(nums)===0) {
      nums = eval(nums);
      result.innerHTML = nums;
    } else {
      nums = "Error";
      result.innerHTML = "Error";
    }
  } catch (e) {
    nums = "Error";

    result.innerHTML = "Error";
  }
  return JSON.stringify(nums);
}
function clearFunc(value) {
  nums = "";
  result.innerHTML = "";
  count = 0;
}
function removeFunc(value) {
  nums = nums.slice(0, -1);
  result.innerHTML = nums;
}
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (event) => {
    if (nums === "Error") {
      clearFunc(true);
    }
    else if(count===1 && event.target.innerHTML.match(/[0-9]/g)!==null){
        nums = "";
        result.innerHTML = "";
        count = 0;

    }
    else{
        count=0;
    }
    nums += event.target.innerHTML;
    result.innerHTML = nums;
    if (event.target.innerHTML === "=") {
      nums = nums.slice(0, -1);
      nums = equals(nums);
      count=1;
    }
  });
}
