export class Question { // создаем класс для группировки всего что относится к вопросам из формы
  static create(question) {
    return fetch('https://slepovron-site-app.firebaseio.com/questions.json', {
        metod: 'POST',
        body: JSON.stringify(question), //обязательно передавая в виде json
        headers: {
          'Content-Type': 'application/json' // ключ не может содержать дефисов,но его можно обернуть в строку и это перестанет быть проблемой
        }
      }) // fetch  это нативный метод запроса к бэкенду, в случае с firebase мы передаем ссылку до базы данных и добавляем адрес коллекции в формате filename.json (чтобы иметь возможность работы с запросом внутри приложения мы делаем return)
      .then(response => response.json())
      .then(response => {
        console.log(response);
      });
  }
}