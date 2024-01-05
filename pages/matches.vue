<template>
  <div class="p-4 xl:p-0 xl:pt-4">
    <EventsBlockSmall />

    <div class="grid grid-cols-7 gap-3 pt-3">
      <div class="col-span-12 md:col-span-5">
        <div class="flex flex-col gap-3">
          <CommonBlocklayout header="Upcoming Dota 2 matches">
            <template v-slot:header-extra>
              <a class="tooltip p-1 text-secondary hover:text-white hover:cursor-pointer" data-tip="Refresh">
                <IconRefresh class="w-6" filled :fontControlled="false" />
              </a>
              <div class="divider divider-horizontal m-0 h-6 self-center"></div>
              <a @click="setActiveScoreMode()" :class="activeScoreMode ? 'text-white' : ''" class="tooltip p-1 text-secondary hover:text-white hover:cursor-pointer" data-tip="Show the score">
                <IconScore class="w-6" filled :fontControlled="false" />
              </a>
            </template>
            <div class="p-2 flex gap-3">
              <CommonDropdown :drop="drop1" />
              <CommonDropdown :drop="drop2" />
              <CommonDropdown :drop="drop3" />
              <CommonDropdown :drop="drop4" />
            </div>
            <template v-for="(match, index) in matches">
              <MatchesRow :match="match" />
            </template>
          </CommonBlocklayout>
          <div class="flex justify-center">
            <CommonPagination />
          </div>

          <CommonBlocklayout header="Last Dota 2 matches">
            <template v-slot:header-extra>
              <a class="tooltip p-1 text-secondary hover:text-white hover:cursor-pointer" data-tip="Refresh">
                <IconRefresh class="w-6" filled :fontControlled="false" />
              </a>
              <div class="divider divider-horizontal m-0 h-6 self-center"></div>
              <a @click="setActiveScoreMode()" :class="activeScoreMode ? 'text-white' : ''" class="tooltip p-1 text-secondary hover:text-white hover:cursor-pointer" data-tip="Show the score">
                <IconScore class="w-6" filled :fontControlled="false" />
              </a>
            </template>
            <div class="p-2 flex gap-3">
              <CommonDropdown :drop="drop1" />
              <CommonDropdown :drop="drop2" />
              <CommonDropdown :drop="drop3" />
              <CommonDropdown :drop="drop4" />
            </div>
            <template v-for="(match, index) in matches">
              <MatchesRow :match="match" />
            </template>
          </CommonBlocklayout>
          <div class="flex justify-center">
            <CommonPagination />
          </div>
        </div>
      </div>
      <div class="col-span-12 md:col-span-2">
        <div class="flex flex-col gap-3">
          <CommonTextblocksmall>
            <template v-slot:header-extra>DOTA 2 Matches </template>
            <p>Released in 2011, Dota 2 quickly became one of the biggest multiplayer games worldwide, and still goes strong to this day, including a big esports scene. The game is played in matches, with many formats and types available for fans. Dota 2 matches are one of the most popular esports disciplines, and fans from all over the world follow them.</p>
          </CommonTextblocksmall>
          <BannersB330 />
          <CommonBlocklayout header="News">
            <template v-slot:header-extra>
              <CommonGamelinks :isCompact="true" />
            </template>
            <NewsCardLarge2 :data="news[0]" />
            <div class="p-4">
              <template v-for="(newsItem, index) in news">
                <NewsBlock :data="newsItem" />
              </template>
            </div>
          </CommonBlocklayout>
          <CommonBlocklayout header="Prize pool of current Events">
            <template v-for="(event, index) in events">
              <EventsSmallRow :event="event" />
            </template>
          </CommonBlocklayout>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-5 pt-5">
      <BannersB1190 />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Dota2, CS2, Hs, Lol, Ow, Pubg, Fortnite } from "@/assets/img/icons/";

