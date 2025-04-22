<template>
  <div v-for="(item, index) in stories" :key="item.index" class="mt-50" :id="`pepec-${index}`">
    <ElCard>
      <template #header>
        <div>
          <div class="flex space-between">
            <h3>
              {{ k0s(item.index, 2) }}
            </h3>
            <el-checkbox v-model="favorites[item.index]" label="Favorite" size="large" />
          </div>
        </div>
      </template>

      <template #default>
        <h4>{{ item.title }}</h4>
        <Ques>
          <div>
            <span>@{{ item.content }}@</span>
          </div>
        </Ques>
        <ElDivider />
        <Ques>
          <div>
            <span>@{{ item.translation }}@</span>
          </div>
        </Ques>
        <ElDivider />
        <div class="flex center">
          <ElButton @click="copy(item.content + '\n' + item.translation + '\n\n')">复制</ElButton>
        </div>
      </template>
    </ElCard>
  </div>
</template>
<script setup lang="ts">
import Ques from "./Ques.vue";
import stories from "./pepec-stories";
import { ElCheckbox, ElDivider, ElButton, ElCard, ElLink } from "element-plus";
import { ref, computed, watchEffect, onMounted } from "vue";
import { k0s } from "../../common";
import Store2 from "store2";
import { useClipboard } from "@vueuse/core";
interface Favorites {
  [index: number]: boolean;
}

function getFavorites(): Favorites {
  return Store2.get("favorites-pepec-stories") ?? {};
}

function saveFavorites(favorites: Favorites) {
  Store2.set("favorites-pepec-stories", favorites, true);
}
const favorites = ref<Favorites>(getFavorites());
watchEffect(() => saveFavorites(favorites.value));

const { copy } = useClipboard();
</script>
