$.confirm = function (options) {
  return new Promise((resolve, reject) => {
    const modal = $.modal({
      title: options.title,
      width: '400px',
      closable: false, // все еще непонятно что делает
      content: options.content,
      footerButtons: [{
          text: 'Ненене!',
          type: 'primary',
          handler() {
            console.log('cancel btn clicked'); // ничего не делает кроме вывода в консоль текста
            modal.close(); // закрывает модальное окно
            reject(); //
          }
        },
        {
          text: 'Удалитьнах!',
          type: 'danger',
          handler() {
            console.log('delete btn clicked'); // ничего не делает кроме вывода в консоль текста
            modal.close(); // закрывает модальное окно
            resolve(); // возвращает параметр успешного завершения промиса?
          }
        }
      ]
    });
    setTimeout(() => modal.open(), 100); // таймаут нужен чтобы успевала отработать анимация имеющаяся у окна, иначе оно возникает сразу
  });
};