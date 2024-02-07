var expect = function (val) {
  const toBe = (val1) => {
    if (val1 === val) {
      return true;
    } else {
        return ('Not Equal')
    }
  };
  const notToBe = (val1) => {
    if (val1 !== val) {
      return true;
    } else {
        return ('Equal')
    }
  };
  return { toBe, notToBe };
};
console.log(expect(5).toBe(null));
// console.log(expect(5).notToBe(6));
/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
