module.exports = function minimalPositiveInteger(A) {
  for (i = 1; i < A.length; i++) {
    if (!A.includes(i)) return i;
  }
};
