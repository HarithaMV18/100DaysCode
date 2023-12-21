var commonChars = function (words) {
  let searchWord = words[0];
  let commonChar = [];

  for (let i of searchWord) {
    let count = 0;
    for (let j = 1; j < words.length; j++) {
      if (words[j].indexOf(i) !== -1) {
        words[j] = words[j].replace(i, "");
        count++;
      }
    }
    if (count === words.length - 1) {
      commonChar.push(i);
    }
  }

  return commonChar;
};
console.log(commonChars(["cool", "lock", "cook"]));
