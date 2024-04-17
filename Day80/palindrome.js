var isPalindrome = function(s) {
   let strLowerCase=s.toLowerCase().split(/[^a-z]/).join("")
   let strRev=strLowerCase.split("").reverse().join("")
  
   return strLowerCase===strRev? true : false
    
};
console.log(isPalindrome("A man, a plan, a canal: Panama"))
