import './style.css';

const el = document.querySelector('.blue-background');

function updateSkew() {
  const minAngle = -15;
  const maxAngle = -7;

  const minWidth = 300;
  const maxWidth = 1920;

  const t = (window.innerWidth - minWidth) / (maxWidth - minWidth);
  const angle = minAngle + (maxAngle - minAngle) * Math.min(Math.max(t, 0), 1);

  el.style.transform = `skewY(${angle + 1}deg)`;
}

updateSkew();
window.addEventListener('resize', updateSkew);
