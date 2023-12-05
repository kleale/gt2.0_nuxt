<template>
  <BannersTopMobile />
  <!-- <NewsCardLarge /> -->
  <NewsCarousel />
  <div class="flex items-center content-center justify-center">
    <div role="tablist" class="tabs tabs-boxed tabs-lg flex flex-row">
      <span v-for="(link, index) in menu" class="flex flex-row">
        <a role="tab" class="tab" :class="link.title === selectedLink && 'tab-active'" :key="index" :href="link.sectionId" @click="isActive(link.title)">{{ link.title }}</a>
        <div class="divider divider-horizontal" v-if="index < menu.length - 1"></div>
      </span>
    </div>
  </div>

</template>

<script setup lang="ts">
const selectedLink = ref("Matches");
const isActive = (title: string) => {
  selectedLink.value = title;
};
const menu = [
  {
    title: "Matches",
    sectionId: "#",
  },
  {
    title: "Events",
    sectionId: "#",
  },
  {
    title: "News",
    sectionId: "#",
  },
];
</script>

<style scoped>
.tabs-boxed {
  padding: 0;
  border-radius: 5px;
  border: 1px solid #1f2328;
  background: #1a1a20;
  .tab {
    border: 0;
    border-radius: 5px;
    font-weight: 700;
    color: white;

    &.tab-active{
      background: #2C96C3;
      color: white;
    }
  }
  .divider {
    margin: 15px 0;

  }
}
</style>
