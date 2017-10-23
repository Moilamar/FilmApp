<template>
  <v-ons-page>
    <custom-toolbar :back-label="'Back'">Favorites</custom-toolbar>
    <favorite-list-element v-for="(movie, index) in favorites" :movie="movie" :key="index">
    </favorite-list-element>
  </v-ons-page>
</template>

<script>
import customToolbar from './CustomToolbar';
import favoriteListElement from './FavoriteListElement';

export default {
  data() {
    const favorites = [];
    this.$localStorage.get('watchedMovies').forEach(function(movie) {
      console.log(movie.favorite);
      if (movie.favorite) {
        
        favorites.push(movie);
      }
    });
    return {
        favorites
    }
  },
  methods: {
    
  },
  components: { customToolbar, favoriteListElement }
}
</script>
