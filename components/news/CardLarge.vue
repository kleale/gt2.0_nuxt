<template>
  <div class="card card-compact lg:card-side bg-base-100 shadow-xl p-3">
    <figure><img :src="nimg" alt="news" style="width: 100%" /></figure>
    <div class="card-body">
      <div class="flex">
        <h3 class="card-title grow">Pure: "I believe I was one of the best carries and can become the best offlaner in the world now"</h3>
        <!-- <p>Click the button to listen on Spotiwhy app.</p> -->
        <Dota2 class=""/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import nimg from "@/assets/img/nimg.png";
import { Dota2, CS2, Hs, Lol, Ow, Pubg, Fortnite } from "@/assets/img/icons/";
</script>
<style scoped>
.nuxt-icon{
width:2rem;
height:2rem;
}
</style>
