<template>
  <div id="app">
    <Header headboi="FoodDB" />
    <br />
    <main>
      <router-view />
    </main>
    <br />
    <footer>
      <div class="content has-text-centered">
        <p>Copyright © FoodDB AB, 2020</p>
      </div>
      <br />
    </footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>
