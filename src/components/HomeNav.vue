<template>
    <div class="homenav">
      <div class="nav">
        <div class="icon home"><a href="/"><font-awesome-icon icon="home"></font-awesome-icon></a></div>
        <div class="icon user"><a href="/about"><font-awesome-icon icon="user"></font-awesome-icon></a></div>
        <div class="icon work"><a href="/works"><font-awesome-icon icon="chess-queen"></font-awesome-icon></a></div>
        <div class="icon contact"><a href="/contact"><font-awesome-icon icon="envelope"></font-awesome-icon></a></div>
      </div>
      <div class="navtitle">
        <h1>S.tanaka</h1>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HomeNav',
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Cinzel|Kaushan+Script&display=swap");

*,
*:before,
*:after {
  box-sizing: inherit;
}
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
.nav {
  position: fixed;
  z-index: 1000;
  // box-shadow: 0 1px 3px rgba(160,166,179,.3);  
  display: flex;
  justify-content: center;
  vertical-align: middle;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  @include pc {
    top: 0;
    width: 6vw;
    height: 100%;
    margin-top: auto;
    margin-bottom: auto;
    flex-direction: column;
  }
  @include sp {
    bottom: 0;
    width: 100%;
    height: 10vh;
    line-height: 10vh;
    position: fixed;
  }
}
.navtitle {
  position: absolute;
  z-index: 1000;
  font-family: "Kaushan Script", cursive !important;
  width: 100%;
  display: flex;
  align-items: center;
  color: rgb(255, 255, 255);
  @include pc {
    justify-content: flex-start;
    height: 10vh;
    padding-left: 30px;
  }
  @include sp {
    justify-content: center;
    height: 10vh;
    line-height: 10vh;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    @include pc {
      padding-left: 20px;
      color: rgb(255, 255, 255) !important;
      -webkit-text-stroke: .01px #000;
       &:hover {
        font-size: 2.1rem;
        transition: .3s ease;
      }
    }
    @include sp {
      padding-left: 0;
      color: rgb(49, 49, 49) !important;
    }
}
}
.icon {
    @include pc {
      padding-top: 20px;
      padding-bottom: 20px;
      font-size: 1.5rem;
      &:hover {
        font-size: 2.5rem;
        transition: .3s ease;
      }
    }
    @include sp {
      padding-left: 30px;
      padding-right: 30px;
      font-size: 1.7rem;
    }
}
.home {
  a {
    color: #ffffff;
  }
}
.user {
  a {
    color: #ffffff;
  }
}
.contact {
  a {
    color:#fff5f8;
  }
}
.work {
  a {
    color: #ffffff;
  }
}
</style>
