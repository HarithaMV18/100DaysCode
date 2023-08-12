function sum(nums,target){
    let arr_length=nums.length;
    let result=[];
    for(let i=0;i<arr_length;i++){
        for(let j=i+1;j<arr_length;j++){
            if(nums[i]+nums[j]===target){
                result.push(i,j);
                return result;
                

            }
        }
    }
    


}
console.log(sum([1,2,3,4,-1],3));
