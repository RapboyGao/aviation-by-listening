<template>
  <div class="el-card padding-vertical">
    <div class="flex-row center">
      <AVWaveform :src="src"> </AVWaveform>
    </div>
    <ElDivider></ElDivider>
    <div class="flex center">
      <ElLink target="_blank" :href="src" download type="primary"> Download </ElLink>
    </div>
  </div>
</template>
<script setup lang="ts">
import { AVWaveform } from "vue-audio-visual";
import { defineProps } from "vue";
import { ElLink, ElDivider } from "element-plus";
const props = defineProps<{
  src: string;
}>();
</script>
