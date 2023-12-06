<template>
  <div class="carousel carousel-end w-full mb-5 gap-4">
    <div id="slide1" class="carousel-item relative " v-for="(slide, index) in slides">
      <NewsCardLarge :data="slide"/>
      <!-- <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" class="btn btn-circle">❮</a>
        <a href="#slide0" class="btn btn-circle">❯</a>
      </div> -->
    </div>
  </div>
</template>
<script setup lang="ts">

import { Dota2, CS2, Hs, Lol, Ow, Pubg, Fortnite } from "@/assets/img/icons/";
const slides = [
  { name: "TSM рассталась с составом по Dota 2", id: 0, src:'https://escorenews.com/media/news/_468/n53609.webp', game: Dota2 },
  { name: "«Я самый лошара среди всех 322-шеров». Открытое письмо GIGA CHEL (LIL SORRY) ", id: 1, src:'https://escorenews.com/media/news/_468/n53580.webp', game:CS2  },
  { name: "LIL SORRY: «Не называю ников, потому что это не моя ответственность. Я пришёл сказать про себя»", id: 2, src:'https://escorenews.com/media/news/_468/n53512.webp', game:Dota2  },
  { name: "Petushara рассказал, как кастера выгнали со студии за расистскую шутку", id: 3, src:'https://escorenews.com/media/news/_468/n53416.webp', game: Pubg  },
  { name: "TORONTOTOKYO: «Апаться можно на любой роли. Главное — хорошо играть»", id: 4, src:'https://escorenews.com/media/news/_468/n53220.webp', game:Fortnite  },
];
</script>
<style scoped></style>
