
<template>
  <div class="navbar-end gap-2 flex px-3 lg:px-4 items-center justify-end content-end">
    <!-- dev -->
    <a href="/indexmobile" class="text-primary hover:text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-mobile-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M16 2a3 3 0 0 1 2.995 2.824l.005 .176v14a3 3 0 0 1 -2.824 2.995l-.176 .005h-8a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005h8zm-4 14a1 1 0 0 0 -.993 .883l-.007 .117l.007 .127a1 1 0 0 0 1.986 0l.007 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm1 -12h-2l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h2l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" stroke-width="0" fill="currentColor" />
      </svg>
    </a>
    <div class="dropdown dropdown-end hidden lg:block rounded">
      <div tabindex="0" role="button" class="btn btn-xs btn-ghost text-primary rounded bg-base-300 hover:bg-primary hover:border-primary hover:text-black">
        DEV
        <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
        </svg>
      </div>
      <ul tabindex="0" class="dropdown-content z-[1] menu p-2 text-xs shadow bg-base-100 rounded-box w-40">
        <li><a href="/" >Index <IconCirclecheck filled/></a></li>
        <li><a href="/indexmobile/">Index Mob <IconCirclecheck filled/></a></li>
        <li><a href="/dota-2/">Game <IconCirclecheck filled/></a></li>
        <li><a href="/matches/">Match List <IconCirclecheck filled/></a></li>
        <li><a href="/match/">Match <IconCirclecheck filled/></a></li>
        <li><a href="/dota-2/">Event List</a></li>
        <li><a href="/dota-2/">Event</a></li>
        <li><a href="/text/">Text</a></li>
        <li><a href="/text/">News List</a></li>
        <li><a href="/text/">News Page</a></li>
        <li><a href="/text/">Players List</a></li>
        <li><a href="/text/">Player</a></li>
        <li><a href="/text/">Teams List</a></li>
        <li><a href="/text/">Team</a></li>
      </ul>
    </div>
    <!-- .dev -->
    <a href="#" class="btn btn-sm btn-ghost btn-circle mr-1 text-primary hover:bg-primary hover:text-black">
      <IconGift class="h-5 w-auto" alt="Gift" :fontControlled="false" />
    </a>

    <button class="btn btn-xs rounded text-primary btn-outline bg-base-300 hover:bg-primary hover:border-primary" v-if="!sign" @click="onSign">Sign&nbsp;up</button>
    <!-- login -->
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
    <!-- .login -->
    <button class="btn btn-xs flex-row btn-ghost hidden lg:flex text-primary rounded bg-base-300 hover:bg-primary hover:border-primary hover:text-black">
      <span>13:00 MSK</span>
      <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
      </svg>
    </button>
    <!-- lang -->
    <div class="dropdown dropdown-end hidden lg:block rounded">
      <div tabindex="0" role="button" class="btn btn-xs btn-ghost text-primary rounded bg-base-300 hover:bg-primary hover:border-primary hover:text-black">
        RU
        <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
        </svg>
      </div>
      <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-22">
        <li><a>Ru</a></li>
        <li><a>En</a></li>
      </ul>
    </div>
    <!-- theme -->
    <label name="swap-theme" class="swap swap-rotate hidden lg:inline-grid">
      <!-- this hidden checkbox controls the state -->
      <input id="swap" type="checkbox" class="theme-controller" value="light" />
      <!-- sun icon -->
      <svg id="sun" class="swap-on fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
      <!-- moon icon -->
      <svg id="moon" class="swap-off fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
    </label>
    <label for="my-drawer" class="btn text-primary lg:hidden btn-xs rounded">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { IconGift, IconCirclecheck } from "@/assets/img/icons/";

const sign = ref(false);
const onSign = () => {
  sign.value = true;
};

import { onMounted } from "vue";
import { themeChange } from "theme-change";
onMounted(() => {
  themeChange(false);
});
</script>
<style scoped lang="scss">
.menu :where(li ul):before {
  display: none;
}
</style>
