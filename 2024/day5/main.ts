import { zip } from "@es-toolkit/es-toolkit";

type Rules = Map<number, number[]>;

export function parseInput(input: string): [Rules, number[][]] {
  const parts = input.split("\n\n");
  return [parseRules(parts[0]), parsePageLists(parts[1])];
}

export function parseRules(input: string): Rules {
  return input.split("\n").reduce((acc, line) => {
    const [a, b] = line.split("|").map((s) => parseInt(s));
    return acc.set(a, [...(acc.get(a) ?? []), b]);
  }, new Map());
}
export function parsePageLists(input: string): number[][] {
  return input
    .trim()
    .split("\n")
    .map((line) => line.split(",").map((s) => parseInt(s)));
}

export function isInOrder(pageList: number[], rules: Rules): boolean {
  return isEqual(pageList, sortByRules(pageList, rules));
}

export function sortByRules(pageList: number[], rules: Rules): number[] {
  return pageList.toSorted((a, b) => (rules.get(a)?.includes(b) ? -1 : 0));
}

function isEqual<T>(a: T[], b: T[]): boolean {
  return zip(a, b).every(([a, b]) => a === b);
}

export function solvePartA(rules: Rules, pageLists: number[][]): number {
  return pageLists
    .filter((pl) => isInOrder(pl, rules))
    .reduce((acc, cur) => acc + middle(cur), 0);
}
export function solvePartB(rules: Rules, pageLists: number[][]): number {
  return pageLists
    .filter((pl) => !isInOrder(pl, rules))
    .map((pl) => sortByRules(pl, rules))
    .reduce((acc, cur) => acc + middle(cur), 0);
}

function middle<T>(list: T[]): T {
  return list[Math.floor(list.length / 2)];
}
