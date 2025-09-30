document.addEventListener('DOMContentLoaded', () => {

remaining = remainingSeconds; 
const intervalId = setInterval(() => {

  if (remaining < 0) {
    clearInterval(intervalId);
    location.reload();
    return;
  }

  const days = Math.floor(remaining / (24 * 3600));
  const hours = Math.floor((remaining % (24 * 3600)) / 3600);
  const minutes = Math.floor((remaining % 3600) / 60);
  const seconds = remaining % 60;

  // displayElement.textContent = `${days} day${days !== 1 ? 's' : ''} ` +
  //   `${hours.toString().padStart(2, '0')}:` +
  //   `${minutes.toString().padStart(2, '0')}:` +
  //   `${seconds.toString().padStart(2, '0')}`;

  document.querySelector('#days').textContent = days.toString().padStart(2, '0');
  document.querySelector('#hours').textContent = hours.toString().padStart(2, '0');
  document.querySelector('#minutes').textContent = minutes.toString().padStart(2, '0');
  document.querySelector('#seconds').textContent = seconds.toString().padStart(2, '0');

  document.querySelector('#days-1').textContent = days.toString().padStart(2, '0');
  document.querySelector('#hours-1').textContent = hours.toString().padStart(2, '0');
  document.querySelector('#minutes-1').textContent = minutes.toString().padStart(2, '0');
  document.querySelector('#seconds-1').textContent = seconds.toString().padStart(2, '0');

  remaining--;  

}, 1000); 

      const chatBox = document.getElementById('chat-box'); 
      const chatToggle = document.getElementById('chat-toggle');
      const chatClose = document.getElementById('close-chat'); 
      
      const chatForm = document.querySelector('#chat-form'); 
      const chatSubmitBtn = document.querySelector('#chat-form button[type=submit]'); 
      const chatInput = document.querySelector('#chat-input'); 
      const chatMessages = document.querySelector('#chat-messages'); 

      function submitChat() {
        const chatMessage = chatInput.value; 

        const t = document.createElement('template'); 
        t.innerHTML = `<div class="flex justify-end"><div class="bg-blue-500 text-white px-3 py-2 rounded-lg max-w-xs">${chatMessage}</div></div>`; 

        chatMessages.appendChild(t.content.firstChild); 
      }

      if (chatBox && chatToggle && chatClose && chatForm && chatInput && chatMessages) {
        chatToggle.onclick = () => {
          chatBox.classList.toggle('hidden');
          chatBox.classList.toggle('opacity-0');
          chatBox.classList.toggle('opacity-100');
        } 

        chatForm.onsubmit = (e) => {
          e.preventDefault(); 
          submitChat(); 
          chatInput.value = ''; 
        }

        chatClose.onclick = () => {
          chatBox.classList.add('hidden');
          chatBox.classList.add('opacity-0');
          chatBox.classList.remove('opacity-100');
        }
      }


      document.querySelectorAll('.faq-item button').forEach(button => {
        button.onclick = () => {
          button.querySelector('svg').classList.toggle('rotate-180');
          const content = button.nextElementSibling;
          if (content.hasAttribute('style')) {
            content.setAttribute('_style', content.getAttribute('style'));
            content.removeAttribute('style');
          } else {
            content.setAttribute('style', content.getAttribute('_style') || '');
            content.removeAttribute('_style');
          }
        };
      }); 


particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 1000 } },
    color: { value: "#4dd0e1" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 4,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#4dd0e1",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);

});