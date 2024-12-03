import { sum } from "@es-toolkit/es-toolkit";

export function parseLineA(line: string): number[][] {
  const re = /mul\((\d{1,3}),(\d{1,3})\)/g;
  const matches = line.matchAll(re);

  return [...matches].map((m) => [parseInt(m[1]), parseInt(m[2])]);
}

export function solve(
  input: string,
  parseFn: (input: string) => number[][]
): number {
  return sum(parseFn(input).map(([a, b]) => a * b));
}

export function parseLineB(line: string): number[][] {
  const re = /mul\((\d{1,3}),(\d{1,3})\)|do\(\)|don't\(\)/g;
  const matches = line.matchAll(re);

  let enabled = true;
  return [...matches].flatMap((m) => {
    if (m[0] === "don't()") {
      enabled = false;
    } else if (m[0] === "do()") {
      enabled = true;
    } else if (enabled) {
      return [[parseInt(m[1]), parseInt(m[2])]];
    }
    return [];
  });
}
