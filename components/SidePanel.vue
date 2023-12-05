<template>
  <div class="drawer-side-inner bg-cyan-950 w-72 h-full">
    <div class="flex border-b-teal-600 items-center content-center p-4">
      <div class="flex grow">
        <!-- <a href="/" class="lg:px-4 logo">
          <GTlogo3 class="h-10 w-auto" alt="GTlogo" :fontControlled="false" />
        </a> -->
        <button class="btn btn-xs btn-outline">13:00 MSK</button>
      </div>
      <div class="flex items-center content-center gap-3">
        <div className="dropdown dropdown-end">
          <div tabIndex="{0}" role="button" className="btn btn-xs btn-outline">RU</div>
          <ul tabIndex="{0}" className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-22">
            <li><a>Ru</a></li>
            <li><a>En</a></li>
          </ul>
        </div>
        <label class="swap swap-rotate">
          <!-- this hidden checkbox controls the state -->
          <input type="checkbox" class="theme-controller" value="synthwave" />
          <!-- sun icon -->
          <svg class="swap-on fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
          <!-- moon icon -->
          <svg class="swap-off fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
        </label>
      </div>
    </div>
    <div class="collapse rounded-none" v-for="item in navigation">
      <input type="radio" name="my-accordion-1" class="min-h-0" :checked="item.current" />
      <div class="collapse-title font-medium px-5 py-3 min-h-0" :class="[item.current && 'bg-cyan-500']">
        <a :key="item.name" :href="item.href" :class="[item.current ? 'text-cyan-950' : 'text-secondary']" 
            class="flex gap-5 italic font-extrabold">
          <component class="w-5" :is="item.logo" :fontControlled="false" />
          <span>{{ item.name }}</span>
        </a>
      </div>
      <div class="collapse-content">
        <ul v-if="item.childrens.length" class="menu menu-vertical lg:menu-horizontal submenu p-0 m-0 pl-7">
          <li v-for="links in item.childrens">
            <a class="italic font-extrabold text-white text-xs py-2" :href="links.href">{{ links.name }}</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- <ul class="menu p-4 w-80 min-h-full gamemenu">
      <li v-for="item in navigation" :class="[item.current ? 'current' : undefined]">
        <a :key="item.name" :href="item.href" :class="[item.current ? 'text-primary' : 'text-secondary']">
          <component class="w-5" :is="item.logo" :fontControlled="false" />
        </a>
        <ul v-if="item.childrens.length" class="menu menu-vertical lg:menu-horizontal submenu p-0 m-0 pr-4">
          <li v-for="links in item.childrens">
            <a :href="links.href">{{ links.name }}</a>
          </li>
        </ul>
      </li>
    </ul> -->
  </div>
</template>

<script setup lang="ts">
import GTlogo3 from "@/assets/img/GTlogo3.svg";
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
      { name: "HUB", href: "/dota-2/", current: false },
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
      { name: "HUB", href: "/dota-2/", current: false },
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

<style scoped>
.logo {
  color: #91cdd7;
}
</style>
