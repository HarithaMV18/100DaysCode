var slowestKey = function (releaseTimes, keysPressed) {
  let itemIndex = [];
  const result = releaseTimes.map((item, ind) => {
    return ind === 0
      ? item
      : Math.abs(releaseTimes[ind] - releaseTimes[ind - 1]);
  });
  for (let i in result) {
    let count = 0;
    for (let j in result) {
      if (i !== j && result[i] >= result[j]) {
        count++;
      }
    }
    if (count === result.length - 1) {
      itemIndex.push(keysPressed[i]);
    }
  }

  return itemIndex.sort()[itemIndex.length - 1];
};
console.log(slowestKey([12, 23, 36, 46, 62], "spuda"));
