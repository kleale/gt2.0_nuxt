<template>
  <div class="flex border-b border-b-slate-800 odd:bg-gray-800 odd:bg-opacity-10 last:border-0 hover:bg-opacity-10 hover:bg-gray-700">
    <div class="flex grow items-center">
      <div class="flex items-start md:items-center py-1 pl-2 md:pl-4 w-[70px] md:w-36 flex-col md:flex-row text-secondary">
        <component :is="match.game" :fontControlled="false" class="w-5" />
      </div>
      <div class="flex grow gap-2 md:gap-5 relative px-1">
        <div class="flex grow flex-1 justify-end items-end gap-1 md:gap-5 flex-col md:flex-row-reverse md:items-center md:justify-start">
          <a href="#" class="flex h-6 w-6">
            <img class="h-6 max-w-full" :src="match.t1Icon" :alt="match.t1" />
          </a>
          <a href="#" class="flex text-right text-white text-[13px] leading-4"> {{ match.t1 }}</a>
        </div>
        <div class="flex flex-col justify-center items-center px-1 bg-gray-800 bg-opacity-20 w-16 md:w-20 md:h-14 md:px-2">
            <div class="badge badge-error badge-outline cursor-pointer" v-if="match.isLive && !isScore" @click="onShowScore">score</div>
            <div class="text-sm font-bold text-red-400" v-if="match.isLive && isScore" @click="onShowScore">{{ match.score }}</div>
            <div class="text-sm font-bold" v-if="!match.isLive && !isScore">{{ match.score }}</div>
        </div>
        <div class="flex grow flex-1 content-center md:items-center text-left gap-1 md:gap-5 flex-col md:flex-row">
          <a href="#" class="flex h-6 w-6">
            <img class="h-6 max-w-full" :src="match.t2Icon" :alt="match.t2" />
          </a>
          <a href="#" class="flex text-white text-[13px] leading-4"> {{ match.t2 }} </a>
        </div>
      </div>
      <div class="flex items-center w-[175px] md:w-[152px] justify-end gap-3 pr-3">
        <div class="flex gap-3" v-if="match.isLive">
            <div class="flex gap-1 text-red-400">
                <ClockIcon class="h-3" filled />
                <div class="text-xs">{{ match.time }}</div>
            </div>
            <span class="bg-red-400  text-gray-900 text-xs font-semibold mt-0.5 px-1 rounded dark:bg-red-500 dark:text-gray-900" v-if="match.isLive">MAP{{ match.map }}</span>
        </div>
        <div class="text-xs text-right text-secondary" v-if="!match.isLive">
          {{ match.date }}
          {{ match.time }}
        </div>
        <a href="/" class="tooltip w-7 flex justify-center" :data-tip="match.eventName"><img class="h-5" :src="match.eIcon" :alt="match.eventName" /></a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ClockIcon from "@/assets/img/icons/clock.svg";
const isScore = ref(false)
const onShowScore = () => {
    isScore.value = !isScore.value
}
interface IMatch {
  id: number;
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
  match: IMatch;
}>();
</script>
<style scoped>
.bg-odd {
  background-color: #23232b;
}
</style>
