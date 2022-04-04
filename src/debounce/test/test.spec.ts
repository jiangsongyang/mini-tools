import { debounce } from "../src";

describe("test", () => {
  // case one
  // base test
  it("happy path", (done) => {
    const fn = jest.fn(() => {
      expect(fn).toHaveBeenCalledTimes(1);
      done();
    });

    const debounced = debounce(fn, 100);

    for (let index = 0; index < 100; index++) {
      debounced();
      expect(fn).not.toHaveBeenCalled();
    }
  });
});
