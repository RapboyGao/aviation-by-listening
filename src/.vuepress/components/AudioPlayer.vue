<template>
  <ElCard>
    <template #header>
      <div class="flex center">
        <AVWaveform :src="src"> </AVWaveform>
      </div>
    </template>
    <div class="flex center">
      <ElLink target="_blank" :href="src" download type="primary"> Download </ElLink>
    </div>
  </ElCard>
</template>
<script setup lang="ts">
import { AVWaveform } from "vue-audio-visual";
import { defineProps } from "vue";
import { ElCard, ElLink } from "element-plus";
const props = defineProps<{
  src: string;
}>();
</script>
