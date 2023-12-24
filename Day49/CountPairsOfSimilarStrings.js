var similarPairs = function (words) {
  const elementCounts = {};
  let filteredArr = words.map((item) => {
    let arr = item.split("");
    return arr
      .filter((item, ind) => arr.indexOf(item) === ind)
      .sort()
      .join("");
  });
  filteredArr.forEach((item) => {
    elementCounts[item] = (elementCounts[item] || 0) + 1;
  });
  function myFunc(total, num) {
    return total + Math.round(((num - 1) * num) / 2);
  }
  let count = Object.values(elementCounts).reduce(myFunc, 0);

  return count;
};
console.log(similarPairs(["aabb", "ab", "ba"]));
