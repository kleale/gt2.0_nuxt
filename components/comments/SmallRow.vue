<template>
  <a href="#" class="flex flex-col text-sm gap-1 text-primary p-2">
    <div class="flex line-clamp-1">
      <span class="font-bold">{{ comment.match }}</span> &nbsp;&nbsp;•&nbsp;&nbsp;{{ comment.event }}</div>
    <div class="text-sm text-base-content">
      <span class="font-bold text-primary">{{ comment.name }}</span>:&nbsp; 
      {{ comment.comment }} •
      {{ comment.date }}
    </div>
  </a>
</template>

<script setup lang="ts">
const isScore = ref(false);
const onShowScore = () => {
  isScore.value = !isScore.value;
};

interface IComment {
  id: number;
  match: string;
  game: string;
  event: string;
  date: string;
  time: string;
  comment: string;
  name: string;
}

const props = defineProps<{
  comment: IComment;
}>();
</script>

<style scoped>
.bg-odd {
  background-color: #23232b;
}
.isLive {
  background-color: #172429;
}
</style>
