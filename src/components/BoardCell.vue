<template>
  <div class="cell" :data-state="state"
       @click.left="onClick"
       @click.right.prevent="$emit('toggle')"
       @dblclick="$emit('openaround')">
    <div class="char" v-if="state === 'open'">
      <span v-if="hasMine">×</span>
      <span v-else-if="mineCount">{{ mineCount }}</span>
    </div>
    <div class="char close" v-else>
      <span v-if="state === 'flagged'">F</span>
      <span v-if="state === '?'">?</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { CellState, ICellInfo } from '@/Cell'

  @Component({
    name: 'BoardCell',
    components: {}
  })

export default class BoardCell extends Vue {
  @Prop({ default: null })
  info?: ICellInfo;

  get state (): CellState { return this.info ? this.info.state : CellState.GHOST }
  get hasMine (): boolean { return this.info ? this.info.hasMine : false }
  get mineCount (): number { return this.info ? this.info.mineCount : 0 }

  onClick () {
    switch (this.state) {
      case CellState.OPEN: return
      case CellState.FLAGGED: return
      default:
        this.$emit('open')
    }
  }
}
</script>

<style scoped lang="scss">
  .cell {
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    font-size: 36px;

    background-color: #077;
    border: 1px solid #055;

    // https://qiita.com/akicho8/items/8522929fa619394ac9f4
    user-select: none;

    .char {
      height: 100%;
      > span {
        display:inline-block;
        transform: translate(0, calc(-2em / 12));
      }
    }
    .close {
      text-shadow: white calc(1em / 12) calc(1em / 12);
    }
  }
  @media (max-width: 600px) {
    .cell {
      width: 28px;
      height: 28px;
      font-size: 24px;
    }
  }
  @media (max-width: 430px) {
    .cell {
      width: 14px;
      height: 14px;
      font-size: 12px;
    }
  }
  [data-state="ghost"] {
    background-color: #0888;
    border: none;
  }
  [data-state="open"] {
    background-color: azure;
    border: none;
  }
  [data-state="close"] {
  }
</style>
