<template>
  <v-ons-page>
    <custom-toolbar :back-label="'Back'">Plan-to-Watch</custom-toolbar>

    <to-watch-list-element v-for="(movie, index) in movies" 
                           :movie="movie"
                           :key="index"
    ></to-watch-list-element>
  </v-ons-page>
</template>

<script>
  import customToolbar from './CustomToolbar';
  import toWatchListElement from './ToWatchListElement';

  export default {
    data() {
      return {
        movies: this.$localStorage.get('toWatchMovies')
      }
    },
    components: { customToolbar, toWatchListElement }
  }
</script>
