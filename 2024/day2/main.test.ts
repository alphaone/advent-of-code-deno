import { expect } from "@std/expect";
import {
  damp,
  isDecrementing,
  isIncrementing,
  solvePartA,
  solvePartB,
} from "./main.ts";
import { readRowNumberInput } from "../../utils.ts";

const example = [
  [7, 6, 4, 2, 1],
  [1, 2, 7, 8, 9],
  [9, 7, 6, 2, 1],
  [1, 3, 2, 4, 5],
  [8, 6, 4, 4, 1],
  [1, 3, 6, 7, 9],
];

Deno.test("solve example part 1", () => {
  expect(solvePartA(example)).toEqual(2);
});
Deno.test("solve part 1", () => {
  expect(solvePartA(readRowNumberInput("2024/day2/input.txt"))).toEqual(356);
});

Deno.test("solve example part 2", () => {
  expect(solvePartB(example)).toEqual(4);
});
Deno.test("solve part 2", () => {
  expect(solvePartB(readRowNumberInput("2024/day2/input.txt"))).toEqual(413);
});

Deno.test("incrementing", () => {
  expect(isIncrementing([1, 2, 3])).toEqual(true);
  expect(isIncrementing([1, 2, 6])).toEqual(false);
  expect(isIncrementing([1, 2, 2])).toEqual(false);
});
Deno.test("decrementing", () => {
  expect(isDecrementing([3, 2, 1])).toEqual(true);
  expect(isDecrementing([6, 2, 1])).toEqual(false);
  expect(isDecrementing([2, 2, 1])).toEqual(false);
});

Deno.test("damp", () => {
  expect(damp([1, 2, 3, 4])).toEqual([
    [2, 3, 4],
    [1, 3, 4],
    [1, 2, 4],
    [1, 2, 3],
  ]);
});
