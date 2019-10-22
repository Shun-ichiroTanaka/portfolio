<template>
<div id="app">
  <Nav></Nav>
  <vue-scroll-progress-bar @complete="handleCoplete" height="0.3rem" backgroundColor='linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)' zIndex="10000" />
  <go-top bg-color="#2C3E50" :radius="0" alt="TOP"></go-top>
  <vue-page-transition name="overlay-up-down">
    <transition>
      <router-view />
    </transition>
  </vue-page-transition>
</div>
</template>

<script>
import Nav from '@/components/Nav.vue';
import GoTop from '@inotom/vue-go-top';
import jQuery from 'jquery'
window.$ = window.jQuery = require('jquery')

export default {
  components: {
    Nav,
    GoTop,
  },
  data() {
    return {
      count: 4,
      icons: ["fa fa-github", "fa fa-comment", "fa fa-code", "fa fa-envelope"],
      list: [{
          'isLink': true,
          url: "/"
        },
        {
          'isLink': true,
          url: "/about"
        },
        {
          'isLink': true,
          url: "/works"
        }, {
          'isLink': true,
          url: "/contact"
        }
      ],
      backgroundColor: '#17c4c5',
      color: '#ffffff',
      position: 'top-left',
      isOpenNewTab: false
    }
  },
  computed: {
    getCount() {
      return Number(this.count)
    },
    getIsOpenNewTab() {
      return Boolean(this.isOpenNewTab)
    }
  },
  methods: {
    print(key) {
      if (key === 3) {
        console.log('please send me an email')
      }
      if (key === 0) {
        window.open('https://github.com/AshleyLv/vue-quick-menu')

      }
    }
  },
  mounted: function () {
    $(document).ready(function () {});

  }

}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");

html,
body,
div,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
ol,
ul,
li,
form,
legend,
label,
table,
header,
footer,
nav,
section,
figure {
  padding: 0;
  margin: 0;
}

p {
  font-family: "Open Sans", sans-serif !important;
}

.overlay-left,
.overlay-right,
.overlay-top,
.overlay-bottom {
  background: #7FDBD0 !important;
  z-index: 1000;
}

.custom.char.typed {
  color: #2c3e50 !important;
}

:root {
  --transition-duration: .5s !important;
}

#app {
  color: #2c3e50;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#mt {
  &100 {
    margin-top: 100px;
  }

  &50 {
    margin-top: 50px;
  }

}

.section1 {
  display: block;
  height: 300px;
  // margin-top: 70px;
  ;

  & img {
    max-width: 80vw;
  }
}

#gotop {
  background: #000 !important;
}

// =============================== vue-transition
.v-enter-active,
.v-leave-active {
  transition: opacity 1s;
}

.v-enter,
.v-leave-to {
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

// =============================== vue-transition

@media screen and (min-width: 1080px) {
  .section1 {
    & img {
      max-width: 450px;
    }
  }

}

@media screen and (min-width: 768px) {}
</style>
