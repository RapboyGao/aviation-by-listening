<template>
  <div class="flex center">
    <AVWaveform :src="src"></AVWaveform>
  </div>
</template>
<script setup lang="ts">
import { AVWaveform } from "vue-audio-visual";
import { defineProps } from "vue";
const props = defineProps<{
  src: string;
}>();
</script>
