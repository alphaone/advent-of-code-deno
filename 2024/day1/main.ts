export function solvePartA([col1, col2]: [number[], number[]]): number {
  col1.sort();
  col2.sort();

  return col1.reduce((acc, cur, i) => acc + Math.abs(cur - col2[i]), 0);
}

export function solvePartB([col1, col2]: [number[], number[]]): number {
  const freqs = col2.reduce(
    (acc, e) => acc.set(e, (acc.get(e) || 0) + 1),
    new Map()
  );

  return col1.reduce((acc, cur) => acc + cur * (freqs.get(cur) ?? 0), 0);
}
