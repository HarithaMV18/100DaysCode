var thirdMax = function(nums) {
  const sortedNums=nums.sort((a,b)=>b-a)
  const uniqNums=sortedNums.filter((items,index)=>sortedNums.indexOf(items)===index)
  return uniqNums.length>=3?uniqNums[2]:uniqNums[0]
    
};
console.log(thirdMax([3,3,4,3,4,3,0,3,3]))
