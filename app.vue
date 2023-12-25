<template>
  <div data-theme="gtTheme">
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
  </div>
</template>
