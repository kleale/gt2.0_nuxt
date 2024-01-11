<template>
  <tr class="border-b border-b-slate-800 odd:bg-slate-800 odd:bg-opacity-10 last:border-0 hover:bg-opacity-10 hover:bg-gray-700">
    <td scope="col" class="py-3 px-1"></td>
    <td scope="col" class="py-3 px-1">{{ player.name }}</td>
    <td scope="col" class="py-3 px-1">{{ player.name }}</td>
    <td scope="col" class="py-3 px-1">{{ player.name }}</td>
    <td scope="col" class="py-3 px-1">{{ player.name }}</td>
    <td scope="col" class="py-3 px-1">{{ player.name }}</td>
    <td scope="col" class="py-3 px-1">{{ player.name }}</td>
    <td scope="col" class="py-3 px-1">{{ player.name }}</td>
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
