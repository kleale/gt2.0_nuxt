<template>
  <header class="navbar flex justify-center text-primary sticky top-0 z-50 bg-base-100 bg-opacity-60 backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)] shadow-sm">
    <div class="flex w-full max-w-7xl self-center">
      <div class="navbar-start lg:w-auto">
        <a href="/" class="px-3 h-8 logo flex text-primary">
          <GTlogo2 class="w-17" alt="GTlogo" :fontControlled="false" />
        </a>
      </div>
      <HeaderNavBarCenter/>
      <HeaderNavBarEnd/>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import GTlogo2 from "@/assets/img/GTlogo2.svg";
import { Dota2, CS2, Hs, Lol, Ow } from "@/assets/img/icons/";

const sign = ref(false);
const onSign = () => {
  sign.value = true;
};

const navigation = [
  {
    name: "DOTA2",
    href: "/dota-2",
    current: true,
    logo: Dota2,
    childrens: [
      { name: "Matches", href: "/dota-2/", current: false },
      { name: "Events", href: "/dota-2/", current: false },
      { name: "News", href: "/dota-2/", current: false },
      { name: "Teams", href: "/dota-2/", current: false },
      { name: "Players", href: "/dota-2/", current: false },
      { name: "Vods", href: "/dota-2/", current: false },
    ],
  },
  {
    name: "CS2",
    href: "/",
    current: false,
    logo: CS2,
    childrens: [
      { name: "Matches", href: "/dota-2/", current: false },
      { name: "Events", href: "/dota-2/", current: false },
      { name: "News", href: "/dota-2/", current: false },
      { name: "Teams", href: "/dota-2/", current: false },
      { name: "Players", href: "/dota-2/", current: false },
      { name: "Vods", href: "/dota-2/", current: false },
    ],
  },
  {
    name: "LOL",
    href: "/",
    current: false,
    logo: Lol,
    childrens: [],
  },
  {
    name: "Hs",
    href: "/",
    current: false,
    logo: Hs,
    childrens: [],
  },
  {
    name: "Overwatch",
    href: "/",
    current: false,
    logo: Ow,
    childrens: [],
  },
];
</script>

<style lang="scss" scoped>
.navbar-start {
  .logo {
    margin-top: -4px;
  }
}

.menu :where(li ul):before {
  display: none;
}
</style>
