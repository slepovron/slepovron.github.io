export class Question {
  static create(question) {
    return fetch('https://slepovron-site-app.firebaseio.com/questions.json', {
        method: 'POST',
        body: JSON.stringify(question),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(response => {
        console.log(response);
      });
    // .then(addToLocalStorage)
    // .then(Question.renderList)
  }
}