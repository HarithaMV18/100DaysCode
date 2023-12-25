var restoreString = function (s, indices) {
  indArr = {};
  let ind = 0;
  for (let i of indices) {
    indArr[i] = s[ind];
    ind++;
  }

  return Object.values(indArr).join("");
};
console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
