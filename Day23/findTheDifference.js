 var findTheDifference = function(s, t) {
 let sNew=s.split("").sort().join("");
 let tNew=t.split("").sort().join("");
for(let i=0;i<tNew.length;i++){
  if(tNew[i]!==sNew[i]){
     return tNew[i]
  }

 }

 };
 console.log(findTheDifference("abc","cbba"))
