<template>
  <div class="home">
    <HomeParticle></HomeParticle>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeParticle from '@/components/HomeParticle.vue'

export default {
  name: 'home',
  components: {
    HomeParticle
  }
}
</script>
