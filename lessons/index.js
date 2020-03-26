const shapes = [ // данные в виде массива для каждого элемента
  {
    id: 1,
    title: 'circle',
    price: 10,
    img: './img/circle.jpg',
    content: 'CIRCLE Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo sed laboriosam autem voluptas iusto omnis accusantium earum cumque nam unde doloremque neque modi, corrupti, distinctio rerum architecto consectetur, porro nostrum.'
  },
  {
    id: 2,
    title: 'triangle',
    price: 20,
    img: './img/triangle.jpg',
    content: 'TRIANGLE Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo sed laboriosam autem voluptas iusto omnis accusantium earum cumque nam unde doloremque neque modi, corrupti, distinctio rerum architecto consectetur, porro nostrum.'
  },
  {
    id: 3,
    title: 'square',
    price: 30,
    img: './img/square.jpg',
    content: 'SQUARE Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo sed laboriosam autem voluptas iusto omnis accusantium earum cumque nam unde doloremque neque modi, corrupti, distinctio rerum architecto consectetur, porro nostrum.'
  }
];


// тут мы создаем стрелочную ф-ию shape создающую элемент карточки
const toHTML = shape => `
  <div class="col">
    <div class="card">
      <img src="${shape.img}" class="card-img-top" alt="${shape.title}">
      <div class="card-body">
        <h5 class="card-title">${shape.title}</h5>
        <p class="card-text">${shape.title}</p>
        <a href="#" class="btn btn-primary" data-btn="price" data-id="${shape.id}">Go somewhere</a>
        <a href="#" class="btn btn-danger">Delete all</a>
      </div>
    </div>
  </div>`;

function render() { // функция для отрисовки (рендеринга) карточки в DOM
  const html = shapes.map(toHTML).join(''); // (shape => toHTML(shape)); - аналогичная запись, передает каждому из shapes параметры карточки созданной в toHTML, с помощью join избавляемся от перечисления через запятую - иначе запяткая будет отрисовываться в html
  document.querySelector('#shapes').innerHTML = html; // добавляет html в элементы с селектором
}

render(); // вызывает отрисовку

const modal = $.modal({ // создаем базовый вариант модального окна
  title: 'My own modal', // статичный контент
  //closable: true, // Закрываемость? Возможно нужна для общего примера?
  content: `
  <p>First line modal</p>
  <p>Second line modal</p>
  `,
  width: '400px',
  footerButtons: [{
      text: 'Ok',
      type: 'primary',
      handler() {
        console.log('Ok btn clicked'); // ничего не делает кроме вывода в консоль текста
      }
    },
    {
      text: 'Cancel',
      type: 'secondary',
      handler() {
        console.log('Cancel btn clicked'); // ничего не делает кроме вывода в консоль текста
      }
    }
  ]
});

const priceModal = $.modal({ // отдельное модальное окно для карточек (у нас пример с выводом цены)
  title: 'Price',
  //closable: true, // Закрываемость? Возможно нужна для общего примера?
  width: '400px',
  footerButtons: [{
    text: 'Ok',
    type: 'primary',
    handler() {
      console.log('Ok btn clicked'); // ничего не делает кроме вывода в консоль текста
      priceModal.close(); // закрывает модальное окно
    }
  }]
});

const confirmModal = $.modal({ // отдельное модальное окно для удаления карточек
  title: 'Вы уверены что это надо удалить?',
  //closable: true, // Закрываемость? Возможно нужна для общего примера?
  width: '400px',
  footerButtons: [{
      text: 'Закрыть!',
      type: 'primary',
      handler() {
        console.log('Ok btn clicked'); // ничего не делает кроме вывода в консоль текста
        priceModal.close(); // закрывает модальное окно
      }
    },
    {
      text: 'Ненене!',
      type: 'danger',
      handler() {
        console.log('Cancel btn clicked'); // ничего не делает кроме вывода в консоль текста
      }
    }
  ]
});

document.addEventListener('click', event => {
  //event.preventDefault(); // по идее избегаем появления строки с хэшем в адресной строке, но у меня этого и не появилось
  const btnType = event.target.dataset.btn; // таргетированный элемент на котором происходит клик имеет data атрибут равный btn, т.е. data-btn в нашем случае
  const id = +event.target.dataset.id; // выбираем таргетированый элемент с атрибутом data-id, а для того чтобы полученное значение не было строкой (т.к. у нас JS и все данные от действий в браузере - строка) добавляем +


  if (btnType === 'price') { // если data-btn имеет значение price
    const shape = shapes.find(sh => sh.id === id); //
    priceModal.setContent(`
      <p>Тут будет сказать о ${shape.content} и это будет стоить вам <strong>${shape.price}$</strong></p>
    `);
    //console.log('price');
    //modal.open(); // открываем наше модальное окно из modal.js
    console.log(shape);
    priceModal.open(); // открываем модальное окно для карточки
  }
})