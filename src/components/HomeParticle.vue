<template>
<div id="app">
  <div class="particles">
    <div id="particles-js">
      <span id="time">{{ $moment().format('YYYY/MM/DD HH:mm')}}</span>
      <div id="author-name">
        ©︎All Rights are reserved by Tana 2019~
      </div>
      <div id="main" class="has-text-centered">
        <h1>Welcome to Myworks</h1>
        <vue-page-transition name="overlay-up-down">
        </vue-page-transition>
        <h2>I
          <vue-typer :text='[
                  " am a Fronted Engineer",
                  " use PHP, Javascript",
                  " like sports very much",
                ]' :repeat='Infinity' :shuffle='false' initial-action='typing' :pre-type-delay='100' :type-delay='100' :pre-erase-delay='1500' :erase-delay='20' erase-style='backspace' :erase-on-complete='true' caret-animation='smooth' id="vue-typer"></vue-typer>
        </h2>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "HomeParticle",
  mounted() {
    this.initParticles()
  },
  methods: {
    initParticles() {
      window.particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 25,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": [
              "#fff",
            ]
          },
          "shape": {
            "type": "polygon",
            "stroke": {
              "width": 0,
              "color": "#333"
            },
            "polygon": {
              "nb_sides": 5
            },
          },
          "opacity": {
            "value": 1,
            "random": false,
            "anim": {
              "enable": false,
              "speed": .8,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 1,
            "random": false,
            "anim": {
              "enable": true,
              "speed": 3,
              "size_min": 0.1,
              "sync": true
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 800,
            "color": "#2deda7",
            "opacity": 1,
            "width": .3
          },
          "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": true,
              "rotateX": 1800,
              "rotateY": 1800
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 140,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      })
    }
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
body {
  background: #17181B;
}

html,
body,
#app {
  position: relative;
  z-index: -1;
  box-sizing: border-box !important;
  height: 100%;
  padding: 0;
  margin: 0;
  font-family: "Kaushan Script", cursive !important;
  color: #fff !important;
  h4 {
    color: #000 !important;
  }
}
#main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}

h1 {
  font-size: 4em;
  color: #fff;
}

#particles-js {
  width: 100vw;
  height: 100vh;
}

#vue-typer {
  display: inline-block;
  margin-top: 20px;
  color: #fff !important;
  font-family: Copperplate, "Copperplate Gothic Light", fantasy !important;
  font-size: .5em;
  white-space: nowrap !important;
  .custom.char.typed {
    word-break: break-all !important;
    color: #fff !important;
    overflow-wrap: break-word !important;
  }
}
#time {
  display: none;
}

#author-name {
  display: none;
}

@include pc {
  #main {
    top: 50vh;
  }

  h1 {
    font-size: 5em;
    white-space: nowrap;
    color: #fff;
  }

  h2 {
    font-size: 3em;
    color: #fff;
  }


  #time {
    position: absolute;
    top: 50vh;
    right: -50px;
    display: block;
    word-spacing: 10px;
    color: #fff;
    border-bottom: 2px solid #fff;
            transform: rotate3d(0, 0, 1, -90deg);

    -webkit-transform: rotate3d(0, 0, 1, -90deg);
  }
}

@include pc {
  #author-name {
    position: absolute;
    bottom: 10px;
    left: 50%;
    display: block;
    color: #fff;
    word-spacing: 10px;
    border-bottom: 2px solid #fff;
    transform: translateY(-50%) translateX(-50%);
  }
}
</style>
