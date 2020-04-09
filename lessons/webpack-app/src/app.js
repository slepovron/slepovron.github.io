import {
  Queston
} from './question.js';
import {
  isValid
} from "../utils";
import "./styles.css";

// console.log("App in progress..."); // сообщение-затычка

const form = document.querySelector("#form");
const input = form.querySelector("#form-input");
const submitBtn = form.querySelector("#form-submit");

form.addEventListener('submit', submitFormHandler); // submit это нативное событие подтверждения формы
input.addEventListener('input', () => {
  submitBtn.disabled = !isValid(input.value);
}); // т.е. только пока isValid не возвращает true кнопка продолжает оставаться отключенной (иначе требуется изменить атрибут в html)


function submitFormHandler(event) {
  event.preventDefault();

  // console.log(input.value); //сообщение заглушка

  if (isValid(input.value)) {
    const question = {
      text: input.value.trim(), //trim удалит лишние пробелы
      date: new Date().toJSON(), // добавит дату в JSON  формате
    };

    submitBtn.disabled = true;
    console.log("Your questions", question);
    // async request to server for save question
    Queston.create(question).then(() => {
      input.value = '';
      input.className = 'form-control';
      submitBtn.disabled = false;
    });


  }
}