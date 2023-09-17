var firstUniqChar = function(s) {
  for(let i=0;i<s.length;i++){
    if(s.indexOf(s[i])===s.lastIndexOf(s[i])){
      return i;
    }
  }
  return -1;
}
console.log(firstUniqChar("aabb"))

// or
// var firstUniqChar = function (s) {
//   let arr = s.split("");
//   for (let i = 0; i < arr.length; i++) {
//     let count = 0;
//     if (arr[i] === "_") {
//       continue;
//     } else {
//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] === arr[j]) {
//           arr[j] = "_";
//           count++;
        
//         }
//       }
//       if (count === 0) {
//         return i;
//       } else {
//         arr[i] = "_";
//       }
     
//     }
    

  
//   }
//   if(!arr.includes(/[a-z]/)){
//     return -1

//   }
  
// };
// console.log(firstUniqChar("aabbab"));
