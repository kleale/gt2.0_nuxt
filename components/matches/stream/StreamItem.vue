<template>
  <div class="flex flex-row items-center gap-2 bg-neutral rounded">
    <picture class="rounded relative overflow-hidden h-12 min-w-fit">
      <span class="absolute bg-black text-[10px] text-primary text-center rounded-full block leading-3 h-4 w-4 top-1 left-1">en</span>
      <source :srcset="stream.streamSrc" type="image/webp" />
      <img class="h-12 w-12 rounded" loading="lazy" :src="stream.streamSrc" alt="aferaTV" />
    </picture>
    <div class="flex flex-col gap-1 content-center text-xs text-white">
      <div class="line-clamp-1">{{ stream.name }}</div>
      <div class="flex gap-2 items-center content-center"><ClockIcon class="text-primary" filled /> {{ stream.views }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ClockIcon from "@/assets/img/icons/clock.svg";

interface IStream {
  id: number;
  streamSrc: string;
  name: string;
  views: string;
  t1: string;
  t1Icon: string;
  t2: string;
  t2Icon: string;
  game: string;
  gameId: string;
  score: string;
  date: string;
  time: string;
  isLive: boolean;
  map: number;
  event_id: number;
  eventName: string;
  eIcon: string;
  type: string;
}
const props = defineProps<{
  stream: IStream;
}>();
</script>
