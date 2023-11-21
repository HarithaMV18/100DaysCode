var reverseVowels = function(s) {
    const vowels=['a','e','i','o','u','A','E','I','O','U'];
    let i=0
    let string=s.split("")
    let sReverse=s.split("").reverse();
    let reverseVowels= sReverse.filter((letter)=> vowels.includes(letter))
    string.forEach((item,index)=>{
        if(vowels.includes(item)){
            string[index]=reverseVowels[i]
            i++;
           
        }

    })
    return(string.join(""))

    
    
};
console.log(reverseVowels('leEtcode'))
