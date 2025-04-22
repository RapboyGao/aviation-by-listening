<template>
  <div class="flex-wrap center">
    <ElLink v-for="pageIndex in pages" :key="pageIndex" :href="`#choosing-${pageIndex * 50}`" class="margin-left-right" type="primary">
      {{ pageIndex * 50 }}
    </ElLink>
  </div>
  <ElDivider></ElDivider>
  <div class="flex-wrap center">
    <el-checkbox v-model="useShuffle" label="Shuffled" size="large" class="margin-left-right" />
  </div>
  <div v-for="(item, index) in shownQuestions" :key="item._id" class="mt-50" :id="`pepec-${index}`">
    <PepecChoosingCard :index="index + 1" :question="item"></PepecChoosingCard>
  </div>
</template>
<script setup lang="ts">
import { ElCheckbox, ElDivider, ElLink } from "element-plus";
import _ from "lodash";
import { computed, defineProps, ref } from "vue";
import type { PepecChoosing } from "../pepec.types";
import PepecChoosingCard from "./PepecChoosingCard.vue";
const props = defineProps<{
  choosingQuestions: PepecChoosing[];
}>();

let useShuffle = ref(false);
// let showFavoriteOnly = ref(false);

// let favoriteQuestions = computed(() => {
//   if (showFavoriteOnly.value) {
//     const result = props.choosingQuestions.filter((item) => {
//       return store.get("favorite-" + item._id, false);
//     });
//     console.log("favoriteQuestions", result);
//     return result;
//   } else {
//     return props.choosingQuestions;
//   }
// });

// let shownQuestions = computed(() => {
//   return useShuffle.value ? _.shuffle(favoriteQuestions.value) : favoriteQuestions.value;
// });
let shownQuestions = computed(() => {
  return useShuffle.value ? _.shuffle(props.choosingQuestions) : props.choosingQuestions;
});

let pages = computed(() => Math.ceil(shownQuestions.value.length / 50 - 1));
</script>
