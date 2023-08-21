var searchInsert = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        if(target === nums[i]){
            return i;
        }
    }
    nums.push(target);
    nums=nums.sort((a,b)=>{ return a-b})
    console.log(nums)
    return nums.indexOf(target)
    
};

console.log(searchInsert([1,3,5,6],10))
