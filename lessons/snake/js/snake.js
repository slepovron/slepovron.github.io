const canvas = document.getElementById("snake-game"); // находим канвас с нужным ид
const scoreText = document.getElementById("score"); // наш счет

const ctx = canvas.getContext("2d"); // объявляем 2Д параметр канваса т.к. игра в плоскости

const box = 32; // размер одной ячейки (в нашем случае 32 на 32)

const groundImg = new Image();
groundImg.src = "img/ground.png"; // собственно игровое поле

const foodImg = new Image();
foodImg.src = "img/food.png"; // значок еды

const headImg = new Image();
headImg.src = "img/head.png"; // значок головы змейки

const bodyImg = new Image();
bodyImg.src = "img/body.png"; // значок хвоста змейки

// счетчик
let score = 0;
scoreText.innerText = "0";

// скорость
let speed = 300;

// сама змейка это массив из объектов
let snake = [];
// создадим нулевой объект массива - т.е. голову, в некоем местe на игровом поле
snake[0] = {
  x: 9 * box,
  y: 9 * box,
};

// создадим в случайном месте в пределах поля значок еды
let food = {
  x: Math.floor(Math.random() * 20) * box,
  y: Math.floor(Math.random() * 20) * box,
};

let d; // переменная направления (нужна для проверки предыдущего положения направления, чтобы нельзя было двинуть голову в саму змейку)
document.addEventListener("keydown", direction);
// собственно функция движения
function direction(event) {
  let key = event.keyCode;
  if (key == 37 && d != "r") {
    d = "l";
  } else if (key == 38 && d != "d") {
    d = "u";
  } else if (key == 39 && d != "l") {
    d = "r";
  } else if (key == 40 && d != "u") {
    d = "d";
  }
}

// если съедаем хвост - конец игры
function eatBody(head, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (head.x == arr[i].x && head.y == arr[i].y) {
      clearInterval(game);
    }
  }
}

// функция отрисовки созданных элементов на канвасе
function draw() {
  ctx.drawImage(groundImg, 0, 0); // нарисовали игровое поле
  ctx.drawImage(foodImg, food.x, food.y); // нарисовали еду

  for (let i = 0; i < snake.length; i++) {
    if (i == 0) {
      ctx.drawImage(headImg, snake[i].x, snake[i].y);
    } else {
      ctx.drawImage(bodyImg, snake[i].x, snake[i].y);
    }
  }

  // предыдущая позиция головы змейки
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  // если упираемся в стенку - конец игры
  if (snakeX < 0 || snakeX > 20 * box || snakeY < 0 || snakeY > 20 * box) {
    clearInterval(game);
  }

  // перемещение по нажатию клавиши
  if (d == "l") snakeX -= box;
  if (d == "u") snakeY -= box;
  if (d == "r") snakeX += box;
  if (d == "d") snakeY += box;

  // едим
  if (snakeX == food.x && snakeY == food.y) {
    food = {
      x: Math.floor(Math.random() * 20) * box,
      y: Math.floor(Math.random() * 20) * box,
    };
    score++;
    scoreText.innerText = `${score}`;
    speed = speed - 5;
    console.log(speed);
    // и не удаляем значок хвоста при перемещении
  } else {
    // удаляем последний элемент в массиве змейки - передвигая ее таким образом на новые координаты
    snake.pop();
  }

  // новая позиция головы змейки
  let newHead = {
    x: snakeX,
    y: snakeY,
  };

  // проверка на "съел хвост"
  eatBody(newHead, snake);

  // добавляем голову в новую позицию
  snake.unshift(newHead);
}

let game = setInterval(draw, speed); // вызвали функцию отрисовки с частотой 100мс
console.log(game);
