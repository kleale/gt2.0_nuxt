<template>
  <div class="defaultLayout min-h-full">
    <div class="drawer drawer-end">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <!-- Page content here -->
        <main class="mx-auto max-w-7xl">
          <slot />
        </main>
      </div>
      <div class="drawer-side z-50">
        <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
        <SidePanel />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  // bodyAttrs: {
  //   class: 'h-full',
  // },
  // htmlAttrs: {
  //   class: 'h-full',
  // },
});
</script>
