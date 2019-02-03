<template>
  <div id="app">
    <header>
      <ConfigBar @change="onChangeBoardSize" @start="initBoard"></ConfigBar>
      <div class="board-wrapper">
        <MineBoardPreview
            v-if="!board"
            :width="width" :height="height"
            @open="realizeGhostBoard"></MineBoardPreview>
        <MineBoard
            v-if="board" :board="board"
            :width="board.width" :height="board.height"
            @over="onGameEnd"></MineBoard>
      </div>
    </header>
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

  onChangeBoardSize (size: IBoardSize) {
    console.log('onChangeBoardSize', size)
    this.width = size.width
    this.height = size.height
  }

  initBoard (size: IBoardSize) {
    console.log('initBoard(); size: ', size)

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
