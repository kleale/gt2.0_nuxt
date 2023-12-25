<template>
  <div class="min-h-full">
    <AppHeader />
    <div class="drawer drawer-end">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <!-- Page content here -->
        <main class="mx-auto max-w-7xl">
          <slot />
        </main>
      </div>
      <div class="drawer-side top-16 z-20">
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