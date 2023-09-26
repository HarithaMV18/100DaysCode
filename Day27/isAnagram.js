var isAnagram = function(s, t) {
  let tarr=t.split("")
  if(s.length===t.length){
    for(let i=0;i<s.length;i++){
      if(!tarr.includes(s[i])){
        return false
    
      }
      else{
        tarr[tarr.indexOf(s[i])]=""
      }
    }
   if(tarr.join("")===""){
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
console.log(isAnagram("car","rat"))
