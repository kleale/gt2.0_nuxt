<template>
  <a href="/" class="flex flex-col gap-5 pb-5 text-white hover:text-primary transition hover:border-slate-500 hover:scale-95 max-w-sm">
    <figure class="flex justify-center bg-base-100 shadow-xl overflow-hidden rounded border border-slate-700">
        <img :src="data.src" alt="news" class="h-[150px]" />
    </figure>

    <div class="flex px-5">
      <h3 class="grow text-white">{{ data.name }}</h3>
      <!-- <p>Click the button to listen on Spotiwhy app.</p> -->
      <div class="pl-5">
        <component :is="data.game" :fontControlled="false" class="w-6" />
      </div>
    </div>
    <div class="flex px-5">
      <h3 class="grow text-white">{{ data.date }}</h3>
      <!-- <p>Click the button to listen on Spotiwhy app.</p> -->
      <div class="pl-5">
        {{ data.price }}
      </div>
    </div>
  </a>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: { name: string; id: number; src: string; game: any; price?: string; date?: string };
}>();
</script>
