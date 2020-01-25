<template>
  <div class="home">
    <div class="video-container">
      <h2>Welcome</h2>
      <video id="video" muted src="home/goku.mp4" autoplay webkit-playsinline playsinline loop></video>
      <div class="overlay1"></div>
      <div class="overlay2"></div>
      <div class="dummy1"></div>
      <div class="dummy2"></div>
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
  max-height: 100vh;
}
h2 {
  white-space: nowrap;
  font-family: "Kaushan Script", cursive !important;
  color: aliceblue;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
  @include pc {
    font-size: 12em;
  }
  @include sp {
    font-size: 6rem;
  }
}

@-webkit-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}

.overlay2 {
  position: absolute;
  transform: skewY(-7deg);
  background: linear-gradient(95deg, rgba(46, 177, 177, 0.5), rgba(108, 123, 255, 0.5), rgba(164, 92, 223, 0.5));  background-size: 600% 600%;
  animation: AnimationName 9s ease infinite;
  z-index: -1;
  width: 100vw;
  @include pc {
    top: 0;
    left: 0;
    height: 70vh;
    top: -16vh;
  }
  @include sp {
      top: -10vh;
      height: 58.5vh;
      right: 0;
  }
}
.overlay1 {
  position: absolute;
  transform: skewY(-7deg);
  transform-origin: bottom left;
  background: linear-gradient(95deg, rgba(164, 177, 46, 0.5), rgba(255, 155, 108, 0.5), rgba(223, 92, 92, 0.5));  background-size: 600% 600%;
  animation: AnimationName 9s ease infinite;
  z-index: -1;
  width: 100vw;
  @include pc {
    bottom: -35vh;
    left: 0;
    height: 70vh;

  }
  @include sp {
      bottom: -10vh;
      height: 58.5vh;
      right: 0;
  }
}
video {
  -o-object-fit: cover;
  object-fit: cover;
  position: absolute;
  z-index: -2;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}

@include pc {
  .video-container { height: 100vh; }
}
@include sp {
  .video-container { height: 100vh; }
}
.dummy1 {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 6vh;
  width: 100vw;
  background: rgb(255, 255, 255);
  z-index: 1003;
}
.dummy2 {
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 5vw;
  background: rgb(255, 255, 255);
  z-index: 1003;
}
</style>
