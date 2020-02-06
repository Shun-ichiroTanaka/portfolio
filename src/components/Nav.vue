<template>
<div id="nav" v-on:click="site-nav" role="navigation">
  <div class="hero">
    <header id="masthead" role="banner">
      <div class="container">
        <button class="hamburger hamburger--boring" type="button">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
          <span class="hamburger-label">Menu</span>
        </button>
        <nav id="site-nav" v-on:click="site-nav" role="navigation">
          <div class="col">
            <h4>Home</h4>
            <ul>
              <li>
                <a href="/"><img src="/home/home.svg" alt="" width="200"></a>
              </li>
            </ul>
          </div>
          <div class="col">
            <h4>Works</h4>
            <ul>
              <li>
                <a href="/works"><img src="/home/works.svg" alt="" width="200"></a>
              </li>
            </ul>
          </div>
          <!-- sns -->
          <sns></sns>
        </nav>
      </div>
    </header>
  </div>
</div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script>
import sns from '@/components/sns.vue';

export default {
  name: 'Nav',
  components: {
    sns
  },
  mounted: function () {
    $('body').addClass('js');

    var $hamburger = $('.hamburger'),
      $nav = $('#site-nav'),
      $masthead = $('#masthead');

    $hamburger.click(function () {
      $(this).toggleClass('is-active');
      $nav.toggleClass('is-active');
      $masthead.toggleClass('is-active');
      return false;
    })

  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Julius+Sans+One&display=swap');
$font-title: 'Julius Sans One', sans-serif;

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

body {
  max-width: 100vw !important;
  padding: 0;
  margin: 0;
  font-family: $font-title;
  font-size: 100%;
  line-height: 1.5;
}

header {
  width: 100vw !important;
}

.container {
  position: fixed;
  width: 100%;
  max-width: 100vw;
  margin-right: auto;
  margin-left: auto;
}

.container:after {
  content: "";
  clear: both;
  display: table;
}



// /*
// Full screen background image
// */
.hero {
  position: absolute;
  top: 0 !important;
  left: 0;
  width: 100vw;
  font-family: $font-title;
}

// /*
// Blueish tint overlay
// */
.hero:after {
  content: "";
  position: relative;
  top: 0;
  height: 100%;
  // background: rgba(161, 83, 83, .5);
}

// /*
// Making sure everything in .hero sits above our :after elements
// */
.hero * {
  position: relative;
  z-index: 1000;
  margin: 0 auto;
}

#masthead {
  position: relative;
}

#masthead.is-active {
  background-image: linear-gradient(to top, white 0%, #f2f2f2 100%);
  box-shadow: 0 4px 4px rgba(0, 0, 0, .15);
}

// /*
// Using this method because browsers can transition opacity very cheaply as opposed to using background: rgba
// https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/
// */
#masthead:after {
  content: "";
  position: relative;
  top: 0;
  width: 100%;
  height: 100%;
  transition: opacity .3s ease;
  opacity: 0;
}

#masthead.is-active:after {
  opacity: 1;
}

.hamburger {
  float: left;
  display: inline-block;
  overflow: visible;
  padding: 30px;
  color: inherit;
  font: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  outline: none;
  transition: opacity .15s;
  cursor: pointer;

  -webkit-appearance: none;
}

.hamburger:hover {
  opacity: .7;
}

.hamburger-box {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 24px;
}

.hamburger-inner {
  top: 50%;
  display: block;
  margin-top: -2px;
}

.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
  position: relative;
  width: 30px;
  height: 2px;
  background-color:rgb(46, 46, 46);
  border-radius: 4px;
  transition-duration: .15s;
  transition-property: -webkit-transform;
  transition-property:         transform;
  transition-property:         transform, -webkit-transform;
  transition-timing-function: ease;
}

#masthead.is-active .hamburger-inner,
#masthead.is-active .hamburger-inner::before,
#masthead.is-active .hamburger-inner::after {
  background-color: #000;
}

.hamburger-inner::before,
.hamburger-inner::after {
  content: "";
  display: block;
}

.hamburger-inner::before {
  top: -6px;
}

.hamburger-inner::after {
  bottom: -6px;
}

/*
 * Boring
 */
.hamburger--boring .hamburger-inner,
.hamburger--boring .hamburger-inner::before,
.hamburger--boring .hamburger-inner::after {
  transition-property: none;
}

