const canvas = document.getElementById('pong');
const ctx = canvas.getContext('2d');

// поле задается через html и стили

// создаем шарик
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
  y: (canvas.height - 100) / 2, // высота в зависимости от высоты поля
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