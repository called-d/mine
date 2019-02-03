<template>
  <div class="config-bar">
    <select v-model="size" @change="changeBoardSize">
      <option v-for="s of sizes" :key="s.name" :value="s.size">{{ s.name }}</option>
    </select>
    <button @click="$emit('start', size)">Start</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { boardSize, IBoardSizeItem } from '@/config'
import { IBoardSize } from '@/Board'

@Component({
  name: 'ConfigBar',
  components: {}
})

export default class ConfigBar extends Vue {
  get sizes (): IBoardSizeItem[] { return boardSize }

  size: IBoardSize = boardSize[0].size;

  mounted () {
    this.changeBoardSize()
  }

  changeBoardSize () {
    this.$emit('change', this.size)
  }
}
</script>

<style scoped>
    select, option, button {
        font-family: 'x8y12pxTheStrongGamer', sans-serif;
        font-size: 24px;
    }
</style>
