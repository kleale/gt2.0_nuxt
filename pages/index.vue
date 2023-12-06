<template>
  <BannersTopMobile />
  <!-- <NewsCardLarge /> -->
  <NewsCarousel />
  <Tabs/>
  <BlockLayout header="Best matches of the day">
    <template v-for="(match, index) in matches" >
      <MatchesRow :match="match"/>
    </template>
  </BlockLayout>
  <Pagination class="mt-5" />
</template>

<script setup lang="ts">
const matches = [
  { id: 0, t1: "Astralis", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "The Mongolz", t2Icon: "https://escorenews.com/media/logo/_60/t5270.webp", game: "dota2", gameId: "1", score: "1:0", date: "13.12.2023", time: "11:34", isLive: true, map: 1, event_id: 1, eventName: 'ESEA Open Season 47', eIcon: 'https://escorenews.com/media/event/_60/e8382.webp', type: 'BO3' },
  { id: 0, t1: "Dota Geniuses", t1Icon: "/assets/img/none/team.svg", t2: "Flawless Goblins", t2Icon: "https://escorenews.com/media/logo/_60/t56255.webp", game: "dota2", gameId: "1", score: "1:0", date: "13.12.2023", time: "11:34", isLive: false, map: 2, event_id: 2, eventName: 'ESEA Open Season 47', eIcon: 'https://escorenews.com/media/event/_60/e8382.webp', type: 'BO3' },
  { id: 0, t1: "Astralis", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "The Mongolz", t2Icon: "https://escorenews.com/media/logo/_60/t5270.webp", game: "dota2", gameId: "1", score: "1:0", date: "13.12.2023", time: "11:34", isLive: true, map: 1, event_id: 1, eventName: 'ESEA Open Season 47', eIcon: 'https://escorenews.com/media/event/_60/e8382.webp', type: 'BO3' },
  { id: 0, t1: "Dota Geniuses", t1Icon: "/assets/img/none/team.svg", t2: "Flawless Goblins", t2Icon: "https://escorenews.com/media/logo/_60/t56255.webp", game: "dota2", gameId: "1", score: "1:0", date: "13.12.2023", time: "11:34", isLive: false, map: 2, event_id: 2, eventName: 'ESEA Open Season 47', eIcon: 'https://escorenews.com/media/event/_60/e8382.webp', type: 'BO3' },
  { id: 0, t1: "Astralis", t1Icon: "https://escorenews.com/media/logo/_60/t7169.webp", t2: "The Mongolz", t2Icon: "https://escorenews.com/media/logo/_60/t5270.webp", game: "dota2", gameId: "1", score: "1:0", date: "13.12.2023", time: "11:34", isLive: true, map: 1, event_id: 1, eventName: 'ESEA Open Season 47', eIcon: 'https://escorenews.com/media/event/_60/e8382.webp', type: 'BO3' },
  { id: 0, t1: "Dota Geniuses", t1Icon: "/assets/img/none/team.svg", t2: "Flawless Goblins", t2Icon: "https://escorenews.com/media/logo/_60/t56255.webp", game: "dota2", gameId: "1", score: "1:0", date: "13.12.2023", time: "11:34", isLive: false, map: 2, event_id: 2, eventName: 'ESEA Open Season 47', eIcon: 'https://escorenews.com/media/event/_60/e8382.webp', type: 'BO3' },

];
</script>

<style scoped>
</style>