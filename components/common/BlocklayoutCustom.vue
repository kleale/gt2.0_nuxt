<template>
  <div>
    <div class="bg-block flex flex-row items-center p-2 rounded-t-md border-x border-t border-slate-800">
      <slot name="header" />
    </div>
    <div class="border border-slate-800 rounded-b-md bg-base-100">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped lang="scss">
.bg-block {
  background: rgb(49, 49, 54);
  background: radial-gradient(ellipse at 10% 10%, rgb(42 42 47) 0%, rgb(27 27 33) 100%);
}
</style>
