export function readInput(filename: string): string[] {
  const decoder = new TextDecoder("utf-8");
  const data = Deno.readFileSync(filename);
  return decoder.decode(data).split(/\n/);
}

export function readNumberInput(filename: string): number[] {
  return readInput(filename).map((l) => parseInt(l));
}

export function readTwoColNumberInput(filename: string): [number[], number[]] {
  const col1: number[] = [];
  const col2: number[] = [];
  readInput(filename).forEach((l) => {
    if (l.trim() === "") return;
    const [a, b] = l.split(/\s+/, 2);

    col1.push(parseInt(a));
    col2.push(parseInt(b));
  });

  return [col1, col2];
}
