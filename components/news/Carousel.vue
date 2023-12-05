<template>
  <div class="carousel carousel-end w-full">
    <div id="slide1" class="carousel-item relative " v-for="(slide, index) in slides">
      <NewsCardLarge />
      <!-- <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" class="btn btn-circle">❮</a>
        <a href="#slide0" class="btn btn-circle">❯</a>
      </div> -->
    </div>
  </div>
</template>
<script setup lang="ts">
const slides = [
  { name: "0", id: 0 },
  { name: "1", id: 1 },
  { name: "2", id: 2 },
];
</script>
<style scoped></style>
