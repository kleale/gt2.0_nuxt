<template>
  <div class="p-4 xl:p-0 md:pt-0">
    <CommonBreadcrumbs />
    <MatchesMatchHeader />
    <MatchesStreamBlock />
    <BannersB1190 />
    <div class="grid grid-cols-7 gap-3 pt-3">
      <div class="col-span-12 md:col-span-5">
        <div class="flex flex-col gap-3">
          <CommonBlocklayoutCustom>
            <template v-slot:header>
              <div class="flex flex-1 items-center">
                <div class="flex mr-2">
                  <img class="h-7" src="/img/none/tourNoLogo.svg" alt="tourName" />
                </div>
                <h3 class="text-sm md:text-l font-bold text-white grow pl-1 flex-col">
                  <span class="flex">IEM Dallas 2022</span>
                  <span class="flex">$15 000</span>
                </h3>
              </div>
              <div class="flex gap-1">
                <button class="btn btn-sm rounded btn-primary">MAP 1</button>
                <button class="btn btn-sm rounded btn-outline">MAP 2</button>
                <button class="btn btn-sm rounded btn-outline">MAP 3</button>
              </div>
            </template>
            <div class="p-3">
              <MatchesMatchVideoResults />
              <MatchesMatchStats />
            </div>
          </CommonBlocklayoutCustom>
          
          <MatchesMatchDataTable />
        </div>
      </div>
      <div class="col-span-12 md:col-span-2">
        <div class="flex flex-col gap-3">
          <MatchesMatchPlayersBlock />
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
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-5 pt-5">
      <MatchesMatchMatchesByTeam />
      <BannersB1190 />
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
    isImg: false,
    date: "15 may, 13:00",
  },
  {
    name: "I believe I was one of the best carries and can become the best offlaner in the world now",
    id: 0,
    src: "https://escorenews.com/media/news/_468/n53609.webp",
    game: CS2,
    isImg: false,
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
];

const comments = [
  {
    id: 0,
    match: "SNG vs yK",
    game: Dota2,
    event: "DPC WEU 2023 Tour 3",
    date: "1-7 dec",
    time: "11-00",
    comment: "Буду комментить этот матч - заходите кто хочет)",
    name: "Ezio",
  },
  {
    id: 0,
    match: "SNG vs yK",
    game: Dota2,
    event: "DPC WEU 2023 Tour 3",
    date: "1-7 dec",
    time: "11-00",
    comment: "Буду комментить этот матч - заходите кто хочет)",
    name: "Ezio",
  },
  {
    id: 0,
    match: "SNG vs yK",
    game: Dota2,
    event: "DPC WEU 2023 Tour 3",
    date: "1-7 dec",
    time: "11-00",
    comment: "Буду комментить этот матч - заходите кто хочет)",
    name: "Ezio",
  },
];
</script>

<style scoped></style>
