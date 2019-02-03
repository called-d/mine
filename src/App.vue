<template>
  <div id="app">
    <header>
      <ConfigBar @change="onChangeBoardSize" @start="initBoard"></ConfigBar>
    </header>
    <div class="board-wrapper">
      <MineBoardPreview
          v-if="!board"
          :width="width" :height="height"
          @open="realizeGhostBoard"></MineBoardPreview>
      <MineBoard ref="mineBoard"
          v-if="board" :board="board"
          :width="board.width" :height="board.height"
          :lose="lose"
          @over="onGameEnd"></MineBoard>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MineBoard from '@/components/MineBoard.vue'
import ConfigBar from '@/components/ConfigBar.vue'
import Board, { IBoardSize } from '@/Board'
import MineBoardPreview from '@/components/MineBoardPreview.vue'

@Component({
  components: {
    MineBoard,
    MineBoardPreview,
    ConfigBar
  }
})
export default class App extends Vue {
  board?: Board | null = null;
  width: number = 0;
  height: number = 0;
  lose: boolean = false;

  onChangeBoardSize (size: IBoardSize) {
    console.log('onChangeBoardSize', size)
    this.width = size.width
    this.height = size.height
  }

  initBoard (size: IBoardSize) {
    console.log('initBoard(); size: ', size)
    this.lose = false

    // reset board
    this.board = null
    this.$nextTick(() => { this.board = new Board(size) })
  }

  realizeGhostBoard (pos: number) {
    console.log('realizeGhostBoard')
    this.initBoard({ width: this.width, height: this.height })
  }

  onGameEnd (win: boolean, pos: number) {
    console.log(win)
    if (!win) {
      this.lose = true
      this.board!.openAllForGameOver();

      ((this.$refs as any).mineBoard as MineBoard).update()
    }
  }
}
</script>

<style>
.board-wrapper {
  overflow: scroll;
  margin-top: 2em;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
