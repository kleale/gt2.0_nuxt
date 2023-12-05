<template>
  <header>
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li v-for="item in navigation">
              <a :key="item.name" :href="item.href" :class="[item.current ? 'current' : undefined]">
                {{ item.name }}
              </a>
            </li>

            <li><a>Item 1</a></li>
            <li>
              <a>Parent</a>
              <ul class="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <a href="/" class="lg:px-4">
          <!-- <img class="h-8 w-auto" :src="GTlogo" alt="GTlogo" /> -->
          <GTlogo class="h-8 w-auto" alt="GTlogo" :fontControlled="false"/>
        </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1 ">
          <li v-for="item in navigation">
            <a :key="item.name" :href="item.href" :class="[item.current ? 'current text-primary' : 'text-default']" >
              <component class="w-5" :is="item.logo" :fontControlled="false"/>
            </a>

            <ul v-if="item.childrens.length" class="menu menu-vertical lg:menu-horizontal submenu">
              <li v-for="links in item.childrens"><a :href="links.href">{{ links.name }}</a></li>
            </ul>

            <!-- drops -->
            <!-- <details v-if="item.childrens.length">
              <summary>
                <component class="w-5" :is="item.logo" :fontControlled="false"/>
              </summary>
              <ul class="p-2">
                <li v-for="links in item.childrens"><a :href="links.href">{{ links.name }}</a></li>
              </ul>
            </details> -->
          </li>
        </ul>
      </div>
      <div class="navbar-end gap-2">
        <label class="cursor-pointer grid place-items-center">
          <input type="checkbox" value="synthwave" class="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
          <svg class="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg class="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </label>
        <a href="/gift">
          <!-- <img class="h-6 w-auto" :src="Gift" alt="Gift" /> -->
          <Gift class="h-6 w-auto" alt="Gift" :fontControlled="false"/>
        </a>
        <button class="btn btn-sm">Sign</button>
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
            <div class="w-8 rounded-full">
              <img alt="username avatar" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a class="justify-between">
                Profile
                <span class="badge badge-neutral">New</span>
              </a>
            </li>
            <li>
              <a class="justify-between">
                Comments
                <span class="badge badge-accent">answers 12</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
        <button class="btn btn-sm">13:00 MSK</button>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-sm m-1">RU</div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-22">
            <li><a>Ru</a></li>
            <li><a>En</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <SidePanel />
</template>

<script setup lang="ts">
import SidePanel from "./SidePanel.vue";
import { ref } from "vue";
import { IconHome } from "@tabler/icons-vue";
import GTlogo2 from "@/assets/img/GTlogo2.svg";
import GTlogo from "@/assets/img/GTlogo.svg";
import { Gift, Dota2, CS2 } from "@/assets/img/icons/";

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
    name: "LOL",
    href: "/dota-2",
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
];

const isAuth = ref(false);
</script>

<style scoped>
.submenu{
  display: none;
}
.current .submenu{
    display: flex;
  }

</style>