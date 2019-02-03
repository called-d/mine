import { IBoardSize } from '@/Board'

interface IBoardSizeItem {
  name: string,
  size: IBoardSize,
}

const boardSize: IBoardSizeItem[] = [
  { name: '6x6', size: { width: 6, height: 6 } },
  { name: '12x20', size: { width: 20, height: 12 } },
  { name: 'Very Large', size: { width: 64, height: 64 } }
]

function mines (size: IBoardSize): number {
  return Math.ceil(size.width * size.height / 5)
}

export {
  IBoardSizeItem,
  boardSize,
  mines
}
