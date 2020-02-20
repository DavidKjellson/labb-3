<template>
  <div>
    <section class="hero is-default is-bold">
      <div style="text-align: center;">
        <button
          @click="fetchRandom(); $store.commit('increment')"
          class="button is-large is-black"
        >{{ $store.state.btn }}</button>
      </div>
    </section>
    <div v-if="recipe">
      <section>
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="columns is-vcentered">
              <div class="column is-5">
                <figure class="image is-4by3">
                  <img :src="recipe.meals[0].strMealThumb" alt="Description" />
                </figure>
              </div>
              <div class="column is-6 is-offset-1">
                <h1 class="title is-2">{{ recipe.meals[0].strMeal }}</h1>
                <ul class="subtitle is-4">
                  <li>{{ recipe.meals[0].strIngredient1 }}</li>
                  <li>{{ recipe.meals[0].strIngredient2 }}</li>
                  <li>{{ recipe.meals[0].strIngredient3 }}</li>
                  <li>{{ recipe.meals[0].strIngredient4 }}</li>
                  <li>{{ recipe.meals[0].strIngredient5 }}</li>
                  <li>{{ recipe.meals[0].strIngredient6 }}</li>
                  <li>{{ recipe.meals[0].strIngredient7 }}</li>
                  <li>{{ recipe.meals[0].strIngredient8 }}</li>
                  <li>{{ recipe.meals[0].strIngredient9 }}</li>
                  <li>{{ recipe.meals[0].strIngredient10 }}</li>
                  <li>{{ recipe.meals[0].strIngredient11 }}</li>
                  <li>{{ recipe.meals[0].strIngredient12 }}</li>
                  <li>{{ recipe.meals[0].strIngredient13 }}</li>
                  <li>{{ recipe.meals[0].strIngredient14 }}</li>
                  <li>{{ recipe.meals[0].strIngredient15 }}</li>
                  <li>{{ recipe.meals[0].strIngredient16 }}</li>
                  <li>{{ recipe.meals[0].strIngredient17 }}</li>
                  <li>{{ recipe.meals[0].strIngredient18 }}</li>
                  <li>{{ recipe.meals[0].strIngredient19 }}</li>
                  <li>{{ recipe.meals[0].strIngredient20 }}</li>
                </ul>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="container">
        {{ recipe.meals[0].strInstructions }}
        <br />
        <br />
        <label class="checkbox">
          <input type="checkbox" :value="recipe.meals[0].strMeal" v-model="savedRecipes" />
          Save
        </label>
      </section>
    </div>
    <br />
    <h4 class="title is-4 has-text-centered">Saved recipes: {{ savedRecipes.join(', ') }}</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipe: null,
      savedRecipes: []
    };
  },
  methods: {
    fetchRandom() {
      fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(response => response.json())
        .then(result => {
          this.recipe = result;
        });
    }
  },
  name: "Recipe"
};
</script>