const cursor = document.getElementById('cursor');
let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  // 緩やかに追従（0.1は追従速度）
  currentX += (mouseX - currentX) * 0.1;
  currentY += (mouseY - currentY) * 0.1;

  cursor.style.left = `${currentX}px`;
  cursor.style.top = `${currentY}px`;

  requestAnimationFrame(animate);
}

animate();

console.log('OK')