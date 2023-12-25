<template>
  <div class="textBlock">
    <h2><slot name="header-extra" /></h2>
    <p><slot /></p>
    <slot name="header-footer" />
  </div>
</template>

<style scoped>
.textBlock {
  display: inline-flex;
  padding: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  border-radius: 5px;
  background: url(~/assets/img/BlockText.png) 50% 50% no-repeat, lightgray -104.931px -96.539px / 200.566% 248.586% no-repeat;
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  line-height: 21px; /* 150% */

  h2 {
    color: rgba(255, 255, 255, 0.8);
    font-size: 21px;
    line-height: normal;
  }
  p {
    line-height: normal;
  }
}
</style>
