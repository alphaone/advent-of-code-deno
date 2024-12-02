import { zip } from "@es-toolkit/es-toolkit";

export function solvePartA(reports: number[][]): number {
  return reports.filter((r) => isSafe(r)).length;
}
export function solvePartB(reports: number[][]): number {
  return reports.filter((r) => damp(r).some((dr) => isSafe(dr))).length;
}

export function isSafe(report: number[]): boolean {
  return isIncrementing(report) || isDecrementing(report);
}

export function isIncrementing(report: number[]): boolean {
  return zip(report.slice(0, -1), report.slice(1)).every(
    ([x, y]) => y - x > 0 && y - x <= 3
  );
}
export function isDecrementing(report: number[]): boolean {
  return zip(report.slice(0, -1), report.slice(1)).every(
    ([x, y]) => x - y > 0 && x - y <= 3
  );
}

export function damp(r: number[]): number[][] {
  return Array.from({ length: r.length }).map((_, i) => {
    return r.slice(0, i).concat(r.slice(i + 1));
  });
}
