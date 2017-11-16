const firstNonRepeatedCharacter = require("../lib/first-unique.js");

describe("firstNonRepeatedCharacter", () => {
  describe("first unique character", () => {
    it("should return d", () => {
      let unique = firstNonRepeatedCharacter("aaabbbcccd");
      expect(unique).toEqual("d");
    });
  });
  describe("remove white space", () => {
    it("should return d", () => {
      let unique = firstNonRepeatedCharacter(" a aabbcccd ");
      expect(unique).toEqual("d");
    });
  });
});
