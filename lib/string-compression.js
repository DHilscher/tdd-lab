module.exports = function stringCompression(str) {
  let result = str.charAt(0);
  let count = 1;
  if (str.length === 1) {
    result += count;
    return result;
  } else {
    for (let i = 1; i < str.length; i++) {
      if (str.charAt(i) !== str.charAt(i - 1)) {
        result += count + str.charAt(i);
        count = 1;
      } else {
        count++;
      }
      if (i === str.length - 1) {
        result += count;
      }
    }
    return result;
  }
};
