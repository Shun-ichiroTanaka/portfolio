<template>
  <div id="app" @load="loaded">
      <div id="top">
        <spring-spinner
          :loading="isLoading"
          :animation-duration="3000"
          :size="120"
          color="#00d2bf"
        />
      </div>
      <vue-page-transition name="fade-in-right">
        <router-view/>
      </vue-page-transition>
  </div>
</template>
<script>
  // To use minified css and js files instead of .vue single file components:
  // import 'epic-spinners/dist/lib/epic-spinners.min.css'
  // import {AtomSpinner} from 'epic-spinners/dist/lib/epic-spinners.min.js'

  import { SpringSpinner } from 'epic-spinners'
  export default {
    name: 'app',
    components: {
      SpringSpinner,
      data () {
        return {
            isLoading: true
        }
      },
      methods: {
          loaded () {
              this.isLoading = !this.isLoading
          }
      }
    }
  }
</script>
<style scoped lang="scss">
  #top {
  position: absolute !important;
  top: 50% !important;
  left: 50% !important;
  transform: translateY(-50%) translateX(-50%) !important;
}
</style>