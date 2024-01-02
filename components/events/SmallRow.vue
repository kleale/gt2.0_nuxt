<template>
  <div :class="event.isLive ? 'isLive' : ''" class="flex border-b border-b-slate-800 odd:bg-gray-800 odd:bg-opacity-10 last:border-0 hover:bg-opacity-10 hover:bg-gray-700">
    <a href="#" class="flex grow items-center gap-2 h-10 text-primary">
      <div class="flex-1 flex items-center gap-1 pl-2">
        <div class="text-sm hover:underline line-clamp-1">
          {{ event.name }}
        </div>
      </div>
      <div class="text-xs text-right text-secondary max-w-[100px] line-clamp-2">
        {{ event.price }} <br>
        {{ event.date }}
      </div>
      <div  class="px-2">
        <span href="/" class="tooltip w-5 md:w-5 flex justify-center" :data-tip="event.name">
          <img class="h-5 md:h-5 max-w-full" :src="event.eIcon" :alt="event.name" />
        </span>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
const isScore = ref(false);
const onShowScore = () => {
  isScore.value = !isScore.value;
};
interface IEvent {
  id: number;
  name: string;
  game: string;
  price: string;
  date: string;
  time: string;
  isLive: boolean;
  eIcon: string;
  src: string;
}

const props = defineProps<{
  event: IEvent;
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
