import { expect } from "@std/expect";
import {
  allPos,
  charAtCoord,
  countMas,
  solvePartA,
  solvePartB,
  wordInDir,
} from "./main.ts";
import { readInputLines } from "../../utils.ts";

const example = [
  "MMMSXXMASM",
  "MSAMXMSMSA",
  "AMXSXMAAMM",
  "MSAMASMSMX",
  "XMASAMXAMM",
  "XXAMMXXAMA",
  "SMSMSASXSS",
  "SAXAMASAAA",
  "MAMMMXMMMM",
  "MXMXAXMASX",
];

Deno.test("find all X's", () => {
  expect(allPos(example, "X").slice(0, 3)).toEqual([
    { l: 0, r: 4 },
    { l: 0, r: 5 },
    { l: 1, r: 4 },
  ]);
});

Deno.test("char at coord", () => {
  expect(charAtCoord(example, { l: 0, r: 4 })).toEqual("X");
  expect(charAtCoord(example, { l: -1, r: 4 })).toEqual(" ");
});

Deno.test("word in direction", () => {
  const val = wordInDir(example, { l: 0, r: 4 }, { l: 1, r: 1 }, 3);
  expect(val).toEqual("MAS");
});

Deno.test("count 'MAS'", () => {
  expect(countMas(example, { l: 0, r: 3 })).toEqual(0);
  expect(countMas(example, { l: 0, r: 4 })).toEqual(1);
  expect(countMas(example, { l: 0, r: 5 })).toEqual(1);
  expect(countMas(example, { l: 4, r: 6 })).toEqual(2);
});

Deno.test("solve example A", () => {
  expect(solvePartA(example)).toEqual(18);
});
Deno.test("solve A", () => {
  expect(solvePartA(readInputLines("2024/day4/input.txt"))).toEqual(2504);
});

Deno.test("solve example B", () => {
  expect(solvePartB(example)).toEqual(9);
});
Deno.test("solve B", () => {
  expect(solvePartB(readInputLines("2024/day4/input.txt"))).toEqual(1923);
});
