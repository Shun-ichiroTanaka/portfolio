<template>
<div id="app">
  <div>
    <vs-row vs-w="12" class="section1">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="6" vs-sm="6" vs-xs="12">
        <h1>ABout Me</h1>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="6" vs-sm="6" vs-xs="12">
        <img src="/about/about-top.svg" alt="">
      </vs-col>
    </vs-row>
  </div>

  <div id="caption2" style="display:none">
    <h4>Bowness Bay</h4>
    <p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy I was passing the right place at the right time....</p>
  </div>
  <div class="caption3" style="display:none">
    <h4>Sunset Serenity</h4>
    <p>A gorgeous Sunset tonight captured at Coniston Water....</p>
  </div>

  <div id="captions">
    <a href="/works/work01.jpg" data-sub-html="<h4>Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>">
      <img src="/works/work01.jpg" />
    </a>
    <a href="/works/work02.jpg" data-sub-html="#caption2">
      <img src="/works/work02.jpg" />
    </a>
    <a href="/works/work03.jpg" data-sub-html=".caption3">
      <img src="/works/work03.jpg" />
    </a>
    ...
  </div>

</div>
</template>

<script>
import jQuery from 'jquery'
window.$ = window.jQuery = require('jquery')

export default {
  mounted: function () {
    $(document).ready(function () {
      lightGallery(document.getElementById('captions'));
    });

  }

}
</script>

<style scoped lang="scss">

</style>
<style lang="scss">
@media screen and (min-width: 1080px) {}

@media screen and (min-width: 768px) {}
</style>
