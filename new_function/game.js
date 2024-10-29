// script.js
let score = 0;
const scoreDisplay = document.getElementById("score");
const player = document.getElementById("player");
const target = document.getElementById("target");
const gameContainer = document.getElementById("game-container");

const playerSize = 30;
const gameSize = 300;

// Начальная позиция игрока
let playerX = 0;
let playerY = 0;

// Управление игроком
// Попробовать переназначить клавиши, или как-то исправить скоролл вертикальный во вроемя нажатия стрелок
document.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowUp":
            if (playerY > 0) playerY -= 10;
            break;
        case "ArrowDown":
            if (playerY < gameSize - playerSize) playerY += 10;
            break;
        case "ArrowLeft":
            if (playerX > 0) playerX -= 10;
            break;
        case "ArrowRight":
            if (playerX < gameSize - playerSize) playerX += 10;
            break;
    }
    player.style.left = `${playerX}px`;
    player.style.top = `${playerY}px`;

    checkCollision();
});

// Случайное размещение цели
function randomPosition() {
    const maxPosition = gameSize - playerSize;
    return Math.floor(Math.random() * (maxPosition / 10)) * 10;
}

function moveTarget() {
    target.style.left = `${randomPosition()}px`;
    target.style.top = `${randomPosition()}px`;
}

// Проверка столкновения игрока и цели
function checkCollision() {
    if (playerX === parseInt(target.style.left) && playerY === parseInt(target.style.top)) {
        score++;
        scoreDisplay.textContent = score;
        moveTarget();
    }
}

// Инициализация игры
moveTarget();
