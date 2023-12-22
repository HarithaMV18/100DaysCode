var countMatches = function (items, ruleKey, ruleValue) {
  const obj = {
    type: 0,
    color: 1,
    name: 2,
  };

  let count = 0;
  for (let i = 0; i < items.length; i++) {
    items[i].slice(obj[ruleKey], obj[ruleKey] + 1).join("") === ruleValue
      ? count++
      : "";
  }
  return count;
};
console.log(
  countMatches(
    [
      ["qqqq", "qqqq", "qqqq"],
      ["qqqq", "qqqq", "qqqq"],
      ["qqqq", "qqqq", "qqqq"],
      ["qqqq", "qqqq", "qqqq"],
      ["qqqq", "qqqq", "qqqq"],
      ["qqqq", "qqqq", "qqqq"],
      ["qqqq", "qqqq", "qqqq"],
    ],
    "color",
    "qqqq"
  )
);
