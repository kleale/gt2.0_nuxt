<template>
  <div class="flex border-dashed odd:bg-odd first:border-0">
    <div class="flex grow items-center">
      <div class="flex items-start md:items-center py-1 pl-2 md:pl-4 w-[70px] md:w-36 flex-col md:flex-row">
        <img class="h-5" src="../assets/img/icons/dota2.svg" alt="gameName" />
        <div class="md:ml-2">
          <div class="font-bold flex-col text-sm dark:text-red-500 leading-4 hidden md:flex" v-if="match.isLive">LIVE</div>
          <span class="bg-red-500 text-gray-900 text-xs font-semibold mt-0.5 px-1 rounded dark:bg-red-500 dark:text-gray-900" v-if="match.isLive">MAP{{ match.map }}</span>
          <div class="text-xs text-gray-600 dark:text-gray-300">СЕГОДНЯ В 23:00</div>
        </div>
      </div>
      <div class="flex grow py-1 gap-2 md:gap-5 relative px-1 md:px-5">
        <div class="flex grow flex-1 justify-end items-end gap-1 md:gap-5 flex-col md:flex-row-reverse md:items-center md:justify-start">
          <a href="#" class="flex h-6 w-6">
            <img class="h-6 max-w-full" :src="match.t1Icon" :alt="match.t1" />
          </a>
          <a href="#" class="flex text-right text-white text-[13px] leading-4"> {{ match.t1 }}</a>
        </div>

        <router-link to="/" class="flex justify-center px-1 border-x border-gray-300 dark:border-gray-700 flex-col w-16 md:w-20 md:h-10 md:px-2">
          <div class="flex items-center justify-center">
            <ClockIcon class="h-3" />
            <div class="text-xs ml-1">{{ match.time }}</div>
          </div>
          <div class="dark:text-apple justify-center text-center text-sm font-extrabold">{{ match.score }}</div>
        </router-link>

        <div class="flex grow flex-1 content-center md:items-center text-left gap-1 md:gap-5 flex-col md:flex-row">
          <a href="#" class="flex h-6 w-6">
            <img class="h-6 max-w-full" :src="match.t2Icon" :alt="match.t2" />
          </a>
          <a href="#" class="flex text-white text-[13px] leading-4"> {{ match.t2 }} </a>
        </div>
      </div>

      <div class="flex items-center w-[75px] md:w-[102px] justify-end gap-3 pr-3">
       
          <a href="/" class="tooltip w-7" :data-tip="match.eventName"><img class="" :src="match.eIcon" :alt="match.eventName" /></a>
       
        <div class="flex flex-col justify-center items-center">
          <div class="flex font-bold flex-col text-xs dark:text-gray-300 leading-4">BO3</div>
          <span class="text-[11px] leading-none font-semibold mt-0.5 w-7 px-1 py-0.5 rounded bg-apple text-white text-center">0:1</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
