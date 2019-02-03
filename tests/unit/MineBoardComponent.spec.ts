import { shallowMount, mount } from '@vue/test-utils'
import MineBoard from '@/components/MineBoard.vue'
import BoardCell from '@/components/BoardCell.vue'
import { CellState } from '@/Cell'
import Board from '@/Board'

describe('MineBoard.vue', () => {
  const width = 8; const height = 12
  const board = new Board({ width, height })

  it('have width * height cells when passed', () => {
    const wrapper = shallowMount(MineBoard, {
      propsData: { width, height, board }
    })
    expect(wrapper.element.childElementCount).toEqual(width * height)
    expect((wrapper.vm.$children[0].constructor as any).options.name).toEqual('BoardCell')
  })

  describe('flagged cell', () => {
    const wrapper = mount(MineBoard, {
      propsData: { width, height, board }
    })
    const cells = wrapper.findAll(BoardCell)
    const cell = cells.at(2)

    it('flag cell when cell right-clicked', () => {
      cell.trigger('contextmenu') // click.right
      expect((cell.vm as any).state).toBe(CellState.FLAGGED)
    })

    it('don\'t open when flagged cell clicked', () => {
      cell.trigger('click')
      expect(cell.emitted().open).toBeFalsy()
    })
  })

  it('open cell when cell clicked', () => {
    const wrapper = mount(MineBoard, {
      propsData: { width, height, board }
    })
    wrapper.find(BoardCell).trigger('click')
    expect((wrapper.find(BoardCell).vm as any).state).toBe(CellState.OPEN)
  })
})
