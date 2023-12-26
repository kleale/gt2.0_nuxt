
import type { EventsCard } from '#build/components';
<template>
  <CommonBlocklayout header="Tournaments">
    <template v-slot:header-extra>
      <CommonGamelinks />
    </template>
    <div class="flex flex-row gap-5 p-5">
        <template v-for="(event, index) in events">
            <EventsCard :data="event"/>
        </template>
    </div>
  </CommonBlocklayout>
  <!-- <div class="flex justify-center">
    <CommonPagination />
  </div> -->
</template>
<script setup lang="ts">
import IconRefresh from "@/assets/img/icons/refresh.svg";
import IconScore from "@/assets/img/icons/score.svg";
import { Dota2, CS2, Hs, Lol, Ow, Pubg, Fortnite } from "@/assets/img/icons/";

const events = [
  {
    id: 0,
    name: 'GGWP Dragon S2',
    game: Dota2,
    price: '$20,000',
    date: "January 13, 2024",
    time: "11:34",
    isLive: true,
    map: 1,
    eIcon: "https://escorenews.com/media/event/_60/e8382.webp",
    src: 'https://game-tournaments.com/media/tournament/e8638.webp'
  },{
    id: 0,
    name: 'GGWP Dragon S2',
    game: Dota2,
    price: '$20,000',
    date: "January 13, 2024",
    time: "11:34",
    isLive: true,
    map: 1,
    eIcon: "https://escorenews.com/media/event/_60/e8382.webp",
    src: 'https://game-tournaments.com/media/tournament/e8638.webp'
  },{
    id: 0,
    name: 'GGWP Dragon S2',
    game: Dota2,
    price: '$20,000',
    date: "January 13, 2024",
    time: "11:34",
    isLive: true,
    map: 1,
    eIcon: "https://escorenews.com/media/event/_60/e8382.webp",
    src: 'https://game-tournaments.com/media/tournament/e8638.webp'
  },
];
</script>
<style scoped></style>
