const pollMagnificent = require("../poll");

describe("pollMagnificent", () => {
  jest.useFakeTimers();

  it("waits 1 second before making request to magnificent service", () => {
    pollMagnificent("http:xxz.false.com", 1000);
    expect(setTimeout).toHaveBeenCalledTimes(1);
  });
});
