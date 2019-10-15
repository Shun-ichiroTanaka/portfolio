<template>
<div id="app">
        <div class="particles">
        <div id="particles-js">
            <div id="main" class="has-text-centered">
                <vue-typer
                  :text='[
                      "俺の名前はサトシ。",
                      "マサラタウンに住むポケモントレーナーだ。",
                      "相棒の名前はピカチュウ。",
                      "ライバルの名前はシゲル。",
                      "シゲルはいいやつだがモテすぎて気に入らない。",
                      "俺の彼女のカスミの元彼でもある。"
                    ]'
                  :repeat='Infinity'
                  :shuffle='false'
                  initial-action='typing'
                  :pre-type-delay='100'
                  :type-delay='100'
                  :pre-erase-delay='1500'
                  :erase-delay='50'
                  erase-style='backspace'
                  :erase-on-complete='true'
                  caret-animation='smooth'
                  id="vue-typer"
                ></vue-typer>
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
                        "value": 50,
                        "density": {
                            "enable": true,
                            "value_area": 700
                        }
                    },
                    "color": { "value":[
                        "#fa5477",
                        "#47e4bb",
                        "#1089ff",
                        "#512c96",
                        "#f45905",
                        "#e86ed0",
                        "#5edfff",
                        "ffd369",
                    ]},
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#333"
                        },
                        "polygon": {
                            "nb_sides": 5
                        },
                    },
                    "opacity": {
                        "value": .4,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 50,
                        "random": true,
                        "anim": {
                            "enable": true,
                            "speed": 30,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#fff",
                        "opacity": .3,
                        "width": .7
                    },
                    "move": {
                        "enable": true,
                        "speed": 6,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": true,
                            "rotateX": 600,
                            "rotateY": 1200
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
html,
body,
#app {
  height: 100%;
}

#app {
  position: relative;
}

#main {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}
h1 {
  font-size: 3em;
}

#particles-js {
  width: 100%;
  height: 100%;
}
#vue-typer {
  font-family: Copperplate, "Copperplate Gothic Light", fantasy !important;
  font-size: 3rem;
}
</style>
