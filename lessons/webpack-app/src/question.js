export class Question {
  static create(question) {
    return fetch("https://slepovron-site-app.firebaseio.com/questions.json", {
        method: "POST",
        body: JSON.stringify(question),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        question.id = response.name; // назначаю для question новый метод id (пока не понял, возможно он стандартный и уже есть), и присваиваю ему метод name возвращаемый в response (хэшовый ключ генерируемый в firebase)
        return question;
      })
      .then(addToLocalStorage) // добавляем все вопросы в локал
      .then(Question.renderList); // отрисовываем все вопросы из локал
  }

  static renderList() {
    const question = getQuestionsFromLocalStorage();

    const html = questions.length ?
      questions.map(toCard).join('') // то есть мы забираем каждый вопрос в виде строки и собираем через map в массив разделяя пробелом (если нам возвращается true)
      :
      `<p>
        You have not questions yet...
      </p>
      `; // если вопросов еще не было отдаем в блок наших вопросов эту запись.

    const myquestions = document.getElementById('myquestions'); // забираем элемент по ид
    myquestions.innerHTML = html; // вставляем туда нашу фразу
  }

}

function addToLocalStorage(question) {
  const all = getQuestionsFromLocalStorage(); // тут мы создаем переменную со всеми вопросами, соответственно обновляемую при каждой отправке нового вопроса
  all.push(question); // и добавляем каждый раз через push последний вопрос
  localStorage.setItem('questions', JSON.stringify(all)); // добавляем в локальное хранилище вопрос в формате json строки (изначально мы делали эту строку из question получаемого в функции, но для того чтобы в локал шли все впоросы - заменяем на all) по итогу будет возвращаться массив наших вопросов
}

function getQuestionsFromLocalStorage() {
  return JSON.parse(localStorage.getItem('questions') || '[]'); // забираем из локального хранилища json строку и парсим ее обратно в нормальное состояние (если вопросов еще не было - парсим пустой массив)
}

function toCard(question) {
  return 'testtesttest'; // для начала вернем заглушку
}