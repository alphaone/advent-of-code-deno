export function readInput(filename: string): string[] {
  const decoder = new TextDecoder("utf-8");
  const data = Deno.readFileSync(filename);
  return decoder.decode(data).split(/\n/);
}

export function readNumberInput(filename: string): number[] {
  return readInput(filename).map((l) => parseInt(l));
}

export function readColNumberInput(filename: string): number[][] {
  const cols: number[][] = [];
  readInput(filename).forEach((l) => {
    if (l.trim() === "") return;
    const stringNumbers = l.split(/\s+/);
    stringNumbers.forEach((x, i) => {
      if (!cols[i]) cols[i] = [];

      return cols[i].push(parseInt(x));
    });
  });

  return cols;
}

export function readRowNumberInput(filename: string): number[][] {
  const cols: number[][] = [];
  readInput(filename).forEach((l) => {
    if (l.trim() === "") return;
    const stringNumbers = l.split(/\s+/);

    cols.push(stringNumbers.map((s) => parseInt(s)));
  });

  return cols;
}
