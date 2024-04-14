var rotate = function(nums, k) {
let temp=nums.length-k

if(Math.abs(temp)>nums.length){
    temp=-1
}
let rem=nums.splice(temp)
nums.unshift(...rem)
  
  console.log(nums)
   
    
};
console.log(rotate([1,2],5))
