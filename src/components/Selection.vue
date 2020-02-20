<template>
  <div>
    <h2 class="title is-2 has-text-centered">Selection of recipes</h2>
    <div :key="loop.idMeal" v-for="loop in loops">
      <section>
        <b-collapse :open="false" class="card" aria-id="contentIdForA11y3">
          <div
            slot="trigger"
            slot-scope="props"
            class="card-header"
            role="button"
            aria-controls="contentIdForA11y3"
          >
            <p class="card-header-title">{{loop.strMeal}}</p>
            <a class="card-header-icon">
              <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
            </a>
          </div>
          <div class="card-content">
            <section>
              <div class="hero-body">
                <div class="container has-text-centered">
                  <div class="columns is-vcentered">
                    <div class="column is-5">
                      <figure class="image is-4by3">
                        <img :src="loop.strMealThumb" alt="Description" />
                      </figure>
                    </div>
                    <div class="column is-6 is-offset-1">
                      <h1 class="title is-2">{{ loop.strMeal }}</h1>
                      <ul class="subtitle is-4">
                        <li>{{ loop.strIngredient1 }}</li>
                        <li>{{ loop.strIngredient2 }}</li>
                        <li>{{ loop.strIngredient3 }}</li>
                        <li>{{ loop.strIngredient4 }}</li>
                        <li>{{ loop.strIngredient5 }}</li>
                        <li>{{ loop.strIngredient6 }}</li>
                        <li>{{ loop.strIngredient7 }}</li>
                        <li>{{ loop.strIngredient8 }}</li>
                        <li>{{ loop.strIngredient9 }}</li>
                        <li>{{ loop.strIngredient10 }}</li>
                        <li>{{ loop.strIngredient11 }}</li>
                        <li>{{ loop.strIngredient12 }}</li>
                        <li>{{ loop.strIngredient13 }}</li>
                        <li>{{ loop.strIngredient14 }}</li>
                        <li>{{ loop.strIngredient15 }}</li>
                        <li>{{ loop.strIngredient16 }}</li>
                        <li>{{ loop.strIngredient17 }}</li>
                        <li>{{ loop.strIngredient18 }}</li>
                        <li>{{ loop.strIngredient19 }}</li>
                        <li>{{ loop.strIngredient20 }}</li>
                      </ul>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="container">
              {{ loop.strInstructions }}
              <br />
              <br />
              <label class="checkbox">
                <input type="checkbox" :value="loop.strMeal" v-model="savedRecipes" />
                Save
              </label>
            </section>
          </div>
        </b-collapse>
      </section>
      <br />
    </div>
    <h4 class="title is-4 has-text-centered">Saved recipes: {{ savedRecipes.join(', ') }}</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      select: null,
      loops: null,
      savedRecipes: []
    };
  },
  created() {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=s")
      .then(response => response.json())
      .then(result => {
        this.select = result;

        this.loops = [
          result.meals[0],
          result.meals[1],
          result.meals[2],
          result.meals[3],
          result.meals[4],
          result.meals[5],
          result.meals[6],
          result.meals[7],
          result.meals[8],
          result.meals[9]
        ];
      });
  },
  name: "Selection"
};
</script>
