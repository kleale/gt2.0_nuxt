<template>
  <tr class="flex border-b border-b-slate-800 odd:bg-slate-800 odd:bg-opacity-10 last:border-0 hover:bg-opacity-10 hover:bg-gray-700">
    <th scope="col" class="py-3 px-1"></th>
    <th scope="col" class="py-3 px-1">{{ player.name }}</th>
    <th scope="col" class="py-3 px-1">{{ player.name }}</th>
    <th scope="col" class="py-3 px-1">{{ player.name }}</th>
    <th scope="col" class="py-3 px-1">{{ player.name }}</th>
    <th scope="col" class="py-3 px-1">{{ player.name }}</th>
  </tr>
</template>

<script setup lang="ts">
interface IPlayer {
  id: number;
  name: string;
  src: string;
}

const props = defineProps<{
  player: IPlayer;
}>();
</script>
<style scoped lang="scss">
.bg-odd {
  background-color: #23232b;
}
.isLive {
  background-color: #172429;
}
</style>
