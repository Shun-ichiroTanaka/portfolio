<template>
  <div class="home">
    <div class="video-container">
      <video src="/home/goku.mp4" autoplay loop poster="" playsinline id="goku"></video>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home'
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
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}

@include pc {
  .video-container { height: 100vh; }
}

@include sp {
  .video-container {height: 100vh; }
};
</style>
