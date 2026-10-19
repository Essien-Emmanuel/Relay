import { sum } from "../src";
import { test, expect } from "@jest/globals";

test("sum of the list [1,2,3,4,5,6] to total 6", () => {
  expect(sum([1, 2, 3, 4, 5, 6])).toBe(21);
});
