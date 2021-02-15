<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
</script>

<style>
@import '~bootstrap/dist/css/bootstrap.min.css';

@media (min-width: 576px) {
  .card-columns {
    column-count: 1;
    -webkit-column-count: 1;
    -moz-column-count: 1;
  }
}

@media (min-width: 768px) {
  .card-columns {
    column-count: 2;
    -webkit-column-count: 2;
    -moz-column-count: 2;
  }
}

@media (min-width: 992px) {
  .card-columns {
    column-count: 3;
    -webkit-column-count: 3;
    -moz-column-count: 3;
  }
}

html {
  color: #222;
  font-size: 1em;
  line-height: 1.4;
}

body {
  background-color: #f8f9fa;
}

.lobster {
  font-family: "Lobster", cursive;
}

.black {
  color: #000;
}

.social {
  font-size: 2rem;
}
</style>
