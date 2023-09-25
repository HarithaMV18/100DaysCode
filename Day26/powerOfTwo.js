var isPowerOfTwo = function(n) {
  let quo=n;
while(quo!==2 && quo>2){
  quo=n/2;
  n=quo;
}
if(quo===2 || quo ===1){
  return true
}
else{

  return false
}

    
};
console.log(isPowerOfTwo(3))
