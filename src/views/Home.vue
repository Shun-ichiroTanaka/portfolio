<template>
  <div class="home">
    <div class="video-container">
      <video src="/home/goku.mp4" autoplay loop poster="" playsinline id="goku"></video>
      <HomeNav></HomeNav>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeNav from '@/components/HomeNav.vue'

export default {
  name: 'home',
  components: {
    HomeNav
  },
}
</script>
<style lang="scss">
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

.video-container {
  height: 50vh;
  position: relative;
  overflow: hidden;
}

video {
  -o-object-fit: cover;
  object-fit: cover;
  position: absolute;
  bottom: 0;
  right: 0;
  @include pc {
        height: 95%;
        width: 95%;
  }
  @include sp {
        height: 100%;
        width: 100%;
  }
}

@include pc {
  .video-container { height: 100vh; }
}

@include sp {
  .video-container {height: 100vh; }
};
</style>
