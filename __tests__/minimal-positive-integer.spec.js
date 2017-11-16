const minimalPositiveInteger = require("../lib/minimal-positive-integer.js");

describe("minimalPositiveInteger", () => {
  describe("first positive integer not in array", () => {
    it("should return 9", () => {
      const integer = minimalPositiveInteger([1, 3, 6, 4, 1, 2, 5, 7, 8, 4]);
      expect(integer).toEqual(9);
    });
  });
});