.hamburger--boring.is-active .hamburger-inner {
          transform: rotate(45deg);

  -webkit-transform: rotate(45deg);
}

.hamburger--boring.is-active .hamburger-inner::before {
  top: 0;
  opacity: 0;
}

.hamburger--boring.is-active .hamburger-inner::after {
  bottom: 0;
          transform: rotate(-90deg);

  -webkit-transform: rotate(-90deg);
}

.hamburger-label {
  display: inline-block;
  margin-left: .3125em;
  // color: #fff;
  font-weight: 700;
  line-height: 1;
  letter-spacing: .08em;
  text-transform: uppercase;
}

#masthead.is-active .hamburger-label {
  color: #17181B;
}

.hamburger-box,
.hamburger-label {
  display: inline-block;
  vertical-align: middle;
}

#site-nav {
  clear: both;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 0;
  padding-top: 2em;
}

#site-nav.is-active {
  overflow: visible;
  height: auto;
}

#site-nav .col {
  padding: 1.5em;
}

.main {
  &__svg {
    width: 1.2rem;
    height: 1.2rem;
    margin: 0 10px;
    color: rgb(82, 82, 82);
    opacity: .6;

    &:hover {
      width: 1.4rem;
      height: 1.4rem;
      transition: .1s;
    }
  }
}

@media screen and (min-width: 550px) {
  #site-nav {
    flex-direction: row;
    flex-wrap: wrap;
  }

  #site-nav .col {
    flex: 0 0 50%;
  }
}

@media screen and (min-width: 768px) {
  #site-nav .col {
    flex: 0 0 33.333333333%;
  }
}

@media screen and (min-width: 960px) {
  #masthead {
    position: relative;
    padding: 1em;
  }

  #site-nav {
    flex-wrap: nowrap;
  }

  #site-nav .col {
    flex: 0 0 20%;
  }

  #site-nav .col:last-child {
    display: flex;
    justify-content: flex-end;
  }
}

#site-nav h4 {
  letter-spacing: .05em;
  text-transform: uppercase;
}

#site-nav ul {
  margin-top: 1em;
  list-style-type: none;
}

#site-nav li {
  padding-top: .5em;
  margin-bottom: .3125em;
}

#site-nav li a {
  text-decoration: none;
  transition: color .3s ease;
}

#site-nav .social {
  display: flex;
  overflow: hidden;
  margin: 0;
}

#site-nav .social li {
  // float: left;
  width: 32px;
  height: 32px;
  margin: .3em;
}

#site-nav .social li svg {
  display: block;
  width: 100%;
  height: 100%;
  transition: fill .3s ease;

  fill: #86cfdd;
}

#site-nav .social li:hover svg {
  fill: #686d6e;
}

#masthead.is-active #masthead-search button {
  color: #b4b9ba;
}

#masthead.is-active #masthead-search input {
  border-color: #b4b9ba;
}

#masthead-search ::-webkit-input-placeholder {
  color: #fff;
}

#masthead-search :-moz-placeholder {
  color: #fff;
  opacity: 1;
}

#masthead-search ::-moz-placeholder {
  color: #fff;
  opacity: 1;
}

#masthead-search :-ms-input-placeholder {
  color: #fff;
}

#masthead.is-active #masthead-search ::-webkit-input-placeholder {
  color: #b4b9ba;
}

#masthead.is-active #masthead-search :-moz-placeholder {
  color: #b4b9ba;
  opacity: 1;
}

#masthead.is-active #masthead-search ::-moz-placeholder {
  color: #b4b9ba;
  opacity: 1;
}

#masthead.is-active #masthead-search :-ms-input-placeholder {
  color: #b4b9ba;
}

#masthead .col {
  opacity: 0;
}

#masthead.is-active .col {
  transform: translateY(40px);
  animation: fade-in-stagger .8s ease forwards;
  transition: opacity .3s ease;
}

#masthead.is-active .col:nth-child(1) {
  -webkit-animation-delay: 0;
}

#masthead.is-active .col:nth-child(2) {
  -webkit-animation-delay: .1s;
}

#masthead.is-active .col:nth-child(3) {
  -webkit-animation-delay: .2s;
}

#masthead.is-active .col:nth-child(4) {
  -webkit-animation-delay: .3s;
}

#masthead.is-active .col:nth-child(5) {
  -webkit-animation-delay: .4s;
}

@keyframes fade-in-stagger {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
