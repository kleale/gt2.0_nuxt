<template>
  <div class="p-4 xl:p-0 xl:pt-4">
    <div class="grid grid-cols-7 gap-5">
      <div class="col-span-12 md:col-span-5">
        <div class="flex flex-col gap-5">
          <EventsBlock/>
          <MatchesBlock/>
        </div>
      </div>
      <div class="col-span-12 md:col-span-2 gap-5">
        <div class="flex flex-col gap-5">
          <CommonTextblock>
            <template v-slot:header-extra> Stream and video, teams and players, statistics and analytics </template>
            On GT you can find all <a href="/">Dota 2</a> and CS:GO matches, watch streams and videos, look for detailed statistics on the teams, players and games, make predictions for the games and sell subscriptions for them. Follow Esports with GT!
          </CommonTextblock>
          <CommonBlocklayout header="News">
            <template v-slot:header-extra>
              <CommonGamelinks :isCompact="true" />
            </template>
            <NewsCardLarge2 :data="news[0]" />
            <BannersB330 />
            <div class="p-4">
              <template v-for="(newsItem, index) in news">
                <NewsBlock :data="newsItem" />
              </template>
            </div>
          </CommonBlocklayout>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-5 pt-5">
      <BannersB1190 />
      <BannersSignUp />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Dota2, CS2, Hs, Lol, Ow, Pubg, Fortnite } from "@/assets/img/icons/";

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

</script>

<style scoped></style>
