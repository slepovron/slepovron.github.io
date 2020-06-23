import {
  ruNavText
} from './rutext.js';
import {
  enNavText
} from './entext.js';


let lang = document.querySelector('html');
let title = document.querySelector('title');
let nav = document.querySelector('#nav');
let main = document.querySelector('#main');
let footer = document.querySelector('#footer');

setHtmlLang();
setTitle();
renderNav();
renderMain();

function setNavText() {
  let navText
  if (lang == 'en') {
    navText = enNavText;
    console.log(navText);
  } else if (lang == 'ru') {
    navText = ruNavText;
  }
  return navText;
}

function setHtmlLang() {
  lang.setAttribute('lang', 'en');
  return setHtmlLang;
}

function setTitle() {
  title.innerText = 'Home';
  return title;
}

function renderNav() {
  nav.innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">${navText.first}<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">${navText.second}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">${navText.third}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </nav>
  `;
  return nav;
}

function renderMain() {
  main.innerHTML = `
  <div class="jumbotron bg-light">
    <h1 class="display-4">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </div>
  `;
  return main;
}