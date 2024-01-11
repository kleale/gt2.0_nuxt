<template>
    <div class="p-4 xl:p-0 xl:pt-4">
      <div class="grid grid-cols-7 gap-3 pt-3">
        <div class="col-span-12 md:col-span-5">
          <div class="flex flex-col gap-3">

            <CommonBlocklayout header="News">
              <template v-slot:header-extra>
                <CommonGamelinks :isCompact="true" />
              </template>
              <div class="p-3">
              <NewsCarousel />
            </div>
              <div class="p-4">
                <template v-for="(newsItem, index) in news">
                  <NewsBlock :data="newsItem" />
                </template>
              </div>
            </CommonBlocklayout>
            <div class="flex justify-center">
              <CommonPagination />
            </div>
          </div>
        </div>
        <div class="col-span-12 md:col-span-2">
          <div class="flex flex-col gap-3">
            <CommonTextblocksmall>
              <template v-slot:header-extra>Tournaments DOTA2 </template>
              <p>All Dota 2 tournaments. List of all future and past tournaments, schedule of events and matches.</p>
            </CommonTextblocksmall>
            <BannersB330 />
            
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-5 pt-5">
        <BannersB1190 />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { Dota2, CS2, Hs, Lol, Ow, Pubg, Fortnite, IconSearch, IconRefresh } from "@/assets/img/icons/";
  
  
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
  