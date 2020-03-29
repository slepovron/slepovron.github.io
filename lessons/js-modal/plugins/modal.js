Element.prototype.appendAfter = function (element) {  // так как все что у нас описано в коде это создание элементов, то будем использовать глобальный Элемент, и добавим в его прототип новую функцию добавления другого элемента по некоему условию (изначально в js нет такой возможности, но есть возможность так сделать)
  element.parentNode.insertBefore(this, element.nextSibling); // обращаемся к элементу который передаем (у нас это modal-content) вызываем родительскую ноду и свойство вставить перед - в это свойство мы передаем вставляемый новый элемент и добавляем исходный следующим родственником (по итогу мы "вставляем старый элемент перед новым" что дает нужный результат)
};

function noop() {} //функция делающая ничего, нужна дальше

function _createmodalFooter(buttons = []) { // 
  if (buttons.length === 0) {
    return document.createElement('div'); // если не будет кнопок, то в ДОМ вернется пустой див (для наглядности)
  }


  const wrap = document.createElement('div'); //локальная переменная - обертка для футера (тот-же див)
  wrap.classList.add('modal-footer'); // добавляем класс

  buttons.forEach(btn => {
    const $btn = document.createElement('button');
    $btn.textContent = btn.text;
    $btn.classList.add('btn'); //это класс со стилями (в исходном примере используется bootstrap4)
    $btn.classList.add(`btn-${btn.type || 'danger'}`); // собственно danger тоже из стилей бутстрапа, он будет возвращаться если не применился/не передан тип из index.js
    $btn.onclick = btn.handler || noop; // noop это функция делающая ничего... задана выше, а handler задан в index.js

    wrap.appendChild($btn);
  });

  return wrap; // возвращаем итоговый элемент
}

function _createModal(options) { // по сути должна находиться внутри $.modal, но мы туда отдаем результат работы
  const DEFAULT_WIDTH = '600px';
  const modal = document.createElement('div'); // это создает наш корневой элемент mymodal
  modal.classList.add('mymodal'); //то есть мы создали приватную переменную modal и добавили ее в класс mymodal
  //дальше вставляем html разметку создаваемого окна и указываем место создания - afterbegin (т.е после начала родительского элемента)
  modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay" data-close="true"> 
      <div class="modal-window" style="width: ${options.widht || DEFAULT_WIDTH}">
        <div class="modal-header">
         <span class="modal-title">${options.title || 'Заголовок окна'}</span>
         ${options.closable ? `<span class="modal-close" data-close="true">&times;</span>` : ''}
        </div>
        <div class="modal-body" data-content="true">
          ${options.content || ''}
        </div>
        <!-- этот футер мы формируем отдельно через _createModalFooter, поэтому оригинальную версию верстки закомментируем
        <div class="modal-footer">
          <button class="modal-button ok">Ok</button>
          <button class="modal-button cancel">Cancel</button>
        </div>
        -->
      </div>
    </div>
  `);
  const footer = _createmodalFooter(options.footerButtons); // добавляем переменную - инстанс функции создания футера и вносим в нее опции из index.js
  footer.appendAfter(modal.querySelector('[data-content]')); // добавить футер после элемента внутри modal с аттрибутом data-content 
  document.body.appendChild(modal); // возвращаем наш элемент из JS в HTML
  return modal;
}

$.modal = function(options) {  // то есть создаем метод для глобального объекта $
  const $modal = _createModal(options); // $modal это инстанс модального окна _createModal отдаваемый в DOM с указанными параметрами для отрисовки конкретного модального окна - можно называть как удобнее (не только выделяя с помощью $), главное чтобы отражало суть
  const ANIMATION_SPEED = 500; // приватная переменная для удаления добавленного класса hide, можно было обойтись без нее - записав сразу в таймаут, но так это будет просто уникальное значение которое нужно будет искать в коде (значение лучше всего ставить одинаковое с временем анимации, иначе будет либо тормозить повторное событие либо обрезать анимацию)
  let closing = false; // защита от запуска повторного открытия при закрытии (через let потому что будет меняться)
  let destroyed = false;

  const modal = {
    open() {
      if (destroyed) {
        console.log('Modal is destroyed!'); // чтобы при значении destroyed == true не создавалось окно, а выводилось только сообщение в консоли (в целом сообщение тоже не обязательно, но оно наглядно)
      }
      !closing && $modal.classList.add('open'); // добавляем класс к инстансу - класс открытия модального окна
    },
    close() {
      closing = true;
      $modal.classList.remove('open'); // для закрытия окна просто удалим класс открытия =)
      $modal.classList.add('hide');
      setTimeout(() => {
        $modal.classList.remove('hide');
        closing = false;
      }, ANIMATION_SPEED);
    }
  };

  const listener = event => { // выводим слушателя отдельной константой чтобы была возможность работать с ним как с именованым объектом JS, то есть иметь возможность обращаться к нему по имени
    console.log('Clicked', event.target.dataset.close); // для наглядности выводим сообщение в консоль
    if (event.target.dataset.close) {
      modal.close(); 
    }
  }; 

  $modal.addEventListener('click', listener); // соответственно вот тут добавляем листенер заданный в виде константы на событии клика на конкретном именованом объекте $modal представляющем из себя инстанс от _createModal

  return Object.assign(modal, { // Object.assign - стандартный метод глобального объекта, позволяющий добавить новый метод выбранному объекту - в нашем случае modal 
    destroy() { // для того чтобы элемент не висел в DOM и не съедал память как самим фактом существования ((так наверное и обработкой событий на нем, поскольку клики обрабатываются).
      $modal.parentNode.removeChild($modal);
      $modal.removeEventListener('click', listener); // а тут удаляем листенер через его константу (без необходимости его как-либо описывать)
      destroyed = true; // собственно флаг destroyed к которому мы привязываем поведение браузера при уничтоженном модальном окне
    },
    setContent(html) {
      $modal.querySelector('[data-content]').innerHTML = html;
    }
  });
};