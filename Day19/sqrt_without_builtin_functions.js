var mySqrt = function(x) {
let count=0
    let sum=x;
for(let i=1;sum>=0;i+=2){
    sum=sum-i;
    count++
   

}
  count=count-1;
  return count;
    
};
console.log(mySqrt(25))
