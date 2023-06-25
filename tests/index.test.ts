import { add } from "../src/lib/add";

describe("testing index file", () => {
  test("empty string should result in zero", () => {
    expect(add("")).toBe(0);
  });
});
