<template>
  <a href="/" class="flex gap-5 py-4 text-white hover:text-primary transition border-b border-slate-800 last:border-0 last:pb-0 first:pt-0">
    <figure class="rounded" v-if="data.isImg">
        <img :src="data.src" alt="news" class="rounded shadow-xl max-w-[105px]" />
    </figure>
    <div class="flex flex-row">
      <div class="flex flex-col">
        <h3 class="title grow text-white">
            <span class="text-secondary" v-if="!data.isImg">{{ data.date }} &nbsp;•&nbsp;</span>
            {{ data.name }}
        </h3>
        <!-- <p>Click the button to listen on Spotiwhy app.</p> -->
        <div v-if="data.isImg"><span class="text-secondary text-xs">{{ data.date }}</span></div>
    </div>
      <div class="flex items-end content-end text-secondary">
        <component :is="data.game" :fontControlled="false" class="w-4" />
      </div>
    </div>
  </a>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: { name: string; id: number; src: string; game: any; isImg?: boolean; date: string;};
}>();
</script>
<style scoped lang="scss">
.title{
    color: #FFF;
    font-size: .8rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>
