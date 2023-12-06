<template>
  <div class="card card-compact max-w-sm p-3">
    <figure><img :src="nimg" alt="news" style="width: 100%" /></figure>
    <div class="card-body">
      <div class="flex">
        <h3 class="card-title grow text-white">{{data}}</h3>
        <!-- <p>Click the button to listen on Spotiwhy app.</p> -->
        <div class="pl-5"><Dota2 /></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import nimg from "~/assets/img/nimg.png";
import { Dota2, CS2, Hs, Lol, Ow, Pubg, Fortnite } from "@/assets/img/icons/";
const props = defineProps<{
  data: string
  game?: string
}>()
</script>
<style scoped>
.nuxt-icon {
  width: 2rem;
  height: 2rem;
  color: #656571;
}
</style>
