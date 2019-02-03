<template>
  <div class="mine-board preview" :style="boardStyle">
    <BoardCell v-for="i in width * height" :key="i" @open="$emit('open', i-1)">
    </BoardCell>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import BoardCell from '@/components/BoardCell.vue'

@Component({
  name: 'MineBoardPreview',
  components: { BoardCell }
})

export default class MineBoardPreview extends Vue {
  @Prop()
  width!: number;

  @Prop()
  height!: number;

  get boardStyle (): string {
    return `grid-template-columns: repeat(${this.width}, 1fr)`
  }
}
</script>

<style scoped>
  .mine-board.preview {
    border: 2px dotted gray;
  }
</style>
