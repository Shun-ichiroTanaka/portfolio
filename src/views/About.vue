<template>
<div id="app">
  <div>
    <vs-row vs-w="12" class="section1">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="6" vs-sm="6" vs-xs="12">
        <h1>About Me</h1>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="6" vs-sm="6" vs-xs="12">
        <img src="/about/about-top.svg" alt="">
      </vs-col>
    </vs-row>
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
