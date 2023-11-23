<template>
  <header>
    <nav class="flex space-x-4">
      <ul>
        <li v-for="item in navigation">
          <a :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
        </li>
      </ul>
    </nav>
  </header>
  <SidePanel />
</template>

<script setup lang="ts">
import SidePanel from "./SidePanel.vue";
import { ref } from "vue";
import { IconHome } from "@tabler/icons-vue";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "working", href: "/working", current: false },
];

const isAuth = ref(false);
</script>
