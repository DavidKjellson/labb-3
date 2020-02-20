<template>
  <div>
    <div v-if="slider" class="hero-body">
      <div class="container has-text-centered">
        <img :src="slider.meals[0].strMealThumb" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slider: null
    };
  },
  created() {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then(response => response.json())
      .then(result => {
        this.slider = result;
      });
  },
  name: "Home"
};
</script>