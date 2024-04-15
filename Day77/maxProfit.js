var maxProfit = function(prices) {
    let max=0;
    let buy=prices[0]
    for(let i=1;i<prices.length;i++){
       if(prices[i]<buy){
        buy=prices[i]
       }
       else if(prices[i]-buy>max){
        max=prices[i]-buy

       }
               
            
        
    }
    return max
};
console.log(maxProfit([7,2,1,5,3,6,4]))
