<template>
    <div class="max-w-6xl relative" style="margin: 0 auto">
      <!-- <noindex>
        <a rel="nofollow" class="abr yaadstracker" target="_blank" href="#" id="esn-01"
          style="background-image:url(https://escorenews.com/media/a/banner189.gif)">
        </a>
        <a rel="nofollow" class="abr abr2 yaadstracker" target="_blank" href="#" id="esn-02"
          style="background-image:url(https://escorenews.com/media/a/banner189.gif)">
        </a>
      </noindex> -->
      <noindex>
        <a rel="nofollow" class="bgad" target="_blank" href="/ru/go?n=201"
          style="background:#000 url(https://ggscore.com/media/a/banner201.gif) no-repeat scroll 50% 0px;">
        </a>
      </noindex>
    </div>
    <noindex>
      <div class="br-mobile" style="position: relative;z-index: 2;">
        <a rel="nofollow" href="/ru/go?n=204" target="_blank">
          <img src="https://ggscore.com/media/a/banner206.gif" width="100%">
        </a>
      </div>
    </noindex>
</template>

<style scoped lang="scss">
.br-mobile{
  display: none;
}
.br-mobile img{
  width: 100%;
}
@media (max-width: 768px) {
  .br-mobile{
    display: block;
  }
}
@media (max-width: 1599px) {
  .bgad {
    background-size: 1880px !important;
  }
}

.bgad {
  display: block;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0px;
  left: 50%;
  right: 0;
  bottom: 0;
  /* z-index: 1; */
  transform: translate(-50%, 0);
}
</style>