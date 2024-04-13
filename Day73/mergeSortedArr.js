
var merge = function(nums1, m, nums2, n) {
  for(let i=0;i<n;i++){
    nums1[nums1.indexOf(0)]=nums2[i]
    
  }
  return nums1.sort((a,b)=>a-b)
    
};
console.log(merge([-10,1,2,3,0,0,0,-1],3,[2,5,6],3))
