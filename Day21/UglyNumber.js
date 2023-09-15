var isUgly = function(n) {
  let temp=n;
  if(temp===1){
    return true
  }
  else if(temp===0 || temp<0){
    return false
  }
  else{
    while(temp!==1){
      if(temp%2===0){
        temp=Math.trunc(temp/2)
      }
    else  if(temp%3===0){
      temp=Math.trunc(temp/3)
      }
    else  if(temp%5===0){
      temp=Math.trunc(temp/5)
      }
      else{
        return false;
      }
    }
    return true;

  }
};
console.log(isUgly(13));
