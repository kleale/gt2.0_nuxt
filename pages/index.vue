<template>
  <BannersTopMobile />
  <!-- <NewsCardLarge /> -->
  <NewsCarousel />
  <Tabs/>
  <BlockLayout header="Best matches of the day">
    <template v-slot:header-extra>
      <a href="" class="tooltip p-2 text-secondary hover:text-white" data-tip="Refresh">
        <IconRefresh class="w-6" filled :fontControlled="false"/>
      </a>
      <div class="divider divider-horizontal m-0 h-6 self-center"></div>
      <a href="" class="tooltip p-2 text-secondary hover:text-white" data-tip="Show the score">
        <IconScore class="w-6" filled :fontControlled="false"/>
      </a>
      <div class="divider divider-horizontal m-0 h-6 self-center"></div>
      <template v-for="(game, index) in games" >
        <a href="" class="tooltip p-2 text-secondary hover:text-white" :data-tip="game.name">
          <component :is="game.logo" :fontControlled="false" class="w-5" />
        </a>
    </template>
    </template>
    <template v-for="(match, index) in matches"  >
      <MatchesRow :match="match"/>
    </template>
  </BlockLayout>
  <Pagination class="mt-5" />
</template>

<script setup lang="ts">
import IconRefresh from "@/assets/img/icons/refresh.svg";
import IconScore from "@/assets/img/icons/score.svg";
import { Dota2, CS2, Hs, Lol, Ow, Pubg, Fortnite } from "@/assets/img/icons/";
const matches = [
  { id: 0, t1: "Astralis", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "The Mongolz", t2Icon: "https://escorenews.com/media/logo/_60/t5270.webp", game: "dota2", gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: true, map: 1, event_id: 1, eventName: 'ESEA Open Season 47', eIcon: 'https://escorenews.com/media/event/_60/e8382.webp', type: 'BO3' },
  { id: 1, t1: "Dota Geniuses", t1Icon: "~/assets/img/none/team.svg", t2: "Flawless Goblins", t2Icon: "https://escorenews.com/media/logo/_60/t56255.webp", game: "dota2", gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 2, event_id: 2, eventName: 'ESEA Open Season 47', eIcon: 'https://escorenews.com/media/event/_60/e8382.webp', type: 'BO3' },
  { id: 2, t1: "Astralis", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "The Mongolz", t2Icon: "https://escorenews.com/media/logo/_60/t5270.webp", game: "dota2", gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 1, event_id: 1, eventName: 'ESEA Open Season 47', eIcon: 'https://escorenews.com/media/event/_60/e8382.webp', type: 'BO3' },
  { id: 3, t1: "Dota Geniuses", t1Icon: "/assets/img/none/team.svg", t2: "Flawless Goblins", t2Icon: "https://escorenews.com/media/logo/_60/t56255.webp", game: "dota2", gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 2, event_id: 2, eventName: 'ESEA Open Season 47', eIcon: 'https://escorenews.com/media/event/_60/e8382.webp', type: 'BO3' },
];
const games = [
  {
    name: "DOTA2",
    href: "/dota-2",
    current: true,
    logo: Dota2,
  },
  {
    name: "CS2",
    href: "/",
    current: false,
    logo: CS2,
  },
  {
    name: "League of Legends",
    href: "/",
    current: false,
    logo: Lol,
  },
  {
    name: "Heartstone",
    href: "/",
    current: false,
    logo: Hs,
  },
  {
    name: "Overwatch",
    href: "/",
    current: false,
    logo: Ow,
  },
  {
    name: "Fortnite",
    href: "/",
    current: false,
    logo: Fortnite,
  },
  {
    name: "Pubg",
    href: "/",
    current: false,
    logo: Pubg,
  },
];
</script>

<style scoped>
</style>