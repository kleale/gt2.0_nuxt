<template>
  <div class="p-4 xl:p-0 xl:pt-4">
    <BannersTopMobile />
    <!-- <NewsCardLarge /> -->
    <NewsCarousel />
    <Tabs />
    <BlockLayout header="Best matches of the day">
      <template v-slot:header-extra>
        <a class="tooltip p-2 text-secondary hover:text-white hover:cursor-pointer" data-tip="Refresh">
          <IconRefresh class="w-6" filled :fontControlled="false" />
        </a>
        <div class="divider divider-horizontal m-0 h-6 self-center"></div>
        <a @click="setActiveScoreMode()" :class="activeScoreMode ? 'text-white' : ''" class="tooltip p-2 text-secondary hover:text-white hover:cursor-pointer" 
          data-tip="Show the score">
          <IconScore class="w-6" filled :fontControlled="false" />
        </a>
        <div class="divider divider-horizontal m-0 h-6 self-center"></div>
        <div class="hidden md:flex">
          <template v-for="(game, index) in games">
            <a href="" class="tooltip p-2 text-secondary hover:text-white" :data-tip="game.name">
              <component :is="game.logo" :fontControlled="false" class="w-5" />
            </a>
          </template>
        </div>
        <div class="dropdown md:hidden">
          <div tabindex="0" role="button" class="text-secondary hover:text-primary btn btn-sm btn-ghost">
            <component :is="games[0].logo" :fontControlled="false" class="w-5" />
            <svg width="12px" height="12px" class="h-2 w-2 fill-current opacity-60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
          </div>
          <ul tabindex="0" class="dropdown-content z-[2] menu p-2 shadow bg-base-100 rounded-box w-22">
            <template v-for="(game, index) in games">
              <li>
                <a href="" class="tooltip p-2 text-secondary hover:text-white" :data-tip="game.name">
                  <component :is="game.logo" :fontControlled="false" class="w-5" />
                </a>
              </li>
            </template>
          </ul>
        </div>
      </template>
      <template v-for="(match, index) in matches">
        <MatchesRow :match="match" />
      </template>
    </BlockLayout>
    <div class="flex justify-center">
      <Pagination class="mt-5 mb-5" />
    </div>
    <SignUp />
  </div>
</template>

<script setup lang="ts">
import IconRefresh from "@/assets/img/icons/refresh.svg";
import IconScore from "@/assets/img/icons/score.svg";
import { Dota2, CS2, Hs, Lol, Ow, Pubg, Fortnite } from "@/assets/img/icons/";
import SignUp from "~/components/banners/SignUp.vue";
const matches = [
  { id: 0, t1: "Astralis", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "The Mongolz", t2Icon: "https://escorenews.com/media/logo/_60/t5270.webp", game: Dota2, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: true, map: 1, event_id: 1, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e8382.webp", type: "BO3" },
  { id: 1, t1: "Dota Geniuses", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "Flawless Goblins", t2Icon: "https://escorenews.com/media/logo/_60/t56255.webp", game: CS2, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 2, event_id: 2, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e8401.webp", type: "BO3" },
  { id: 2, t1: "Astralis", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "The Mongolz", t2Icon: "https://escorenews.com/media/logo/_60/t5270.webp", game: Lol, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 1, event_id: 1, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e7632.webp", type: "BO3" },
  { id: 3, t1: "Dota Geniuses", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "Flawless Goblins", t2Icon: "https://escorenews.com/media/logo/_60/t56255.webp", game: Fortnite, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 2, event_id: 2, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e8382.webp", type: "BO3" },
  { id: 4, t1: "Astralis", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "The Mongolz", t2Icon: "https://escorenews.com/media/logo/_60/t5270.webp", game: Dota2, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 1, event_id: 1, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e8382.webp", type: "BO3" },
  { id: 5, t1: "Dota Geniuses", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "Flawless Goblins", t2Icon: "https://escorenews.com/media/logo/_60/t56255.webp", game: CS2, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 2, event_id: 2, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e8401.webp", type: "BO3" },
  { id: 6, t1: "Astralis", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "The Mongolz", t2Icon: "https://escorenews.com/media/logo/_60/t5270.webp", game: Lol, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 1, event_id: 1, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e7632.webp", type: "BO3" },
  { id: 7, t1: "Dota Geniuses", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "Flawless Goblins", t2Icon: "https://escorenews.com/media/logo/_60/t56255.webp", game: Fortnite, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 2, event_id: 2, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e8382.webp", type: "BO3" },
  { id: 8, t1: "Astralis", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "The Mongolz", t2Icon: "https://escorenews.com/media/logo/_60/t5270.webp", game: Dota2, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 1, event_id: 1, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e8382.webp", type: "BO3" },
  { id: 9, t1: "Dota Geniuses", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "Flawless Goblins", t2Icon: "https://escorenews.com/media/logo/_60/t56255.webp", game: CS2, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 2, event_id: 2, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e8401.webp", type: "BO3" },
  { id: 10, t1: "Astralis", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "The Mongolz", t2Icon: "https://escorenews.com/media/logo/_60/t5270.webp", game: Lol, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 1, event_id: 1, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e7632.webp", type: "BO3" },
  { id: 11, t1: "Dota Geniuses", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "Flawless Goblins", t2Icon: "https://escorenews.com/media/logo/_60/t56255.webp", game: Fortnite, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 2, event_id: 2, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e8382.webp", type: "BO3" },
  { id: 12, t1: "Astralis", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "The Mongolz", t2Icon: "https://escorenews.com/media/logo/_60/t5270.webp", game: Dota2, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 1, event_id: 1, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e8382.webp", type: "BO3" },
  { id: 14, t1: "Dota Geniuses", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "Flawless Goblins", t2Icon: "https://escorenews.com/media/logo/_60/t56255.webp", game: CS2, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 2, event_id: 2, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e8401.webp", type: "BO3" },
  { id: 14, t1: "Astralis", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "The Mongolz", t2Icon: "https://escorenews.com/media/logo/_60/t5270.webp", game: Lol, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 1, event_id: 1, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e7632.webp", type: "BO3" },
  { id: 15, t1: "Dota Geniuses", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "Flawless Goblins", t2Icon: "https://escorenews.com/media/logo/_60/t56255.webp", game: Fortnite, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 2, event_id: 2, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e8382.webp", type: "BO3" },
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

const activeScoreMode = ref(false)
const setActiveScoreMode = () => {
  activeScoreMode.value = !activeScoreMode.value
}
</script>

<style scoped></style>
