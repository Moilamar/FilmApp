<template>
  <v-ons-page>
    <custom-toolbar :back-label="'Back'">Favorites</custom-toolbar>
    <search-list-element v-for="(movie, index) in favorites" 
      :movie="movie" :key="index">
    </search-list-element>
  </v-ons-page>
</template>

<script>
  import customToolbar from './CustomToolbar';
  import searchListElement from './SearchListElement';

  export default {
    data() {
      const favorites = this.$localStorage.get('watchedMovies').forEach(function(movie) {
        if (movie.favorite) return movie;
      });

      return {
         favorites
      }
    },
    methods: {
      
    },
    components: { customToolbar, searchListElement }
  }
</script>
