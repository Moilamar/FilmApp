<template>
  <v-ons-page>
    <custom-toolbar :back-label="'Back'">Search</custom-toolbar>
    <v-ons-list-header>Search results for "{{ $store.getters.getDecodedUrl }}"</v-ons-list-header>
    <movie-list-element v-for="movie in $store.state.movieList"></movie-list-element>
  </v-ons-page>
</template>

<script>
  import customToolbar from './CustomToolbar';
  import searchField from './SearchField';
  import movieListElement from './MovieListElement';

  export default {
    data() {
      console.log(this.$store.state.movieList);
      return {
        
      }
    },
    methods: {
      searchMovies() {

      }
    },
    components: { customToolbar, searchField, movieListElement }
  }
</script>
