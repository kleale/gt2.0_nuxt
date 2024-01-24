<template>
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
          <li><a href="/gt2.0_nuxt/">Index <IconCirclecheck filled/></a></li>
          <li><a href="/gt2.0_nuxt/indexMobile/">Index Mob <IconCirclecheck filled/></a></li>
          <li><a href="/gt2.0_nuxt/dota-2/">Game <IconCirclecheck filled/></a></li>
          <li><a href="/gt2.0_nuxt/matches/">Match List <IconCirclecheck filled/></a></li>
          <li><a href="/gt2.0_nuxt/match/">Match <IconCirclecheck filled/></a></li>
          
          <li><a href="/gt2.0_nuxt/events/">Event List <IconCirclecheck filled/></a></li>
          <li><a href="/gt2.0_nuxt/event/">Event <IconCirclecheck filled/></a></li>

          <li><a href="/gt2.0_nuxt/text/">Text <IconCirclecheck filled/></a></li>
          <li><a href="/news/">News List <IconCirclecheck filled/></a></li>
          <li><a href="/gt2.0_nuxt/newsPage/">News Page <IconCirclecheck filled/></a></li>
          
          <li><a href="/gt2.0_nuxt/players/">Players List <IconCirclecheck filled/></a></li>
          <li><a href="/gt2.0_nuxt/player/">Player <IconCirclecheck filled/></a></li>
          <li><a href="/gt2.0_nuxt/teams/">Teams List</a></li>
          <li><a href="/gt2.0_nuxt/team/">Team</a></li>
        </ul>
      </div>
</template>

<script setup lang="ts">
import { IconCirclecheck } from "@/assets/img/icons/";
</script>