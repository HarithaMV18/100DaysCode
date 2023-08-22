var isHappy = function(n) {
    let temp=n;
    let result=0;

    function square(temp){
        result=0;
        while(temp>0){     
            quo=Math.trunc(temp/10);
            temp=Math.trunc(temp%10);
            result=result+(temp * temp);
            temp=quo;  
        }
        return result===1 || result===4 ? result :square(result)
    
}
let sq=square(temp);
if(sq===1){
    return true;
}
else{
    return false
}



};
console.log(isHappy(2))
