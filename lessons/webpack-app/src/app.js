import {
  Question
} from "./question.js";
import {
  isValid
} from "../utils"; // импорт проверки на количество занков в вопросе
import "./styles.css"; // подключение своих стилей в итоговый бандл (требует установки css-loader)

// console.log("App in progress..."); // сообщение-затычка

const form = document.querySelector("#form"); // запрос на получение формы с нуждным ID
const input = form.querySelector("#form-input"); // получение инпута в этой форме
const submitBtn = form.querySelector("#form-submit"); // получение кнопки submit относящейся к этому инпуту

// на данном этапе мы получили нужные нам переменные const соотносящиеся с нодами в html

form.addEventListener("submit", submitFormHandler); // submit это нативное событие подтверждения формы полученной нами по ИД
input.addEventListener("input", () => {
  submitBtn.disabled = !isValid(input.value);
}); // мы создали кнопку с атрибутом disabled в html и он будет сохраняться пока проверка isValid не вернет нам true

function submitFormHandler(event) {
  event.preventDefault(); // отменяет дефолтное поведение кнопки submit которое перегружает всю страницу

  // console.log(input.value); // выведение сообщения в консоль при сабмите

  if (isValid(input.value)) { // если вызванная функция isValid с параметром value возвращает нам true (т.е. больше или равно 10 символам)
    const question = {
      text: input.value.trim(), //создаем поле text совпадающее value (trim удалит лишние пробелы)
      date: new Date().toJSON(), //и поле date со значением нового инстанса глобального объекта Date в формате JSON строки
    };

    submitBtn.disabled = true;
    console.log("Your questions", question); // отображает отправленные данные в консоли для наглядности

    // async запрос на сервер для сохранения отправленного вопроса (описан в модуле question.js)
    Question.create(question).then(() => { // т.к. это промис то мы используем .then для событий следующих за ним
      input.value = ""; // очищаем поле вопроса после отправки
      // input.className = "form-control"; // это было из исходного примера
      // submitBtn.disabled = false; // из исходного примера
    });
  }
}