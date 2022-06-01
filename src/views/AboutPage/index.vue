<template>
  <div>
    <template v-for="(item, i) in arr" :key="i">
      <span class="info-item" v-if="i < 3">
        {{ item }}
        <i>、</i>
      </span>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const arr = ref(['张三', '李四', '王舞', 'helel', 'sdkfjs', 'sdfdsf'])
</script>

<style scoped lang="less">
.info-item {
  &:last-child {
    i {
      display: none;
    }
  }
}
</style>
