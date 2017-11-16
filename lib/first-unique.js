module.exports = function firstNonRepeatedCharacter(string) {
  string = string.replace(" ", "");
  for (let i = 0; i < string.length; i++) {
    let currentLetter = string.charAt(i);
    if (
      string.indexOf(currentLetter) === i &&
      string.indexOf(currentLetter, i + 1) === -1
    ) {
      return currentLetter;
    }
  }
  return null;
};
