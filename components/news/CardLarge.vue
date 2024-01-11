<template>
  <a href="/" class="card rounded card-compact text-white hover:text-primary border border-slate-700 transition hover:border-slate-500 hover:scale-99 max-w-sm image-full shadow-xl bg-base-100">
    <figure class="rounded" ><img :src="data.src" alt="news" style="width: 100%" class="rounded" /></figure>
    <div class="card-body justify-end">
      <div class="flex">
        <h3 class="card-title grow text-white">{{data.name}}</h3>
        <!-- <p>Click the button to listen on Spotiwhy app.</p> -->
        <div class="pl-5 flex items-end content-end text-base-content">
          <component :is="data.game" :fontControlled="false" class="w-6" />
        </div>
      </div>
    </div>
  </a>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: {name:string, id:number, src:string, game:any, isImg?: boolean, date?: string}
}>()
</script>