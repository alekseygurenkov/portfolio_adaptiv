// Получаем canvas и его контекст
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Настройки мишени
let target = {
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  size: 30,
  color: 'red'
};

// Счётчик очков
let score = 0;

// Функция отрисовки мишени
function drawTarget() {
  ctx.beginPath();
  ctx.arc(target.x, target.y, target.size, 0, Math.PI * 2);
  ctx.fillStyle = target.color;
  ctx.fill();
  ctx.closePath();
}

// Функция обновления позиции мишени после попадания
function moveTarget() {
  target.x = Math.random() * (canvas.width - target.size * 2) + target.size;
  target.y = Math.random() * (canvas.height - target.size * 2) + target.size;
}

// Функция для отрисовки очков
function drawScore() {
  ctx.fillStyle = '#fff';
  ctx.font = '20px Arial';
  ctx.fillText('Score: ' + score, 10, 30);
}

// Основная функция игры
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawTarget();
  drawScore();
  requestAnimationFrame(gameLoop);
}

// Обработка клика мыши
canvas.addEventListener('click', (e) => {
  const dx = e.clientX - canvas.offsetLeft - target.x;
  const dy = e.clientY - canvas.offsetTop - target.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  // Проверка попадания
  if (distance < target.size) {
    score++;
    moveTarget(); // Перемещаем мишень на новое место
  }
});

// Запуск игры
gameLoop();