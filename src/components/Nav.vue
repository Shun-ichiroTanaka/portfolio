<template>
<div id="nav">
  <svg xmlns="http://www.w3.org/2000/svg" style="display:none;">
    <defs>
      <symbol viewBox="0 0 60 60" id="icon-facebook">
        <path d="M25.8 46.3h6.7V30H37l.6-5.6h-5.1v-2.8c0-1.5.1-2.3 2.2-2.3h2.8v-5.6H33c-5.4 0-7.3 2.7-7.3 7.3v3.4h-3.4V30h3.4v16.3zM30 60C13.4 60 0 46.6 0 30S13.4 0 30 0s30 13.4 30 30-13.4 30-30 30z" />
      </symbol>
      <symbol viewBox="0 0 60 60" id="icon-linkedin">
        <path d="M46.8 44.1V32.4c0-6.3-3.3-9.2-7.8-9.2-3.6 0-5.2 2-6.1 3.4v-2.9h-6.8c.1 1.9 0 20.4 0 20.4h6.8V32.7c0-.6 0-1.2.2-1.7.5-1.2 1.6-2.5 3.5-2.5 2.5 0 3.4 1.9 3.4 4.6V44l6.8.1zM19 20.9c2.4 0 3.8-1.6 3.8-3.5 0-2-1.5-3.5-3.8-3.5s-3.8 1.5-3.8 3.5 1.4 3.5 3.8 3.5zM30 60C13.4 60 0 46.6 0 30S13.4 0 30 0s30 13.4 30 30-13.4 30-30 30zm-7.6-15.9V23.7h-6.8v20.4h6.8z" />
      </symbol>
      <symbol viewBox="0 0 60 60" id="icon-twitter">
        <path d="M34.2 18.3c-2.6 1-4.3 3.4-4.1 6.1l.1 1-1-.1c-3.8-.5-7.1-2.1-10-4.9L17.7 19l-.4 1c-.8 2.3-.3 4.7 1.3 6.3.8.9.6 1-.8.5-.5-.2-.9-.3-1-.2-.1.1.4 2.1.8 2.8.5 1.1 1.7 2.1 2.9 2.7l1 .5h-1.2c-1.2 0-1.2 0-1.1.5.4 1.4 2.1 2.8 3.9 3.5l1.3.4-1.1.7c-1.7 1-3.6 1.5-5.6 1.6-.9 0-1.7.1-1.7.2 0 .2 2.6 1.4 4 1.9 4.5 1.4 9.8.8 13.7-1.6 2.8-1.7 5.7-5 7-8.2.7-1.7 1.4-4.9 1.4-6.4 0-1 .1-1.1 1.2-2.3.7-.7 1.3-1.4 1.5-1.6.2-.4.2-.4-.9 0-1.8.6-2 .6-1.2-.4.6-.7 1.4-1.9 1.4-2.3 0-.1-.3 0-.7.2-.4.2-1.2.5-1.8.7l-1.1.4-1-.7c-.6-.4-1.4-.8-1.8-.9-.9-.4-2.6-.4-3.5 0zM30 60C13.4 60 0 46.6 0 30S13.4 0 30 0s30 13.4 30 30-13.4 30-30 30z" />
      </symbol>
    </defs>
  </svg>

  <div class="hero">
    <header id="masthead" role="banner">
      <div class="container">
        <button class="hamburger hamburger--boring" type="button">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
          <span class="hamburger-label">Menu</span>
        </button>
        <nav id="site-nav" role="navigation">
          <div class="col">
            <h4>Home</h4>
            <ul>
              <li><router-link to="/"><img src="/home/home.svg" alt="" width="200"></router-link></li>
            </ul>
          </div>
          <div class="col">
            <h4>About Me</h4>
            <ul>
              <li><router-link to="/about"><img src="/home/about.svg" alt="" width="200"></router-link></li>
            </ul>
          </div>
          <div class="col">
            <h4>Works</h4>
            <ul>
              <li><router-link to="/works"><img src="/home/works.svg" alt="" width="200"></router-link></li>
            </ul>
          </div>
          <div class="col">
            <h4>Contact</h4>
            <ul>
              <li><router-link to="/contact"><img src="/home/contact.svg" alt="" width="200"></router-link></li>
            </ul>
          </div>
          <div class="col">
            <ul class="social">
              <li><a href=""><svg title="Facebook">
                    <use xlink:href="#icon-facebook"></use>
                  </svg></a></li>
              <li><a href=""><svg title="Twitter">
                    <use xlink:href="#icon-twitter"></use>
                  </svg></a></li>
              <li><a href=""><svg title="LinkedIn">
                    <use xlink:href="#icon-linkedin"></use>
                  </svg></a></li>
            </ul>
          </div>
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
    $(function () {
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
    });
  }
}
</script>

<style lang="scss">
@import "https://fonts.googleapis.com/css?family=Roboto:400,500";

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

// .container {
//   width: 90%;
//   max-width: 1200px;
//   margin-right: auto;
//   margin-left: auto;
// }

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
}
#masthead {
  position: relative;
}
#masthead.is-active {
  background: #fff;
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
  background-color: #fff;
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
