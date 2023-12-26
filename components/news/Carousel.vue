<template>
  <div>
  <div class="carousel w-full gap-4">
    <div id="slide1" class="carousel-item relative" v-for="(slide, index) in slides">
      <NewsCardLarge :data="slide" :id="`item${slide.id}`" />
    </div>
  </div>
  <div class="flex justify-center w-full py-2 gap-2">
      <template v-for="(slide, index) in slides">
        <a :href="`#item${slide.id}`" class="btn btn-xs">{{ slide.id }}</a>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Dota2, CS2, Hs, Lol, Ow, Pubg, Fortnite } from "@/assets/img/icons/";
const slides = [
  { name: "TSM рассталась с составом по Dota 2", id: 0, src: "https://escorenews.com/media/news/_468/n53609.webp", game: Dota2, isImg: true, date: "date" },
  { name: "«Я самый лошара среди всех 322-шеров». Открытое письмо GIGA CHEL (LIL SORRY) ", id: 1, src: "https://escorenews.com/media/news/_468/n53580.webp", game: CS2, isImg: true, date: "date" },
  { name: "LIL SORRY: «Не называю ников, потому что это не моя ответственность. Я пришёл сказать про себя»", id: 2, src: "https://escorenews.com/media/news/_468/n53512.webp", game: Dota2, isImg: true, date: "date" },
  { name: "Petushara рассказал, как кастера выгнали со студии за расистскую шутку", id: 3, src: "https://escorenews.com/media/news/_468/n53416.webp", game: Pubg, isImg: true, date: "date" },
  { name: "TORONTOTOKYO: «Апаться можно на любой роли. Главное — хорошо играть»", id: 4, src: "https://escorenews.com/media/news/_468/n53220.webp", game: Fortnite, isImg: true, date: "date" },
];
</script>
<style scoped></style>
