import { expect } from "@std/expect";
import { parseLineA, parseLineB, solve } from "./main.ts";
import { readInput } from "../../utils.ts";

const exampleA =
  "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";

Deno.test("parseLineA", () => {
  expect(parseLineA(exampleA)).toEqual([
    [2, 4],
    [5, 5],
    [11, 8],
    [8, 5],
  ]);
});

Deno.test("solve example A", () => {
  expect(solve(exampleA, parseLineA)).toEqual(161);
});
Deno.test("solve A", () => {
  expect(solve(readInput("2024/day3/input.txt"), parseLineA)).toEqual(
    175015740
  );
});

const exampleB =
  "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";

Deno.test("parseLineB", () => {
  expect(parseLineB(exampleB)).toEqual([
    [2, 4],
    [8, 5],
  ]);
});

Deno.test("solve example B", () => {
  expect(solve(exampleB, parseLineB)).toEqual(48);
});
Deno.test("solve B", () => {
  expect(solve(readInput("2024/day3/input.txt"), parseLineB)).toEqual(
    112272912
  );
});
