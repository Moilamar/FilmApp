<template>
  <v-ons-page>
    <custom-toolbar :back-label="'Back'">Search</custom-toolbar>
    <v-ons-list-header>Search results for "{{ $store.getters.getDecodedUrl }}"</v-ons-list-header>
    <movie-list-element v-for="(movie, index) in $store.state.movieList" 
      :movie="movie"></movie-list-element>
  </v-ons-page>
</template>

<script>
  import customToolbar from './CustomToolbar';
  import searchField from './SearchField';
  import movieListElement from './MovieListElement';

  export default {
    data() {
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
