enum CellState {
  CLOSE = 'close',
  FLAGGED = 'flagged',
  QUESTION_MARKED = '?',
  OPEN = 'open',
  GHOST = 'ghost',
}

interface ICellInfo {
  state: CellState;
  readonly hasMine: boolean;
  readonly mineCount: number;
}

class Cell {
  constructor (
    readonly hasMine: boolean,
    readonly mineCount: number
  ) {
    this.hasMine = hasMine
    this.mineCount = mineCount
  }
}

export {
  CellState,
  ICellInfo
}

export default Cell
