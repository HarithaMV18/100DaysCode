var shortestToChar = function(s, c) {
  const stringArr=s.split("");
  const charIndexes=[]
  const result=[]
  let ind=0;
  for(let i in stringArr){
    if(c===stringArr[i]){
      charIndexes.push(i)
    }
  }
  while(ind<stringArr.length){
    const diff=charIndexes.map((item,index)=>Math.abs(ind-item))
    result.push(diff.sort((a,b)=>a-b)[0])
    ind++
  }
return (result)

    
};
console.log(shortestToChar("aaab","b"))
