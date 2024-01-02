<template>
  <a href="/" class="flex md:w-[240px] flex-col gap-5 text-white hover:text-primary transition hover:border-slate-500 hover:scale-95">
    <figure class="figure flex justify-center bg-base-100 shadow-xl overflow-hidden rounded border border-slate-700">
      <span class="flex border-slate-700 h-[80px]" :style="{ backgroundImage: 'url(' + data.eIcon + ')' }"></span>
      <!-- <img :src="data.src" alt="news" class="h-[150px]" /> -->
    </figure>
    <div class="flex flex-col gap-2">
    <div class="flex text-sm items-center justify-between">
      <h3 class="grow text-white">{{ data.name }}</h3>
      <!-- <p>Click the button to listen on Spotiwhy app.</p> -->
      <div class="pl-2">
        <component :is="data.game" :fontControlled="false" class="w-4" />
      </div>
    </div>
    <div class="flex text-sm items-center justify-between">
      <h3 class="grow text-white">{{ data.date }}</h3>
      <!-- <p>Click the button to listen on Spotiwhy app.</p> -->
      <div class="pl-3">
        {{ data.price }}
      </div>
    </div>
    </div>
  </a>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: { name: string; id: number; src: string; eIcon: string;  game: any; price?: string; date?: string };
}>();
</script>
<style scoped>
.figure {
  background-color: azure;
  padding: 10px;
  span {
    width: 90%;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50%;
    background-size: contain;
  }
}
</style>
