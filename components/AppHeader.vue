<template>
  <header>
    <div class="navbar bg-base-100">
      <div class="navbar-start lg:w-auto lg:max-w-2xl">
        <a href="/" class="lg:px-4 logo">
          <!-- <img class="h-8 w-auto" :src="GTlogo" alt="GTlogo" /> -->
          <GTlogo class="h-8 w-auto" alt="GTlogo" :fontControlled="false" />
        </a>
      </div>
      <div class="navbar-center hidden lg:flex lg:grow">
        <ul class="menu menu-horizontal px-1 gamemenu">
          <li v-for="item in navigation" :class="[item.current ? 'current' : undefined]">
            <a :key="item.name" :href="item.href" :class="[item.current ? 'text-primary' : 'text-secondary']">
              <component class="w-5" :is="item.logo" :fontControlled="false" />
            </a>

            <ul v-if="item.childrens.length" class="menu menu-vertical lg:menu-horizontal submenu p-0 m-0 pr-4">
              <li v-for="links in item.childrens">
                <a :href="links.href">{{ links.name }}</a>
              </li>
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
      <div class="navbar-end gap-2 lg:w-auto">
        <a href="/">
          <!-- <img class="h-6 w-auto" :src="Gift" alt="Gift" /> -->
          <Gift class="h-5 w-auto" alt="Gift" :fontControlled="false" />
        </a>
        <button class="btn btn-sm" v-if="!sign" @click="onSign">Sign</button>
        <div class="dropdown dropdown-end" v-if="sign">
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
        <button class="btn btn-xs hidden lg:block">13:00 MSK</button>
        <div className="dropdown dropdown-end hidden lg:block">
          <div tabIndex="{0}" role="button" className="btn btn-xs">RU</div>
          <ul tabIndex="{0}" className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-22">
            <li><a>Ru</a></li>
            <li><a>En</a></li>
          </ul>
        </div>
        <label class="swap swap-rotate hidden lg:block">
          <!-- this hidden checkbox controls the state -->
          <input type="checkbox" class="theme-controller" value="synthwave" />
          <!-- sun icon -->
          <svg class="swap-on fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
          <!-- moon icon -->
          <svg class="swap-off fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
        </label>
        <label for="my-drawer" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import GTlogo2 from "@/assets/img/GTlogo2.svg";
import GTlogo from "@/assets/img/GTlogo.svg";
import { Gift, Dota2, CS2, Hs, Lol, Ow } from "@/assets/img/icons/";

const sign = ref(false)
const onSign = () =>{
  sign.value = true
}

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

const isAuth = ref(false);
</script>

<style scoped>
.navbar-start {
  .logo {
    margin-top: -10px;
  }
}

.navbar-center {
  .gamemenu {
    :where(li:not(.menu-title) > *:not(ul):not(details):not(.menu-title)),
    :where(li:not(.menu-title) > details > summary:not(.menu-title)) {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }

    > li {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .submenu {
      display: none;
    }
    .current .submenu {
      display: flex;
      color: #fff;
    }
  }
}

.menu :where(li ul):before {
  display: none;
}
</style>
