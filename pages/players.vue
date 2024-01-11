<template>
  <div class="p-4 xl:p-0 xl:pt-4">
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
              <CommonDropdown :drop="drop2" />
              <CommonDropdown :drop="drop3" />
              <CommonDropdown :drop="drop4" />
            </div>

            <table class="w-full table-fixed text-xs text-left text-base-content">
              <thead class="text-xs text-neutral-content uppercase border-b border-slate-800 bg-block">
                <tr>
                    <th scope="col" class="py-3 px-2 w-10"></th>  
                    <th scope="col" class="py-3 px-2">
                        Player
                    </th>
                    <th scope="col" class="py-3 px-2">
                        Position
                    </th>
                    <th scope="col" class="py-3 px-2">
                        Rating
                    </th>
                    <th scope="col" class="py-3 px-2">
                        Earned
                    </th>
                    <th scope="col" class="py-3 px-2">
                        Last match
                    </th>
                    <th scope="col" class="py-3 px-2">
                        Team
                    </th>
                    <th scope="col" class="py-3 px-2">
                        Last game
                    </th>
                </tr>
              </thead>
              <tbody>
                <template v-for="(player, index) in players">
                  <PlayersRow :player="player"/>
                </template>
              </tbody>
            </table>
            <div class="flex justify-center">
              <CommonPagination />
            </div>
          </CommonBlocklayout>
        </div>
      </div>
      <div class="col-span-12 md:col-span-2">
        <div class="flex flex-col gap-3">
          <CommonBlocklayout header="Players Filter"> 123 </CommonBlocklayout>
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
const players = [
  {
    id: 0,
    name: "ESL One Birmingham 2024",
    src: "https://escorenews.com/media/tournament/_300/e8564.webp",
  },
];

const drop2 = {
  button: "Position ",
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
</script>

<style scoped></style>
