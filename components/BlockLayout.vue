<template>
  <div class="flex flex-col md:flex-row items-center p-2 rounded-t-md border-x border-t border-gray-300 dark:border-gray-700">
    <h3 class="text-l font-bold dark:text-white grow pl-3 w-full pb-2 md:pb-0">{{ header }}</h3>
    <div class="flex flex-col md:flex-row w-full">
      <SelectGame class="pl-2 pb-2 md:w-40 md:pb-0" />
      <SelectTeam class="pl-2 pb-2 md:w-40 md:pb-0" />
      <SelectEvent class="pl-2 pb-2 md:w-40 md:pb-0" />
    </div>
  </div>
  <div class="border border-gray-300 dark:border-gray-700 rounded-b-md">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  header: string;
  game?: string;
}>();
</script>
