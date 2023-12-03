<template>
  <header>
    <nav class="flex space-x-4">
      <ul>
        <li v-for="item in navigation">
          <a :key="item.name" :href="item.href" :class="[item.current ? 'current' : undefined]">
            {{ item.name }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
  <button class="btn">Hello daisyUI</button>
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
