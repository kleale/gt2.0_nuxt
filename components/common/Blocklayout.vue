<template>
  <div>
    <div class="bg-block flex flex-row items-center p-2 rounded-t-md border-x border-t border-gray-800 ">
      <h3 class="text-l font-bold text-white grow pl-2">{{ header }}</h3>
      <div class="flex flex-row items-center content-center">
        <slot name="header-extra" />
      </div>
    </div>
    <div class="border border-gray-800 rounded-b-md bg-[#18181d]">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  header: string;
}>();
</script>
<style scoped>
.bg-block {
  background: rgb(49, 49, 54);
  background: radial-gradient(ellipse at 10% 10%, rgb(42 42 47) 0%, rgb(27 27 33) 100%);
}
</style>
