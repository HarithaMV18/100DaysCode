var isIsomorphic = function(s, t) {
    let replacedString=s.split("");
let obj={};
if(s.length===t.length){
    for(let i=0;i<s.length;i++){
        if(!(s[i] in obj)){
            obj[s[i]]=Object.values(obj).includes(t[i])?s[i].toUpperCase():t[i];
        }
    }   
    for(let i=0;i<s.length;i++){
        replacedString[i]=obj[s[i]]   
    }
    
    if(replacedString.join("")===t){
        return true
    }  
    else{
        return false
    }
}
else{
    return false;
}
};

console.log(isIsomorphic("badc","baba"))
