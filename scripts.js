AOS.init();

// Rolagem suave para todos os links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Efeito LED piscante suave no botão CTA
const ctaButton = document.querySelector('.cta-button');
setInterval(() => {
  ctaButton.classList.toggle('led');
}, 1500); // sincronizado com a animação CSS (1.5s)

// Contagem regressiva
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 7);

const countdown = document.createElement('div');
countdown.id = 'countdown';
document.querySelector('.led-header').appendChild(countdown);

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    countdown.innerHTML = "<p style='color:#8fb28f; text-shadow: 0 0 5px #8fb28f;'>Missão iniciada!</p>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / 1000 / 60) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  countdown.innerHTML = `
    <p style="color:#8fb28f; text-shadow: 0 0 5px #8fb28f;">
      Próxima missão em:
      <span>${days}d</span>
      <span>${hours}h</span>
      <span>${minutes}m</span>
      <span>${seconds}s</span>
    </p>
  `;
}

setInterval(updateCountdown, 1000);
updateCountdown(); // inicializa imediatamente
