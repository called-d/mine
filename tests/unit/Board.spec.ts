import Board from '@/Board'
import { CellState } from '@/Cell'

describe('Board.ts', () => {
  const size = { width: 6, height: 6 }

  const board6x6 = new Board(size)

  it('can get cell info', () => {
    let cellInfos = board6x6.cellInfos
    expect(cellInfos).toHaveLength(size.width * size.height)
    expect(cellInfos[0]).toHaveProperty('hasMine')
  })

  it('on start, all cells are close', () => {
    let cellInfos = board6x6.cellInfos
    expect(cellInfos.every(cell => cell.state === CellState.CLOSE)).toBeTruthy()
  })

  it('1st open always success', () => {
    let result = true
    for (let i = 0; i < 100; i++) {
      result = result && new Board(size).tryToOpen(0)
    }
    expect(result).toBeTruthy()
  })

  it('player can open', () => {
    expect(() => { board6x6.open(0) }).not.toThrow()
  })
})