const events = [
  {
    id: 0,
    name: "ESL One Birmingham 2024",
    game: Dota2,
    price: "$100K",
    date: "April 22, 2024",
    time: "11:34",
    isLive: true,
    eIcon: "https://escorenews.com/media/event/_120/e8564.webp",
    src: "https://escorenews.com/media/tournament/_300/e8564.webp",
  },
  {
    id: 1,
    name: "DreamLeague Season 22",
    game: Dota2,
    price: "$1M",
    date: "February 13, 2024",
    time: "11:34",
    isLive: false,
    eIcon: "https://escorenews.com/media/event/_120/e8562.webp",
    src: "https://escorenews.com/media/tournament/_300/e8562.webp",
  },
  {
    id: 2,
    name: "ESB Liga 2024 Tour 2",
    game: Dota2,
    price: "$500K",
    date: "January 13, 2024",
    time: "11:34",
    isLive: false,
    eIcon: "https://escorenews.com/media/event/_120/e8659.webp",
    src: "https://escorenews.com/media/tournament/_300/e8659.webp",
  },
  {
    id: 3,
    name: "Winline Insight Season 4",
    game: Lol,
    price: "$10K",
    date: "10 ноября - 24 декабря 2023",
    time: "11:34",
    isLive: false,
    eIcon: "https://escorenews.com/media/event/_120/e8527.webp",
    src: "https://escorenews.com/media/tournament/_300/e8527.webp",
  },
  {
    id: 0,
    name: "ESL One Birmingham 2024",
    game: Dota2,
    price: "$100K",
    date: "April 22, 2024",
    time: "11:34",
    isLive: false,
    eIcon: "https://escorenews.com/media/event/_120/e8564.webp",
    src: "https://escorenews.com/media/tournament/_300/e8564.webp",
  },
  {
    id: 1,
    name: "DreamLeague Season 22",
    game: Dota2,
    price: "$1M",
    date: "February 13, 2024",
    time: "11:34",
    isLive: false,
    eIcon: "https://escorenews.com/media/event/_120/e8562.webp",
    src: "https://escorenews.com/media/tournament/_300/e8562.webp",
  },
  {
    id: 2,
    name: "ESB Liga 2024 Tour 2",
    game: Dota2,
    price: "$500K",
    date: "January 13, 2024",
    time: "11:34",
    isLive: false,
    eIcon: "https://escorenews.com/media/event/_120/e8659.webp",
    src: "https://escorenews.com/media/tournament/_300/e8659.webp",
  },
  {
    id: 3,
    name: "Winline Insight Season 4",
    game: Lol,
    price: "$10K",
    date: "10 ноября - 24 декабря 2023",
    time: "11:34",
    isLive: false,
    eIcon: "https://escorenews.com/media/event/_120/e8527.webp",
    src: "https://escorenews.com/media/tournament/_300/e8527.webp",
  },
  {
    id: 3,
    name: "Winline Insight Season 4",
    game: Lol,
    price: "$10K",
    date: "10 ноября - 24 декабря 2023",
    time: "11:34",
    isLive: false,
    eIcon: "https://escorenews.com/media/event/_120/e8527.webp",
    src: "https://escorenews.com/media/tournament/_300/e8527.webp",
  },
  {
    id: 3,
    name: "Winline Insight Season 4",
    game: Lol,
    price: "$10K",
    date: "10 ноября - 24 декабря 2023",
    time: "11:34",
    isLive: false,
    eIcon: "https://escorenews.com/media/event/_120/e8527.webp",
    src: "https://escorenews.com/media/tournament/_300/e8527.webp",
  },
];

const news = [
  {
    name: "ZywOo's first Major MVP, dupreeh and zonic's 5th Major win, and other storilines closed at BLAST Paris Major 2023",
    id: 0,
    src: "https://escorenews.com/media/news/_468/n53609.webp",
    game: Dota2,
    isImg: true,
    date: "15 may, 13:00",
  },
  {
    name: "I believe I was one of the best carries and can become the best offlaner in the world now",
    id: 0,
    src: "https://escorenews.com/media/news/_468/n53609.webp",
    game: CS2,
    isImg: true,
    date: "15 may, 13:00",
  },
  {
    name: " What teams will play in BLAST Paris Major playoffs? Every team qualified for main stage in France",
    id: 0,
    src: "https://escorenews.com/media/news/_468/n53609.webp",
    game: Dota2,
    isImg: false,
    date: "15 may, 13:00",
  },
  {
    name: "Legends Stage Pick'Em Challenge predictions made by pro-players, analysts, and insiders for BLAST Paris Major 2023",
    id: 0,
    src: "https://escorenews.com/media/news/_468/n53609.webp",
    game: Lol,
    isImg: false,
    date: "15 may, 13:00",
  },
  {
    name: "Rainbow Six Siege Y8S2 next operator Fenrir leaks and details: lore, appearance, gadget, loadout and release date",
    id: 0,
    src: "https://escorenews.com/media/news/_468/n53609.webp",
    game: CS2,
    isImg: false,
    date: "15 may, 13:00",
  },
];

const drop1 = {
  button: "Tournament",
  items: [
    {
      label: "label 0",
      id: 0,
    },
    {
      label: "label 1",
      id: 1,
    },
  ],
};

const drop2 = {
  button: "Stage",
  items: [
    {
      label: "label 0",
      id: 0,
    },
    {
      label: "label 1",
      id: 1,
    },
  ],
};

const drop3 = {
  button: "Round",
  items: [
    {
      label: "label 0",
      id: 0,
    },
    {
      label: "label 1",
      id: 1,
    },
  ],
};

const drop4 = {
  button: "Team",
  items: [
    {
      label: "label 0",
      id: 0,
    },
    {
      label: "label 1",
      id: 1,
    },
  ],
};

import { IconRefresh, IconScore} from "@/assets/img/icons/";

const matches = [
  { id: 0, t1: "Astralis", t1Icon: "/img/none/teamNoLogo.svg", t2: "The Mongolz", t2Icon: "https://escorenews.com/media/logo/_60/t5270.webp", game: Dota2, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: true, map: 1, event_id: 1, eventName: "ESEA Open Season 47", eIcon: "/img/none/tourNoLogo.svg", type: "BO3" },
  { id: 1, t1: "Dota Geniuses", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "Flawless Goblins", t2Icon: "https://escorenews.com/media/logo/_60/t56255.webp", game: CS2, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 2, event_id: 2, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e8401.webp", type: "BO3" },
  { id: 2, t1: "Astralis", t1Icon: "/img/none/teamNoLogo.svg", t2: "The Mongolz", t2Icon: "https://escorenews.com/media/logo/_60/t5270.webp", game: Lol, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: false, map: 1, event_id: 1, eventName: "ESEA Open Season 47", eIcon: "https://escorenews.com/media/event/_60/e7632.webp", type: "BO3" },
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

const activeScoreMode = ref(false);
const setActiveScoreMode = () => {
  activeScoreMode.value = !activeScoreMode.value;
};
</script>

<style scoped></style>
