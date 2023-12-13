var countPrefixes = function(words, s) {
const substringArr=s.split("")
const substringCombination=[]
substringArr.map((item,index)=>
substringCombination.push([substringCombination[index-1],substringArr[index]].join("")))
const filteredData=words.filter((item)=>substringCombination.includes(item))
return filteredData.length
};
console.log(countPrefixes(["a","a"],'aa'))
