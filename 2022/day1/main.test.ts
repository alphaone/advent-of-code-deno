import { maxBy } from "@es-toolkit/es-toolkit";
import { expect } from "@std/expect";
import { readNumberInput } from "../../utils.ts";
import { split, sumByElf } from "./main.ts";

Deno.test("solve part 1", async () => {
  const input = readNumberInput("2022/day1/input.txt");
  expect(maxBy(sumByElf(input), (x: number) => x)).toEqual(70296);
});

Deno.test("solve part 2", async () => {
  const input = readNumberInput("2022/day1/input.txt");
  expect(
    sumByElf(input)
      .sort((a, b) => b - a)
      .slice(0, 3)
      .reduce((acc, cur) => acc + cur, 0)
  ).toEqual(205381);
});

Deno.test("sum by elf", async () => {
  const input = [
    1000,
    2000,
    3000,
    NaN,
    4000,
    NaN,
    5000,
    6000,
    NaN,
    7000,
    8000,
    9000,
    NaN,
    10000,
  ];
  expect(sumByElf(input)).toEqual([6_000, 4_000, 11_000, 24_000, 10_000]);
});

Deno.test("splits an array on `undefined`", async () => {
  expect(split([1, undefined, 2, 3, undefined, 4, 5, 6, undefined, 7])).toEqual(
    [[1], [2, 3], [4, 5, 6], [7]]
  );
});
