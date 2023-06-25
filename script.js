const container = document.querySelector('.container');
const words = document.querySelectorAll('.word');
let isActive = false;

container.addEventListener('click', () => {
  if (!isActive) {
    words.forEach(word => word.classList.add('active'));
    isActive = true;
  } else {
    words.forEach(word => word.classList.remove('active'));
    isActive = false;
  }
});

// Crear el fondo holográfico
const canvas = document.querySelector('.background');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const colors = ['#ff00ff', '#00ffff', '#00ff00']; // Colores para el efecto holográfico

function drawBackground() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.globalAlpha = 0.02;

  for (let i = 0; i < 1000; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 2;
    const color = colors[Math.floor(Math.random() * colors.length)];

    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size);
  }

  requestAnimationFrame(drawBackground);
}

drawBackground();