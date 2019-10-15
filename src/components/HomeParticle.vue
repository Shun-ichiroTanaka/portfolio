<template>
<div id="app">
    <div class="particles">
    <div id="particles-js">
        <div id="main" class="has-text-centered">
          <h1>Welcome to My Portfolio</h1>
          <h2>I
            <vue-typer
              :text='[
                  " am a Fronted Engineer.",
                  " like sports, especially baseball and soccer.",
                  " have been studying Laravel, Vue.js, and React",
                ]'
              :repeat='Infinity'
              :shuffle='false'
              initial-action='typing'
              :pre-type-delay='100'
              :type-delay='100'
              :pre-erase-delay='1500'
              :erase-delay='20'
              erase-style='backspace'
              :erase-on-complete='true'
              caret-animation='smooth'
              id="vue-typer"
            ></vue-typer>
          </h2>
        </div>
    </div>
    </div>
</div>
</template>

<script>
import 'particles.js'

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
                            "enable": false,
                            "value_area": 700
                        }
                    },
                    "color": { "value":[
                        // "#fa5477",
                        // "#47e4bb",
                        // "#fa5477",
                        // "#1089ff",
                        // "#834fe3",
                        // "#f4ec05",
                        // "#f272d9",
                        "#2deda7",
                    ]},
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
                        "value": 2,
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
                        "opacity": .5,
                        "width": .7
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
  },
  components: {

  },
  props: {
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Cinzel|Kaushan+Script&display=swap");
html,
body,
#app {
  height: 100%;
  padding: 0;
  margin: 0;
  font-family: "Kaushan Script", cursive !important;
}

#app {
  position: relative;
}

#main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}
h1 {
  font-size: 4em;
  // white-space: nowrap;
}
h2 {
  font-size: 3em;
}

#particles-js {
  width: 100vw;
  height: 100vh;
}
#vue-typer {
  font-family: Copperplate, "Copperplate Gothic Light", fantasy !important;
  font-size: .5em;

  .custom.char.typed {
    // color: #3e64ff !important;
    // word-spacing: 15px !important;
    // white-space: nowrap;
  }
}
</style>
