import Cell, { CellState, ICellInfo } from '@/Cell'
import { mines } from '@/config'
import { cross, seq, shuffle, wrap2D } from '@/utils'

interface IBoardSize {
  width: number,
  height: number
}

class Board {
  public readonly width: number;
  public readonly height: number;

  get cellInfos (): ICellInfo[] {
    return this.cellStates.map((state, i) => ({
      state,
      mineCount: this.cells ? this.cells[i].mineCount : 0,
      hasMine: this.cells && this.cells[i].hasMine
    }))
  }

  private readonly cellStates: CellState[];
  private cells!: Cell[];
  private readonly neighbors8 = cross([-1, 0, 1], [-1, 0, 1])
    .filter((c: number[]) => c[0] || c[1]);

  constructor (size: IBoardSize) {
    this.width = size.width
    this.height = size.height
    this.cellStates = Array(this.width * this.height).fill(CellState.CLOSE)
  }

  public tryToOpen (pos: number): boolean {
    if (!this.cells) { return true }

    return !this.cells[pos].hasMine
  }

  public open (pos: number): ICellInfo[] {
    if (!this.cells) {
      this.cells = this.generate(pos)
    }

    console.log(`open(): ${pos % this.width} ${Math.floor(pos / this.width)}`)
    this.openCells(pos % this.width, Math.floor(pos / this.width))
    return this.cellInfos
  }

  private openCells (x: number, y: number) {
    const cells = wrap2D(this.cells, this.width, this.height)
    const states = wrap2D(this.cellStates, this.width, this.height)
    const nextCoords = this.neighbors8.map(o => [x + o[0], y + o[1]])

    const cell = cells.get(x, y)
    const state = states.get(x, y)

    if (cell === null || state === null) { return }
    if (cell.hasMine) { return }
    if (state === CellState.OPEN) { return }

    console.log(`openCells: ${x} ${y}`)
    states.set(x, y, CellState.OPEN)
    if (!cell.mineCount) {
      nextCoords.forEach(c => this.openCells(c[0], c[1]))
    }
  }

  private generate (openPos: number): Cell[] {
    const n = this.width * this.height
    const mineNums = mines({ width: this.width, height: this.height })

    const hasMine: boolean[] = new Array(n - 1)
      .fill(true, 0, mineNums)
      .fill(false, mineNums)
    shuffle(hasMine)
    hasMine.splice(openPos, 0, false)
    const hasMine2d = wrap2D(hasMine, this.width, this.height)
    const coords = cross(seq(this.height), seq(this.width))

    return coords.map((c: number[]) => {
      const [y, x] = c
      const nextMines = this.neighbors8
        .filter(o => hasMine2d.get(x + o[0], y + o[1]))
        .length
      return new Cell(hasMine2d.get(x, y)!, nextMines)
    })
  }

  toggleState (pos: number): ICellInfo[] {
    const state = this.cellStates[pos]
    switch (state) {
      case CellState.CLOSE: this.cellStates[pos] = CellState.FLAGGED; break
      case CellState.FLAGGED: this.cellStates[pos] = CellState.QUESTION_MARKED; break
      case CellState.QUESTION_MARKED: this.cellStates[pos] = CellState.CLOSE; break
      default: break
    }
    return this.cellInfos
  }
}

export {
  IBoardSize
}

export default Board
