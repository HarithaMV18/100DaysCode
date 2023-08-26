var containsDuplicate = function(nums) {
    let count=0;
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]===nums[j]){
                i=nums.length-1;
                count++;
                break;
                
            }
        }
    }
    if(count!==0){
        return true;
    }
    else{
        return false;
    }

    
};
console.log(containsDuplicate([1,1,2,3,1]))
