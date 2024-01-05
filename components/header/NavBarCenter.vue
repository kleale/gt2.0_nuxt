<template>
    <div class="navbar-center hidden lg:flex lg:grow">
        <ul class="menu menu-horizontal px-1 gamemenu">
          <li v-for="item in navigation" :class="[item.current ? 'current' : undefined]">
            <a :key="item.name" :href="item.href" :class="[item.current ? 'text-primary' : 'text-secondary']" class="hover:text-primary">
              <component class="w-5" :is="item.logo" :fontControlled="false" />
            </a>

            <ul v-if="item.childrens.length" class="menu menu-vertical lg:menu-horizontal submenu p-0 m-0 pr-4">
              <li v-for="links in item.childrens">
                <a :href="links.href" class="text-base-content hover:text-primary">{{ links.name }}</a>
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

<style scoped lang="scss">
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
    }
  }
}

.menu :where(li ul):before {
  display: none;
}
</style>