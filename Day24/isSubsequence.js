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
