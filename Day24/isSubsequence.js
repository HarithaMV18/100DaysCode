var isSubsequence = function (s, t) {
 
  if (s === "") {
    return true;
  } else {
    for (let i = 0; i < s.length; i++) {
      if (s[i] === t[i]) {
        true
      } else {
        if (t.includes(s[i]) && t.length>=s.length) {
          t = t.replace(t[i], "");
          
          i--;
        } else {
          return false;
        }
      }
    }
    if (s === t || t.length===s.length+1) {
      return true;
    } else {

      return false;
    }
  }
};
console.log(isSubsequence("b", "abc"));



//another solution
var isSubsequence = function (s, t) {
  let currentIndex = -1;
  for (let i = 0; i < s.length; i++) {
    const target = t.indexOf(s[i], currentIndex + 1);
    console.log(t.indexOf(s[i], currentIndex + 1))
    if (target > currentIndex) {
      currentIndex = target;
    } else {
      return false;
    }
  }
  return true;
};
console.log(isSubsequence("aaa", "abacade"));
