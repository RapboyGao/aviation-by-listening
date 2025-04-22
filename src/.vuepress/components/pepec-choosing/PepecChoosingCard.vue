<template>
  <ElCard>
    <template #header>
      <div class="flex space-between">
        <h3>
          {{ k0s(index, 3) }}
        </h3>
        <el-checkbox v-model="isFavoriteComputed" label="Favorite" size="large" />
      </div>
    </template>

    <template #default>
      <Ques>
        <div v-for="item in question.content" :key="item" class="flex-wrap">{{ item }}</div>
      </Ques>
      <ElDivider />
      <div :id="'choosing-' + index" @click="showAnswer = !showAnswer">
        <div v-for="(option, index) in shuffledOptions" :key="index">
          <ElCheckbox :model-value="showAnswer && option.right"> {{ String.fromCharCode(65 + index) }}. {{ option.content }} </ElCheckbox>
        </div>
      </div>
    </template>
  </ElCard>
</template>
<script setup lang="ts">
import { ElCard, ElCheckbox, ElDivider } from "element-plus";
import _ from "lodash";
import { computed, defineProps, Ref, ref } from "vue";
import { k0s } from "../../../common";
import type { PepecChoosing } from "../pepec.types";
import Ques from "../Ques.vue";
import store2 from "store2";
const props = defineProps<{
  index: number;
  question: PepecChoosing;
}>();
let showAnswer = ref(false);
const isFavorite: Ref<boolean> = ref(store2.get("favorite-" + props.question._id, false));
const isFavoriteComputed = computed({
  get: () => isFavorite.value,
  set: (value) => {
    isFavorite.value = value;
    store2.set("favorite-" + props.question._id, value);
  },
});
const shuffledOptions = _.shuffle(props.question.options);
</script>
