const shapes = [ // данные в виде массива для каждого элемента
  {
    id: 1,
    title: 'circle',
    price: 10,
    img: './img/circle.jpg',
    content: 'circle'
  },
  {
    id: 2,
    title: 'triangle',
    price: 20,
    img: './img/triangle.jpg',
    content: 'triangle'
  },
  {
    id: 3,
    title: 'square',
    price: 30,
    img: './img/square.jpg',
    content: 'square'
  }
];


// тут мы создаем стрелочную ф-ию shape создающую элемент карточки
const toHTML = shape => `
  <div class="col">
    <div class="card">
      <img src="${shape.img}" class="card-img-top" alt="${shape.title}">
      <div class="card-body">
        <h5 class="card-title">${shape.title}</h5>
        <p class="card-text">${shape.content}</p>
        <a href="#" class="btn btn-primary" data-btn="price">Go somewhere</a>
        <a href="#" class="btn btn-danger">Delete all</a>
      </div>
    </div>
  </div>`;

function render() { // функция для отрисовки (рендеринга) карточки в DOM
  const html = shapes.map(toHTML).join(''); // (shape => toHTML(shape)); - аналогичная запись, передает каждому из shapes параметры карточки созданной в toHTML, с помощью join избавляемся от перечисления через запятую - иначе запяткая будет отрисовываться в html
  document.querySelector('#shapes').innerHTML = html; // добавляет html в элементы с селектором
}

render(); // вызывает отрисовку

const modal = $.modal({
  title: 'My own modal',
  closable: true,
  content: `
  <p>First line modal</p>
  <p>Second line modal</p>
  `,
  width: '400px',
  footerButtons: [{
      text: 'Ok',
      type: 'primary',
      handler() {
        console.log('Ok btn clicked');
      }
    },
    {
      text: 'Cancel',
      type: 'secondary',
      handler() {
        console.log('Cancel btn clicked');
      }
    }
  ]
});

document.addEventListener('click', event => {
  //event.preventDefault();
  const btnType = event.target.dataset.btn; // таргетированный элемент на котором происходит клик имеет data атрибут равный btn, т.е. data-btn в нашем случае
  if (btnType === 'price') { // если data-btn имеет значение price
    //console.log('price');
    modal.open(); // открываем наше модальное окно из modal.js
  }
})