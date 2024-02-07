var isPrefixString = function (s, words) {
  let concatWord = "";
for(let i of words){
    concatWord=concatWord+i
    if(concatWord===s){
        return true
    }
}

return false

};
console.log(
  isPrefixString("iloveleetcode", ["apples","i","love","leetcode"])
);
