var lengthOfLastWord = function(s) {
    let lastWord=s.trim();
    let index=0;    
    for(let i=lastWord.length-1;i>=0;i--){
        if(lastWord[i]===" "){
            index=i+1;
            break;
        }
      
    }
    return (lastWord.slice(index).length)
    
};
console.log(lengthOfLastWord("Hello World"))
