<template>
  <div>
    <div id="navtop" class="container">
      <!-- navigation bar container -->
      <nav class="navbar navbar-expand-md navbar-light bg-light font-weight-bold">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Проекты</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/About">Обо мне</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Links">Ссылки</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Contacts">Написать</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <!-- navigation bar -->
  </div>
</template>

<style scoped>
#navtop {
  margin-bottom: 1%;
}

.router-link-active {
  color: rgba(0,0,0,.9)
}
</style>