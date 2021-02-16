<template>
  <div>

     <div class="container">
      <!-- jumbotron container -->
      <header class="jumbotron">
        <router-link class="logo jumbotron-logo" to="/">
          <img
            src="https://avatars2.githubusercontent.com/u/27227805?s=460&v=4"
            width="170"
            height="170"
            alt="logo"
            class="rounded-circle img-thumbnail"
          />
        </router-link>
        <div class="text-right text-white">
          <h1 class="lobster changeableText">
            Wladimir
            <br />Sawicki
          </h1>
          <h4 class="lobster changeableText">Фронтенд разработчик, ИТ - специалист</h4>
          <p>Основной сайт перенесен на gitlab, тут будет тестовая админка.</p>
          <a class="btn btn-secondary btn-lg" href="https://slepovron.gitlab.io" role="button">
            Перейти на сайт
          </a>
        </div>
      </header>
    </div>
    <!-- jumbotron -->

  </div>
</template>

<style scoped>
  header {
    background: url(../assets/img/city-large.jpg);
    background-size: cover;
    background-position: center;
    margin-top: 1%;
  }

  .jumbotron {
    margin-bottom: 1%;
    padding: 2rem 2rem;
  }

  @media (max-width: 767.98px) {
    .jumbotron-logo {
      display: none;
  }
}
</style>