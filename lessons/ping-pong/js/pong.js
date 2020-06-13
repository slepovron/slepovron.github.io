const canvas = document.getElementById('pong');
const ctx = canvas.getContext('2d');

// поле задается через html и стили

// шарик
const ball = {
  x: canvas.width / 2, // положение по оси Х
  y: canvas.height / 2, // положение по оси У
  radius: 10,
  velocityX: 5, // векторная скорость по Х
  velocityY: 5, // векторная скорость по У
  speed: 7, // скорость
  color: "WHITE"
}

// сеть для поля (можно задать дополнительные свойства)
const net = {
  x: (canvas.width - 2) / 2,
  y: 0, // рисуем сеть от верхней границы поля
  height: 10, // высота полоски сети
  width: 2, // толщина
  color: "WHITE"
}

// игрок 1
const user1 = {
  x: 0, // от левой границы
  y: (canvas.height - 100) / 2, // по центру высоты поля
  width: 10,
  height: 100,
  score: 0,
  color: "WHITE"
}

// игрок 2 (или компьютер)
const user2 = {
  x: canvas.width - 10, // - width of paddle
  y: (canvas.height - 100) / 2, // -100 the height of paddle
  width: 10,
  height: 100,
  score: 0,
  color: "WHITE"
}

// квадратные объекты
function drawRect(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

// круги
function drawArc(x, y, r, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();
}

// сеть
function drawNet() {
  for (let i = 0; i <= canvas.height; i += 15) {
    drawRect(net.x, net.y + i, net.width, net.height, net.color);
  }
}

// текст (очки)
function drawText(text, x, y) {
  ctx.fillStyle = "#FFF";
  ctx.font = "75px fantasy";
  ctx.fillText(text, x, y);
}

// сброс мяча на нулевую позицию после попадания
function resetBall() {
  ball.x = canvas.width / 2;
  ball.y = canvas.height / 2;
  ball.velocityX = -ball.velocityX;
  ball.speed = 7;
}

//управление user1
// canvas.addEventListener("mousemove", getMousePos);

// function getMousePos(evt) {
//   let rect = canvas.getBoundingClientRect();

//   user1.y = evt.clientY - rect.top - user1.height / 2;
// }

document.addEventListener('keypress', getKeyPress);

function getKeyPress(event) {
  let key = event.keyCode;
  let rect = canvas.getBoundingClientRect();
  console.log(key);
  if (key == 115) { // DOWN
    user1.y = event.clientY - rect.top - user1.height / 2;

  } else if (key == 119) { // UP
    user1.y = Math.max(0, user1.y - 8);
  }

  if (key == 40) { // DOWN
    user2.y = Math.min(canvas.height - user2.height, user2.y + 4);
  } else if (key == 38) { // UP
    user2.y = Math.max(0, user2.y - 4);
  }
}

//-----

// when COM or USER scores, we reset the ball
function resetBall() {
  ball.x = canvas.width / 2;
  ball.y = canvas.height / 2;
  ball.velocityX = -ball.velocityX;
  ball.speed = 7;
}

// collision detection
function collision(b, p) {
  p.top = p.y;
  p.bottom = p.y + p.height;
  p.left = p.x;
  p.right = p.x + p.width;

  b.top = b.y - b.radius;
  b.bottom = b.y + b.radius;
  b.left = b.x - b.radius;
  b.right = b.x + b.radius;

  return p.left < b.right && p.top < b.bottom && p.right > b.left && p.bottom > b.top;
}

// update function, the function that does all calculations
function update() {

  // change the score of players, if the ball goes to the left "ball.x<0" computer win, else if "ball.x > canvas.width" the user win
  if (ball.x - ball.radius < 0) {
    user2.score++;
    resetBall();
  } else if (ball.x + ball.radius > canvas.width) {
    user1.score++;
    resetBall();
  }

  // the ball has a velocity
  ball.x += ball.velocityX;
  ball.y += ball.velocityY;

  // computer plays for itself, and we must be able to beat it
  // simple AI
  // user2.y += ((ball.y - (user2.y + user2.height / 2))) * 0.1;

  // when the ball collides with bottom and top walls we inverse the y velocity.
  if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
    ball.velocityY = -ball.velocityY;
  }

  // we check if the paddle hit the user or the com paddle
  let player = (ball.x + ball.radius < canvas.width / 2) ? user1 : user2;

  // if the ball hits a paddle
  if (collision(ball, player)) {
    // we check where the ball hits the paddle
    let collidePoint = (ball.y - (player.y + player.height / 2));
    // normalize the value of collidePoint, we need to get numbers between -1 and 1.
    // -player.height/2 < collide Point < player.height/2
    collidePoint = collidePoint / (player.height / 2);

    // when the ball hits the top of a paddle we want the ball, to take a -45degees angle
    // when the ball hits the center of the paddle we want the ball to take a 0degrees angle
    // when the ball hits the bottom of the paddle we want the ball to take a 45degrees
    // Math.PI/4 = 45degrees
    let angleRad = (Math.PI / 4) * collidePoint;

    // change the X and Y velocity direction
    let direction = (ball.x + ball.radius < canvas.width / 2) ? 1 : -1;
    ball.velocityX = direction * ball.speed * Math.cos(angleRad);
    ball.velocityY = ball.speed * Math.sin(angleRad);

    // speed up the ball everytime a paddle hits it.
    ball.speed += 0.1;
  }
}

//-----

// отрисовка
function render() {

  // очищаем все поле на каждом кадре отрисовки
  drawRect(0, 0, canvas.width, canvas.height, "#343434");

  // записываем очки
  drawText(user1.score, canvas.width / 4, canvas.height / 5);
  drawText(user2.score, 3 * canvas.width / 4, canvas.height / 5);

  // сеть
  drawNet();

  // ракетки
  drawRect(user1.x, user1.y, user1.width, user1.height, user1.color);
  drawRect(user2.x, user2.y, user2.width, user2.height, user2.color);

  // шарик
  drawArc(ball.x, ball.y, ball.radius, ball.color);
}


function game() {
  update();
  render();
}
// number of frames per second
let framePerSecond = 50;

//call the game function 50 times every 1 Sec
let loop = setInterval(game, 1000 / framePerSecond);