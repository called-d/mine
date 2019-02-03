<template>
  <div class="mine-board" :style="boardStyle">
    <BoardCell v-for="i in width * height" :key="i"
               :info="cellInfos[i-1]"
               @toggle="toggleState(i-1)"
               @open="openCell(i-1)"
               @click.right.prevent>

    </BoardCell>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import BoardCell from '@/components/BoardCell.vue'
import { ICellInfo } from '@/Cell'
import Board from '@/Board'

@Component({
  name: 'MineBoard',
  components: { BoardCell }
})

export default class MineBoard extends Vue {
  @Prop()
  width!: number;

  @Prop()
  height!: number;

  @Prop()
  board!: Board;

  cellInfos: ICellInfo[] = this.board.cellInfos;

  get boardStyle (): string {
    return `grid-template-columns: repeat(${this.width}, 1fr)`
  }

  toggleState (pos: number) {
    this.cellInfos = this.board.toggleState(pos)
  }

  openCell (pos: number) {
    console.log(pos)
    if (this.board.tryToOpen(pos)) {
      this.cellInfos = this.board.open(pos)
    } else {
      this.$emit('over', false)
    }
  }
}
</script>

<style>
  .mine-board {
    font-family: 'x8y12pxTheStrongGamer', sans-serif;
    display: inline-grid;
    column-gap: 10px;
    row-gap: 10px;
    padding: 10px;
    border: 2px solid gray;
  }
  @media (max-width: 600px) {
    .mine-board {
      column-gap: 3px;
      row-gap: 3px;
      padding: 3px;
    }
  }
  @media (max-width: 430px) {
    .mine-board {
      column-gap: 1px;
      row-gap: 1px;
      padding: 1px;
    }
  }
</style>
