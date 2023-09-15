var addDigits = function (num) {
  

   if(num>0){
    let quo = 0;
    let add = 0;
    let r = 0;
    let temp = num;
    while (temp > 0) {
      quo = Math.trunc(temp / 10);

      r = temp % 10;
      add = add + r;
      temp = quo;
    }
    return add<10?add:addDigits(add);
   }
   else{
    return 0;
   }

  


};
console.log(addDigits(0));
