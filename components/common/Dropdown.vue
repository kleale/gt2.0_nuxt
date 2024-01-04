<template>
  <details class="dropdown flex flex-1">
    <summary id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" class="flex text-base-content bg-zinc-800 hover:bg-sky-950 focus:ring-1 cursor-pointer focus:outline-none focus:primary rounded-md text-sm px-2 py-1 text-center items-center" type="button">
      <span class="flex flex-1">{{ drop.button }}</span>
      <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
      </svg>
    </summary>
    <!-- Dropdown menu -->
    <ul class="menu text-sm z-10 mt-1 p-1 rounded shadow dropdown-content w-48 bg-zinc-800 divide-gray-600" aria-labelledby="dropdownDividerButton">
      <template v-for="(item, index) in drop.items">
        <li>
          <a href="#" class="block px-2 py-1 hover:bg-zinc-700 hover:text-white">Item</a>
        </li>
      </template>
    </ul>
  </details>
</template>
<script setup lang="ts">
interface IItems {
  label: string;
  id: number;
}
interface IDrop {
  button: string;
  items: IItems[];
}
const props = defineProps<{
  drop: IDrop;
}>();
</script>
<style scoped></style>
