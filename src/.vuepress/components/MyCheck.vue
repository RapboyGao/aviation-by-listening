<template>
  <el-checkbox v-model="checked" size="large">
    <slot></slot>
  </el-checkbox>
</template>
<script setup lang="ts">
import { ElCheckbox } from 'element-plus'
import { ref } from 'vue'
let checked = ref(false);
</script>
<style scoped lang="scss">
.flex {
  display: flex;
}
</style>