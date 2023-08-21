var singleNumber = function(nums) {
    let count=0;
    let index=0;
    let i=1;
    let uniqueNumber;
    nums=nums.sort((a,b)=>{
        return a-b;
    })
while(index<nums.length){
    if(nums[index]===nums[i]){
       
        count++;
        i++;
    }
    else{
        if(count===0){
            uniqueNumber=nums[index];
        }

        index=i;
        i++;
        count=0;

    }

}
return uniqueNumber
    
};
console.log(singleNumber([1,2,3,3,2,4,4,5]));
// [1, 1, 1, 2, 2, 3, 4, 4]
