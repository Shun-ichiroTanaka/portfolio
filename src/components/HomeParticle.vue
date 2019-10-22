<template>
<div id="app">
  <div class="particles">
    <div id="particles-js">
      <span id="time">{{ $moment().format('YYYY/MM/DD HH:mm')}}</span>
      <div id="author-name">©︎All Rights are reserved by Shun-ichiro Tanaka -2019</div>
      <div id="main" class="has-text-centered">
        <h1>Welcome to My Portfolio</h1>
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
              "#2deda7",
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
            "value": .2,
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
            "distance": 1000,
            "color": "#2deda7",
            "opacity": 1,
            "width": .3
          },
          "move": {
            "enable": true,
            "speed": 2,
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
}

#main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}

h1 {
  font-size: 4em;
}

#particles-js {
  width: 100vw;
  height: 100vh;
}

#vue-typer {
  display: inline-block;
  margin-top: 20px;
  color: #2c3e50 !important;
  font-family: Copperplate, "Copperplate Gothic Light", fantasy !important;
  font-size: .5em;
  white-space: nowrap !important;
}

#time {
  display: none;
}

#author-name {
  display: none;
}

@media screen and (min-width: 1080px) {
  #main {
    top: 50vh;
  }

  h1 {
    font-size: 5em;
    white-space: nowrap;
  }

  h2 {
    font-size: 3em;
  }

  #vue-typer {
    font-family: Copperplate, "Copperplate Gothic Light", fantasy !important;
    font-size: .5em;

    .custom.char.typed {
      word-break: break-all !important;

      overflow-wrap: break-word !important;
    }
  }

  #time {
    position: absolute;
    top: 50vh;
    right: -50px;
    display: block;
    word-spacing: 10px;
    border-bottom: 2px solid #2c3e4f;
            transform: rotate3d(0, 0, 1, -90deg);

    -webkit-transform: rotate3d(0, 0, 1, -90deg);
  }
}

@media screen and (min-width: 768px) {
  #author-name {
    position: absolute;
    bottom: 10px;
    left: 50%;
    display: block;
    word-spacing: 10px;
    border-bottom: 2px solid #2c3e4f;
    transform: translateY(-50%) translateX(-50%);
  }
}
</style>
