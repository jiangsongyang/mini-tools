import { toString } from "../src";

describe("test", () => {
  // case one
  // base test
  it("happy path", () => {
    expect(toString("")).toBe("");
    expect(toString(1)).toBe("1");
    expect(toString(true)).toBe("true");
    expect(toString(null)).toBe("null");
    expect(toString(undefined)).toBe("undefined");
    expect(toString(["1", "2"])).toBe("1,2");
    expect(toString({ a: 1 })).toBe('{"a":1}');
  });
});
