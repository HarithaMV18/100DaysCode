var detectCapitalUse = function (word) {
  const regExp = new RegExp(
    /^[A-Z][a-z]*[a-z]*$|^[a-z]*[a-z]*$|^[A-Z]*[A-Z]*$/
  );
  return regExp.test(word);
};

console.log(detectCapitalUse("usa"));
