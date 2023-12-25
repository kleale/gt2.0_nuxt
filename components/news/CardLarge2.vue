<template>
  <a href="/" class="text-white hover:text-primary relative transition image-full bg-base-100">
    <figure><img :src="data.src" alt="news" class="opacity-25" style="width: 100%" /></figure>
    <div class="justify-end p-6 absolute bottom-0">
      <div class="flex flex-col gap-2">
        <div><span data-v-ac29a604="" class="bg-[#DDBE9A] text-gray-900 text-xs font-semibold mt-0.5 px-1 rounded ">MAP1</span></div>
        <h3 class="card-title grow text-white text-lg leading-5">{{data.name}}</h3>
        <!-- <p>Click the button to listen on Spotiwhy app.</p> -->
        <!-- <div class="pl-5 flex items-end content-end">
          <component :is="data.game" :fontControlled="false" class="w-6" />
        </div> -->
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
