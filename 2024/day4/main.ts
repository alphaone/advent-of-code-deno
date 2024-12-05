type Coord = {
  l: number;
  r: number;
};

export function allPos(grid: string[], lookingFor: string): Coord[] {
  return grid.reduce(
    (acc, line, l) =>
      [...line].reduce((_, char, r) => {
        if (char === lookingFor) acc.push({ l, r });

        return acc;
      }, acc),
    [] as Coord[]
  );
}

export function charAtCoord(grid: string[], pos: Coord): string {
  if (
    pos.l < 0 ||
    pos.l >= grid.length ||
    pos.r < 0 ||
    pos.r >= grid[0].length
  ) {
    return " ";
  }

  return grid[pos.l][pos.r];
}

export function wordInDir(
  grid: string[],
  pos: Coord,
  dir: Coord,
  length: number
): string {
  return Array.from({ length })
    .map(() => {
      pos = add(pos, dir);
      return charAtCoord(grid, pos);
    })
    .join("");
}

function add(pos: Coord, dir: Coord): Coord {
  return { l: pos.l + dir.l, r: pos.r + dir.r };
}

export function countMas(grid: string[], pos: Coord): number {
  const allDirs = [
    { l: -1, r: -1 },
    { l: -1, r: 0 },
    { l: -1, r: 1 },
    { l: 0, r: -1 },
    { l: 0, r: 1 },
    { l: 1, r: -1 },
    { l: 1, r: 0 },
    { l: 1, r: 1 },
  ];

  return allDirs.reduce(
    (acc, cur) => (wordInDir(grid, pos, cur, 3) === "MAS" ? acc + 1 : acc),
    0
  );
}

export function isCross(grid: string[], pos: Coord): boolean {
  const ul = charAtCoord(grid, add(pos, { l: -1, r: -1 }));
  const ur = charAtCoord(grid, add(pos, { l: -1, r: 1 }));
  const ll = charAtCoord(grid, add(pos, { l: 1, r: -1 }));
  const lr = charAtCoord(grid, add(pos, { l: 1, r: 1 }));
  return (
    ((ul == "M" && lr == "S") || (ul == "S" && lr == "M")) &&
    ((ur == "M" && ll == "S") || (ur == "S" && ll == "M"))
  );
}

export function solvePartA(grid: string[]): number {
  return allPos(grid, "X").reduce((acc, pos) => acc + countMas(grid, pos), 0);
}

export function solvePartB(grid: string[]): number {
  return allPos(grid, "A").reduce(
    (acc, pos) => (isCross(grid, pos) ? acc + 1 : acc),
    0
  );
}
