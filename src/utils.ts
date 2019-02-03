/**
 * Fisher-Yates
 */
function shuffle<T> (a: T[]) {
  const n = a.length

  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
}

interface IArray2DWrapper<T> {
  get(x: number, y: number): T | null;
  set(x: number, y: number, val: T): void;
}

function wrap2D<T> (src: T[], w: number, h: number): IArray2DWrapper<T> {
  const invalid = (x: number, y: number) => (x < 0 || x >= w) || (y < 0 || y >= h)
  return {
    get: function (x: number, y: number): T | null {
      return invalid(x, y) ? null : src[y * w + x]
    },
    set: function (x: number, y: number, val: T) {
      if (!invalid(x, y)) { src[y * w + x] = val }
    }
  }
}

function cross<T> (a0: T[], a1: T[]): [T, T][] {
  // Array.flat is still proposal
  // return a0.map(v0 => a1.map(v1 => [v0, v1])).flat(1)
  const a: [T, T][] = []
  a0.forEach(v0 => a1.forEach(v1 => a.push([v0, v1])))
  return a
}

function seq (n: number): number[] {
  return Array.from(Array(n).keys())
}

export {
  shuffle,
  wrap2D,
  cross,
  seq
}
