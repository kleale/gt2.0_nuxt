<template>
  <div class="p-4 xl:p-0 xl:pt-4">
    <CommonBreadcrumbs />
    <div class="grid grid-cols-7 gap-3 pt-3">
      <div class="col-span-12 md:col-span-5">
        <div class="flex flex-col gap-3">
          <CommonBlocklayout header="Players Ranking">
            <template v-slot:header-extra>
              <a class="tooltip p-1 text-secondary hover:text-white hover:cursor-pointer" data-tip="Refresh">
                <IconRefresh class="w-6" filled :fontControlled="false" />
              </a>
              <div class="divider divider-horizontal m-0 h-6 self-center"></div>
              <CommonGamelinks />
            </template>
            <div class="p-2 flex gap-3">
              <div class="join w-25">
                <input type="text" placeholder="Name or nickname of the Player" class="input input-bordered input-sm join-item w-full max-w-xs rounded border-slate-800" />
                <button class="join-item btn btn-outline btn-sm border-slate-800 rounded">
                  <IconSearch class="w-4" filled :fontControlled="false" />
                </button>
              </div>
              <CommonDropdown :drop="drop1" />
              <CommonDropdown :drop="drop2" />
              <CommonDropdown :drop="drop3" />
              <CommonDropdown :drop="drop4" />
              <CommonDropdown :drop="drop5" />
            </div>

            <table class="w-full table-fixed text-xs text-left text-base-content">
              <thead class="text-xs text-neutral-content uppercase border-b border-slate-800 bg-block">
                <tr>
                  <th scope="col" class="py-3 px-1 w-2"></th>
                  <th scope="col" class="py-3 px-1">Player</th>
                  <th scope="col" class="py-3 px-1 w-20">Position</th>
                  <th scope="col" class="py-3 px-1 w-20">Rating</th>
                  <th scope="col" class="py-3 px-1 w-20">Earned</th>
                  <th scope="col" class="py-3 px-1 w-24">Last match</th>
                  <th scope="col" class="py-3 px-1 w-14">Team</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="(player, index) in players">
                  <PlayersRow :player="player" />
                </template>
              </tbody>
            </table>
            <div class="flex justify-start p-2">
              <CommonPagination />
            </div>
          </CommonBlocklayout>
        </div>
      </div>
      <div class="col-span-12 md:col-span-2">
        <div class="flex flex-col gap-3">
          <CommonTextblocksmall>
              <template v-slot:header-extra>DOTA 2 Player Rankings</template>
              <p>Here you can see all professional Dota 2 players. For some of them also showed Solo MMR.</p>
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

const players = [
  {
    id: 0,
    name: "Kokz",
    src: "https://escorenews.com/media/tournament/_300/e8564.webp",
    role: "Mid",
    flag: "https://escorenews.com/media/flags/29.svg",
    raiting: "234",
    money: "$34K",
    lastmatch: "2d",
    team: "Geek Fam",
    teamIco: "https://escorenews.com/media/logo/_60/t12950.webp",
  },{
    id: 0,
    name: "Kokz",
    src: "https://escorenews.com/media/tournament/_300/e8564.webp",
    role: "Mid",
    flag: "https://escorenews.com/media/flags/29.svg",
    raiting: "234",
    money: "$34K",
    lastmatch: "2d",
    team: "Geek Fam",
    teamIco: "https://escorenews.com/media/logo/_60/t12950.webp",
  },{
    id: 0,
    name: "Kokz",
    src: "https://escorenews.com/media/tournament/_300/e8564.webp",
    role: "Mid",
    flag: "https://escorenews.com/media/flags/29.svg",
    raiting: "234",
    money: "$34K",
    lastmatch: "2d",
    team: "Geek Fam",
    teamIco: "https://escorenews.com/media/logo/_60/t12950.webp",
  },{
    id: 0,
    name: "Kokz",
    src: "https://escorenews.com/media/tournament/_300/e8564.webp",
    role: "Mid",
    flag: "https://escorenews.com/media/flags/29.svg",
    raiting: "234",
    money: "$34K",
    lastmatch: "2d",
    team: "Geek Fam",
    teamIco: "https://escorenews.com/media/logo/_60/t12950.webp",
  },
];

const drop1 = {
  button: "Event",
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

const drop3 = {
  button: "Region",
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
  button: "Country",
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

const drop5 = {
  button: "Role",
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
