<template>
  <div class="carousel carousel-end w-full">
    <div id="slide1" class="carousel-item relative " v-for="(slide, index) in slides">
      <NewsCardLarge :data="slide.name"/>
      <!-- <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" class="btn btn-circle">❮</a>
        <a href="#slide0" class="btn btn-circle">❯</a>
      </div> -->
    </div>
  </div>
</template>
<script setup lang="ts">
const slides = [
  { name: "TSM рассталась с составом по Dota 2", id: 0 },
  { name: "«Я самый лошара среди всех 322-шеров». Открытое письмо GIGA CHEL (LIL SORRY) ", id: 1 },
  { name: "LIL SORRY: «Не называю ников, потому что это не моя ответственность. Я пришёл сказать про себя»", id: 2 },
  { name: "Petushara рассказал, как кастера выгнали со студии за расистскую шутку", id: 2 },
  { name: "TORONTOTOKYO: «Апаться можно на любой роли. Главное — хорошо играть»", id: 2 },
];
</script>
<style scoped></style>
