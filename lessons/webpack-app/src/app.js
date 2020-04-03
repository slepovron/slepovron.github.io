import {
  isValid
} from "../utils";
import "./styles.css";


// console.log("App in progress..."); // сообщение-затычка

const form = document.querySelector('#form');
const input = form.querySelector('#form-input');
const submitBtn = form.querySelector('#form-submit');

form.addEventListener('submit', submitFormHandler); // submit это нативное событие подтверждения

function submitFormHandler(event) {
  event.preventDefault();

  //console.log(input.value); //сообщение заглушка

  if (isValid(input.value)) {
    const question = {
      text: input.value.trim(), //trim удалит лишние пробелы
      date: new Date().toJSON() // добавит дату в JSON  формате
    };

    submitBtn.disabled = true;
    console.log('Pytanie', question);
    // async request to server for save question
  }
}