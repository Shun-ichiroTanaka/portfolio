<template>
<div id="slide">
<main>
<section class="slides"> 
  
  <section class="slides-nav">
    <nav class="slides-nav__nav">
      <button class="slides-nav__prev js-prev">Prev</button>
      <button class="slides-nav__next js-next">Next</button>
    </nav>
  </section>

  <section class="slide is-active">
    <div class="slide__content">
      <figure class="slide__figure"><div class="slide__img" style="background-image: url(/home/slider1.jpg"></div></figure>
      <header class="slide__header">
        <h2 class="slide__title">
          <span class="title-line"><span>Welcome to</span></span>
          <span class="title-line">
            <span>
              <vue-typer :text='["My Portfolio",]'
                :repeat='Infinity'
                :shuffle='false'
                initial-action='typing'
                :pre-type-delay='2000'
                :type-delay='100'
                :pre-erase-delay='2000'
                :erase-delay='100'
                erase-style='backspace'
                :erase-on-complete='true'
                caret-animation='smooth'
                id="vue-typer">
              </vue-typer>
            </span>
          </span>
        </h2>
      </header>
    </div>
  </section>

  <section class="slide">
    <div class="slide__content">
      <figure class="slide__figure"><div class="slide__img" style="background-image: url(/home/slider2.jpg)"></div></figure>
      <header class="slide__header">
        <h2 class="slide__title">
          <span class="title-line"><span>I'm Tana,</span></span>
          <span class="title-line">
            <span>
              <vue-typer :text='["Front-end engineer",]'
                :repeat='Infinity'
                :shuffle='false'
                initial-action='typing'
                :pre-type-delay='2000'
                :type-delay='100'
                :pre-erase-delay='2000'
                :erase-delay='100'
                erase-style='backspace'
                :erase-on-complete='true'
                caret-animation='smooth'
                id="vue-typer">
              </vue-typer>
            </span>
          </span>
        </h2>
      </header>
    </div>
  </section>

  <section class="slide">
    <div class="slide__content">
      <figure class="slide__figure"><div class="slide__img" style="background-image: url(/home/slider3.jpg)"></div></figure>
      <header class="slide__header">
        <h2 class="slide__title">
          <span class="title-line"><span>most i love is </span></span>
          <span class="title-line">
            <span>
              <vue-typer :text='["php and js",]'
                :repeat='Infinity'
                :shuffle='false'
                initial-action='typing'
                :pre-type-delay='2000'
                :type-delay='100'
                :pre-erase-delay='2000'
                :erase-delay='100'
                erase-style='backspace'
                :erase-on-complete='true'
                caret-animation='smooth'
                id="vue-typer">
              </vue-typer>
            </span>
          </span>
        </h2>
      </header>
    </div>
  </section>

  <section class="slide">
    <div class="slide__content">
      <figure class="slide__figure"><div class="slide__img" style="background-image: url(/home/slider4.jpg)"></div></figure>
      <header class="slide__header">
        <h2 class="slide__title">
          <span class="title-line"><span>there is a will,</span></span>
          <span class="title-line">
            <span>
              <vue-typer :text='["there is a way.",]'
                :repeat='Infinity'
                :shuffle='false'
                initial-action='typing'
                :pre-type-delay='2000'
                :type-delay='100'
                :pre-erase-delay='2000'
                :erase-delay='100'
                erase-style='backspace'
                :erase-on-complete='true'
                caret-animation='smooth'
                id="vue-typer">
              </vue-typer>
            </span>
          </span>
        </h2>
      </header>
    </div>
  </section>
</section>
</main>
</div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script src="https://fonts.googleapis.com/css?family=Montserrat:700|Space+Mono"></script>
<script>

