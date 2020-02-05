<template>
  <div class="home">
  <Nav></Nav>
  <!-- <HomeParticle></HomeParticle> -->
  <Slide></Slide>
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script src="https://fonts.googleapis.com/css?family=Poppins:400,700"></script>
<script src="https://fonts.googleapis.com/css?family=Montserrat:300,400,600"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.3.0/velocity.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.3.0/velocity.ui.js"></script>

<script>
import Nav from '@/components/Nav.vue'
import Slide from '@/components/slide1.vue'
// import HomeParticle from '@/components/HomeParticle.vue'

export default {
  name: 'top',
  components: {
    Nav,
    Slide,
    // HomeParticle
  }
}
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Cinzel|Kaushan+Script&display=swap");
// メディアクエリ
$media: 767px;
@mixin pc {
  @media (min-width: ($media)) {
    @content;
  }
}
@mixin sp {
  @media (max-width: ($media)) {
    @content;
  }
}
</style>
