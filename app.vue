<template>
  <AppHeader />
  <NuxtLayout>
    <NuxtPage />
    <AppFooter />
    <div class="toast">
      <div class="alert alert-info">
        <span>New message arrived.</span>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const title = ref("My App");
const description = ref("My App Description");

// This will be reactive when you change title/description above
useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
  script: [
    {
      src: "/jquery-3.7.1.min.js",
    },
  ],
});
</script>