export default {
  name: 'Slide',
  mounted: function() {
        var s = null;
        var SliceSlider = {
          
          /**
           * Settings Object
           */
          settings: {
            delta:              0,
            currentSlideIndex:  0,
            scrollThreshold:    40,
            slides:             $('.slide'),
            numSlides:          $('.slide').length,
            navPrev:            $('.js-prev'),
            navNext:            $('.js-next'),
          },
          
          /* Init */      
          init: function() {
            s = this.settings;
            this.bindEvents();
          },
          
          /**
           * Bind our click, scroll, key events
           */
          bindEvents: function(){
            // Scrollwheel & trackpad
            s.slides.on({
              'DOMMouseScroll mousewheel' : SliceSlider.handleScroll
            });
            // On click prev
            s.navPrev.on({
              'click' : SliceSlider.prevSlide
            });
            // On click next
            s.navNext.on({
              'click' : SliceSlider.nextSlide
            });
            // On Arrow keys
            $(document).keyup(function(e) {
              // Left or back arrows
              if ((e.which === 37) ||  (e.which === 38)){
                SliceSlider.prevSlide();
              }
              // Down or right
              if ((e.which === 39) ||  (e.which === 40)) {
                SliceSlider.nextSlide();
              }
            });
          },
          
          /** 
           * Interept scroll direction
           */
          handleScroll: function(e){
            // Scrolling up
            if (e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0) { 
              s.delta--;
              if ( Math.abs(s.delta) >= s.scrollThreshold) {
                SliceSlider.prevSlide();
              }
            }
            // Scrolling Down
            else {
              s.delta++;
              if (s.delta >= s.scrollThreshold) {
                SliceSlider.nextSlide();
              }
            }
            // Prevent page from scrolling
            return false;
          },

          /**
           * Show Slide
           */
          showSlide: function(){ 
            // reset
            s.delta = 0;
            // Bail if we're already sliding
            if ($('body').hasClass('is-sliding')){
              return;
            }
            // Loop through our slides
            s.slides.each(function(i, slide) {

              // Toggle the is-active class to show slide
              $(slide).toggleClass('is-active', (i === s.currentSlideIndex)); 
              $(slide).toggleClass('is-prev', (i === s.currentSlideIndex - 1)); 
              $(slide).toggleClass('is-next', (i === s.currentSlideIndex + 1)); 
              
              // Add and remove is-sliding class
              $('body').addClass('is-sliding');

              setTimeout(function(){
                  $('body').removeClass('is-sliding');
              }, 1000);
            });
          },

          /**
           * Previous Slide
           */
          prevSlide: function(){
            
            // If on first slide, loop to last
            if (s.currentSlideIndex <= 0) {
              s.currentSlideIndex = s.numSlides;
            }
            s.currentSlideIndex--;
            
            SliceSlider.showSlide();
          },

          /**
           * Next Slide
           */
          nextSlide: function(){
            
            s.currentSlideIndex++;
        
            // If on last slide, loop to first
            if (s.currentSlideIndex >= s.numSlides) { 
              s.currentSlideIndex = 0;
            }
      
            SliceSlider.showSlide();
          },
        };
        SliceSlider.init();
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Julius+Sans+One&display=swap');
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
#vue-typer {
  display: inline-block;
  color: transparent;
  white-space: nowrap !important;
  .custom.char.typed {
    color: #101010 !important;
    word-break: break-all !important;
    overflow-wrap: break-word !important;
  }
}
// fonts
$font-header: Montserrat, helvetica;
$font-nav : "Space Mono", monospace;
$font-title: 'Julius Sans One', sans-serif;
// colors
$color-dark: #111;
$color-border: #ccc;
$color-trans-bg: #ededed;
// easings
$ease-cb: cubic-bezier(.4,0,.2,1);
$ease-cb-2: cubic-bezier(.19,1,.22,1);
$ease-cb-3: cubic-bezier(.77,0,.175,1);
$ease-cb-4: cubic-bezier(.99,1,.92,1);
// padding
$pad: 3em;
// mqs
$mq-med: 54em;
$mq-large: 65em;
$mq-xlarge: 91em;


//------------------------------
//  nth-trans-delay()
//  Transition Delay on nth-childs
//  @param: $delay_items: number of nth-of-type items to create
//  @param: $delay_time: transition-dealy value
//-----------------------------
@mixin nth-trans-delay($delay_items: 7, $delay_time: 0.2s){
  @for $i from 1 through $delay_items {
    &:nth-child(#{$i}) {   
     transition-delay: $delay_time * $i; 
    }
  }
}

//-------------------------------
//  Body, prevent scrolling
//-------------------------------
body{
  height: 100%;
  overflow-y:hidden;
}

//-------------------------------
//  Slides Nav
//-------------------------------
.slides-nav{
  z-index: 99;
  position: fixed;
  // Grimey, not sure why
  // 0 isn't working
  right: -5%;
  display: flex;
  align-items: center;
  height: 100%;
  color: #111;
  
  @media (min-width: $mq-med){
    right: 2%;
  }

  &__nav{
    position: relative;
    right: 0;
    display: block;
    font-size: 1em;
    transform: rotate(90deg);
    transform-origin: center;
  }

  button{
    position: relative;
    display:inline-block;
    padding: 0.35em;
    margin: 0;
    font-family: $font-title;
    appearance: none;
    background:transparent;
    border: 0;
    overflow-x:hidden;
    transition: color 0.5s ease;
    font-size: 1.2rem;
    
    &:after{
      content:'';
      position: absolute;
      top: 50%;
      left: 0;
      height:1px;
      width: 0;
      background: $color-dark;
      transition: width 0.4s ease;
    }
    &:hover{
      cursor:pointer;
      color: rgba($color-dark, 0.75);
      transition: color 0.5s ease;
    }
    &:hover:after{
      width:100%;
      transition: width 0.4s ease;
    }
    // Yeah... I know
    &:focus{
      outline: 0;
    }
  }
  // If is Sliding, prevent 
  // double clicks
  .is-sliding &{
    pointer-events:none;
  }
}

//-------------------------------
//  Slides
//-------------------------------
.slides{
  position: relative;
  display: block;
  height: 100vh;
  width:100%;
  background: #fff;
  transition: background 1s $ease-cb-4;

  .is-sliding &{
    background: $color-trans-bg;
    transition: background 0.3s $ease-cb-4;
  }
}

//-------------------------------
//  Single Slide
//-------------------------------
$slide-content-size-sm: 95%;
$slide-content-size: 80%;

.slide{
  z-index: -1;
  padding: 0;
  position: absolute;
  width: 100%;
  height: 100vh;
  transition: z-index 1s ease;
  
  // Bring active layer to foreground
  &.is-active{
    z-index: 19;
    transition: z-index 1s ease;
  }

  &__content{
    position: relative;
    margin: 0 auto;
    height: $slide-content-size-sm;
    width: $slide-content-size-sm;
    top: (100% - $slide-content-size-sm) / 2;
    
    @media (min-width: $mq-med){
      height: $slide-content-size;
      width: $slide-content-size;
      top: (100% - $slide-content-size) / 2;
    }
  }

  &__header{
    z-index: 9;
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    overflow-y: hidden;
    transform: translateX(5%);
    
    @media (min-width: $mq-med){
      transform: translateX(-5%);
    }
  }

  &__title{
    font-family: $font-title;
    font-size: 2.5em;
    font-weight: 100;
    color: $color-dark;
    overflow-y: hidden;
    
    @media (min-width: $mq-med){
      font-size: 5em;
    }
     
    // Slice text animation
    .title-line{
      display: block;
      overflow-y: hidden;

      span{
        display: inline-block;
        transform:translate3d(0,140%,0);
        opacity: 0;
        transition: transform 0.4s ease, opacity 0.8s ease;
        @include nth-trans-delay(2, 0.15s);
      }

      .is-active & span{
        transform:translate3d(0,0%,0);
        opacity: 1;
        transition: transform 0.6s $ease-cb-3, opacity 0.1s ease;
      }
      .is-active &:nth-of-type(2n) span{
        transition-delay:0.2s;
      }
    }
  }
  
  // Image wrapper
  &__figure{
    z-index: 7;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    height: 100%;
    width: 100%;
    //overflow-y: hidden;
    transition: transform 0.5s $ease-cb-2;
     
    // Scale Image
    .is-sliding &{
      transform: scale(0.8);
      transition: transform 0.5s $ease-cb-2;
    }
  }
  &__img{
    position: relative;
    display: block;
    background-size: cover;
    background-attachment: fixed;
    background-position: center center;
     -webkit-backface-visibility: hidden;
     //will-change:height;
    height: 0%;
    width: 100%;
    filter: grayscale(0%);
    transition: height 1s 1.4s $ease-cb-2, filter 0.4s 0.1s ease;
      
    .is-active &{
      height: 100%;
      opacity: 1;
      transition: height .5s .3s $ease-cb-3, filter 0.4s 0.1s ease;
    }
    .is-sliding &{
      filter: grayscale(100%);
    }
  }
}
</style>
