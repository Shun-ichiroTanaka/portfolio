<template>
  <div class="home">
    <div class="video-container">
      <h2>Welcome to My Portfolio</h2>
      <video id="video" muted src="home/goku.mp4" autoplay webkit-playsinline playsinline loop></video>
      <div class="overlay"></div>
      <HomeNav></HomeNav>
    </div>
  </div>
</template>

<script>
import HomeNav from '@/components/HomeNav.vue'
export default {
  name: 'home',
  components: {
    HomeNav
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

.video-container {
  position: relative;
  overflow: hidden;
  height: 50vh;
}
h2 {
  font-size: 4em;
  font-family: "Kaushan Script", cursive !important;
  color: aliceblue;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
}
.overlay {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(45deg, rgba(0,0,0,.3) 50%, rgba(0,0,0,.7) 50%);
  background-size: 3px 3px;
  z-index: -1;
}
video {
  -o-object-fit: cover;
  object-fit: cover;
  position: absolute;
  z-index: -2;
  @include pc {
        height: 95%;
        width: 95%;
        bottom: 0;
        right: 0;
  }
  @include sp {
      margin-top: 10vh;
      height: 80vh;
      width: 100%;
      right: 0;
  }
}

@include pc {
  .video-container { height: 100vh; }
}
@include sp {
  .video-container { height: 100vh; }
}
</style>
