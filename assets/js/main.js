document.addEventListener("DOMContentLoaded",function(){new SweetScroll({}),particlesJS("particles-js", {
  particles: {
    number: { value: 30, density: { enable: true, value_area: 800 } },
    color: { value: ["#8B4513", "#A0522D", "#D2B48C"] },
    shape: {
      type: "polygon",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: { value: 0.5, random: false, anim: { enable: false } },
    size: { value: 3, random: true, anim: { enable: false } },
    line_linked: { enable: true, distance: 150, color: "#A0522D", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 4, random: true, out_mode: "out" }
  },
  interactivity: {
    detect_on: "canvas",
    events: { onhover: { enable: false }, onclick: { enable: true, mode: "push" }, resize: true },
    modes: { push: { particles_nb: 4 } }
  },
  retina_detect: true
});
