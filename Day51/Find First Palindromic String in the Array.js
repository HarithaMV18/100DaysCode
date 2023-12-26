var firstPalindrome = function (words) {
  let palindrome = words.filter((item) => {
    let word = "";
    let itemLength = item.length - 1;
    if (item[0] === item[itemLength]) {
      for (let i in item) {
        word += item[itemLength - i];
      }
    }
    if (word === item) {
      return item;
    }
  });
  return palindrome[0] ? palindrome[0] : "";
};
console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));
