<template>
  <div>
    <header>
      <section class="hero is-dark">
        <div class="hero-head">
          <nav class="navbar">
            <div class="container">
              <div class="navbar-brand">
                <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroA" class="navbar-menu">
                <div class="navbar-end">
                  <router-link class="navbar-item" to="/" exact>Home</router-link>
                  <router-link class="navbar-item" to="/recipe" exact>Random recipe</router-link>
                  <router-link to="/selection" class="navbar-item" exact>Selection</router-link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
      <section class="hero is-dark">
        <div class="hero-body">
          <div class="container">
            <h1 class="title has-text-centered">{{headboi}}</h1>
          </div>
        </div>
      </section>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    headboi: String
  }
};
</script>