<template>
  <div class="drawer drawer-end">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->
      <slot />
    </div>
    <div class="drawer-side top-16">
      <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
      <SidePanel />
    </div>
  </div>
</template>
