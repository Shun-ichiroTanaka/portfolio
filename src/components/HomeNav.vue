<template>
    <div class="homenav">
      <div class="nav">
        <div class="icon home"><a href="/"><font-awesome-icon icon="home"></font-awesome-icon></a></div>
        <div class="icon user"><a href="/about"><font-awesome-icon icon="user"></font-awesome-icon></a></div>
        <div class="icon work"><a href="/works"><font-awesome-icon icon="chess-queen"></font-awesome-icon></a></div>
        <div class="icon contact"><a href="/contact"><font-awesome-icon icon="envelope"></font-awesome-icon></a></div>
      </div>
      <div class="navtitle">
        <h1><a href="/">Portfolio</a></h1>
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
  position: absolute;
  box-shadow: 0 1px 3px rgba(160,166,179,.3);  
  background:  rgb(247, 247, 247) !important;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  @include pc {
    top: 0;
    width: 80px;
    height: 100%;
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
  font-family: "Kaushan Script", cursive !important;
  box-shadow: 0 1px 3px rgba(160,166,179,.3);  
  background:  rgb(247, 247, 247) !important;
  width: 100%;
  display: flex;
  align-items: center;
  @include pc {
    justify-content: flex-start;
    height: 60px;
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
        font-size: 2.5rem;
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
    color: #f8b195;
  }
}
.user {
  a {
    color: #f67280;
  }
}
.contact {
  a {
    color:#c06c84;
  }
}
.work {
  a {
    color: #6c5b7b;
  }
}
</style>
