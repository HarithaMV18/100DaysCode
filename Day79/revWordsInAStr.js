var reverseWords = function(s) {
    let strSplit=s.split(" ")
    let revStr=[]
    for(let i=strSplit.length-1;i>=0;i--){
        if(strSplit[i]!==""){
            revStr.push(strSplit[i])
         

        }
        

    }
    return revStr.join(" ")
    
};
console.log(reverseWords("  hello world  "))
