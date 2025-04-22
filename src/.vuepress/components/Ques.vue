<template>
	<div v-show="false" class="auto-wrap" :id="idFake">
		<slot></slot>
	</div>
	<div
		:class="{ 'question-card': card }"
		@click="answerVisible = !answerVisible"
	>
		<div class="question-container auto-wrap" v-html="html"></div>
		<!-- <div v-if="card" class="center">
			<el-button text type="primary"> {{ showHideTxt }} </el-button>
		</div> -->
	</div>
</template>
<script setup lang="ts">
import { nanoid } from "nanoid";
import { ElButton } from "element-plus";
import { computed, onMounted, ref, watchEffect } from "vue";
defineProps<{
	/** 是否用card来显示 */
	card?: boolean;
}>();
const txt = ref("");
const idFake = nanoid();
function getHtml(): string {
	const element = document.getElementById(idFake) as HTMLDivElement;
	return element.innerHTML;
}
const answerVisible = ref(false);

const questionAnswerArr = computed(() =>
	txt.value
		.replace(/@/g, "|")
		.split("|")
		.map((ele, i) => {
			const isAnswer = i % 2;
			return {
				content: ele,
				cls: [
					i % 2 ? "answer" : "question",
					answerVisible.value && isAnswer ? "visible" : "invisible",
				],
			};
		})
);
const html = computed(() => {
	return questionAnswerArr.value
		.map((e) => `<span class="${e.cls.join(" ")}">${e.content}</span>`)
		.join("");
});
onMounted(() => {
	setTimeout(() => {
		txt.value = getHtml();
	}, 500);
});
</script>
