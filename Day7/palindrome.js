function palindrome(x){
    let temp=x;
    let rev=0;
    
    while(temp>=1){
        let quo=Math.trunc(temp/10);
        let rem=Math.trunc(temp%10);
        rev=Math.trunc((rev*10)+rem);  
         
        temp=quo
    }
    if(rev===x){
        return true
    }
    else{
        return false
    }
   
  
    

}
console.log(palindrome(1999999991));
