import { expect } from "@std/expect";
import { isInOrder, parseInput, solvePartA, solvePartB } from "./main.ts";
import { readInput } from "../../utils.ts";

const exampleStr = `47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13

75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47
`;

Deno.test("parse rules", () => {
  const [rules] = parseInput(exampleStr);
  expect(rules).toEqual(
    new Map([
      [29, [13]],
      [47, [53, 13, 61, 29]],
      [53, [29, 13]],
      [61, [13, 53, 29]],
      [75, [29, 53, 47, 61, 13]],
      [97, [13, 61, 47, 29, 53, 75]],
    ])
  );
});

Deno.test("parse page lists", () => {
  const [_, pageLists] = parseInput(exampleStr);
  expect(pageLists).toEqual([
    [75, 47, 61, 53, 29],
    [97, 61, 53, 29, 13],
    [75, 29, 13],
    [75, 97, 47, 61, 53],
    [61, 13, 29],
    [97, 13, 75, 29, 47],
  ]);
});

Deno.test("is in order", () => {
  const [rules] = parseInput(exampleStr);
  expect(isInOrder([75, 47, 61, 53, 29], rules)).toBeTruthy();
  expect(isInOrder([97, 61, 53, 29, 13], rules)).toBeTruthy();
  expect(isInOrder([75, 29, 13], rules)).toBeTruthy();

  expect(isInOrder([75, 97, 47, 61, 53], rules)).toBeFalsy();
  expect(isInOrder([61, 13, 29], rules)).toBeFalsy();
  expect(isInOrder([97, 13, 75, 29, 47], rules)).toBeFalsy();
});

Deno.test("solve Example A", () => {
  const [rules, pageLists] = parseInput(exampleStr);
  expect(solvePartA(rules, pageLists)).toEqual(143);
});
Deno.test("solve A", () => {
  const [rules, pageLists] = parseInput(readInput("2024/day5/input.txt"));
  expect(solvePartA(rules, pageLists)).toEqual(6951);
});

Deno.test("solve Example B", () => {
  const [rules, pageLists] = parseInput(exampleStr);
  expect(solvePartB(rules, pageLists)).toEqual(123);
});
Deno.test("solve B", () => {
  const [rules, pageLists] = parseInput(readInput("2024/day5/input.txt"));
  expect(solvePartB(rules, pageLists)).toEqual(4121);
});
