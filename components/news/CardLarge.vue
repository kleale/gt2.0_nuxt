<template>
  <a href="/" class="card card-compact text-white hover:text-primary border border-transparent transition hover:border-slate-500 hover:scale-105 max-w-sm m-3 image-full shadow-xl bg-base-100">
    <figure><img :src="data.src" alt="news" style="width: 100%" /></figure>
    <div class="card-body justify-end">
      <div class="flex">
        <h3 class="card-title grow text-white">{{data.name}}</h3>
        <!-- <p>Click the button to listen on Spotiwhy app.</p> -->
        <div class="pl-5 flex items-end content-end">
          <component :is="data.game" :fontControlled="false" class="w-6" />
        </div>
      </div>
    </div>
  </a>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: {name:string, id:number, src:string, game:any}
}>()
</script>
<style scoped>
.nuxt-icon {
  width: 2rem;
  height: 2rem;
  color: #656571;
}
</style>
