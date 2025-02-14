particlesJS('particles-js', {
  particles: {
      number: {
          value: 50,
          density: {
              enable: true,
              value_area: 800
          }
      },
      color: {
          value: '#ffffff'
      },
      shape: {
          type: 'circle'
      },
      opacity: {
          value: 0.5,
          random: true
      },
      size: {
          value: 3,
          random: true
      },
      move: {
          enable: true,
          speed: 2,
          direction: 'bottom',
          random: true,
          straight: false,
          out_mode: 'out'
      }
  },
  interactivity: {
      detect_on: 'canvas',
      events: {
          onhover: {
              enable: true,
              mode: 'repulse'
          }
      }
  }
});

// Calculator functionality
let display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
      display.value = eval(display.value);
  } catch(error) {
      display.value = "Error";
  }
}