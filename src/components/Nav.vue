<template>
<div id="nav">
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
            <h4>About Me</h4>
            <ul>
              <li>
                <a href="/about"><img src="/home/about.svg" alt="" width="200"></a>
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
          <div class="col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="/contact"><img src="/home/contact.svg" alt="" width="200"></a>
              </li>
            </ul>
          </div>
          <ul class="social">
            <li><a href="https://github.com/Shun-ichiroTanaka/" target="_blank" rel="noopener">
                <svg class="main__svg" viewBox="0 0 496 512">
                  <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg></a></li>
            <li><a href="https://twitter.com/tana_fe" target="_blank" rel="noopener">
                <svg class="main__svg" viewBox="0 0 512 512">
                  <title>Follow me on Twitter</title>
                  <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
              </a></li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</div>
</template>

<script>
export default {
  name: 'Nav',
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

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  font-family: "Roboto", sans-serif !important;
  font-size: 100%;
  line-height: 1.5;
}

header {
  max-width: 100vw !important;
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
  width: 100%;
  font-family: "Roboto", sans-serif !important;
}

// /*
// Blueish tint overlay
// */
.hero:after {
  content: "";
  position: absolute;
  top: 0;
  width: 100vw;
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
  background-image: linear-gradient(to top, #edf0f3 0%, white 100%);
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
  top: 15px;
  left: 15px;
  float: left;
  display: inline-block;
  overflow: visible;
  padding: 10px 0;
  padding: 0;
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
  background-color: rgb(88, 88, 88);
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
  color: #000;
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
  padding-top: 2.5em;
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
    color: rgb(80, 202, 162);
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
    padding: 2.5em;
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
