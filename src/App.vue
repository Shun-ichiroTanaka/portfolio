<template onload="reset();">
<div id="app">
  <Nav></Nav>
  <go-top></go-top>
  <vue-page-transition name="overlay-up-down">
    <transition mode=”out-in”>
      <router-view/>
    </transition>
  </vue-page-transition>
</div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import GoTop from '@inotom/vue-go-top';

export default {
  components: {
    Nav,
    GoTop
  },
    mounted: function () {
    $(document).ready(function () {

    });
  }

}
</script>

<style lang="scss">
  .overlay-left,
  .overlay-right,
  .overlay-top,
  .overlay-bottom {
    background: #7fdbd0 !important;
    z-index: 1000;
  }

  :root {
    // #ACB6E5,#74ebd5,#A7BFE8,#ddd6f3
    --overlay-bg: #ddd6f3 !important;
    --transition-duration: .5s !important;
  }

  #app {
    color: #2c3e50;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .v-enter-active, .v-leave-active {
  transition: opacity 1s;
  }
  .v-enter, .v-leave-to {
    opacity: 0;
  }
  .v-enter {
    transform: translate(0, -120px);
    opacity: 0;
  }
  .v-enter-to {
    opacity: 1;
  }
  .v-enter-active {
    transition: all 1s 0s ease;
  }
  .v-leave {
    transform: translate(0, 0);
    opacity: 1;
  }
  .v-leave-to {
    transform: translate(0, 120px);
    opacity: 0;
  }
  .v-leave-active {
    transition: all 1s 0s ease;
  }
</style>
<style lang="scss">
@media screen and (min-width: 1080px) {
}

@media screen and (min-width: 768px) {

}
</style>
