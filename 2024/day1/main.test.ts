import { expect } from "@std/expect";
import { readColNumberInput } from "../../utils.ts";
import { solvePartA, solvePartB } from "./main.ts";

Deno.test("solve example part 1", () => {
  const input: number[][] = [
    [3, 4, 2, 1, 3, 3],
    [4, 3, 5, 3, 9, 3],
  ];
  expect(solvePartA(input)).toEqual(11);
});

Deno.test("solve part 1", () => {
  const input = readColNumberInput("2024/day1/input.txt");
  expect(solvePartA(input)).toEqual(1580061);
});

Deno.test("solve example part 2", () => {
  const input: number[][] = [
    [3, 4, 2, 1, 3, 3],
    [4, 3, 5, 3, 9, 3],
  ];
  expect(solvePartB(input)).toEqual(31);
});

Deno.test("solve part 2", () => {
  const input = readColNumberInput("2024/day1/input.txt");
  expect(solvePartB(input)).toEqual(23046913);
});
