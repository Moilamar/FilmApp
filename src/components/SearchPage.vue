<template>
  <v-ons-page>
    <custom-toolbar :back-label="'Back'">Search</custom-toolbar>
    <v-ons-list-header>Search results for "{{ $store.getters.getDecodedUrl }}"</v-ons-list-header>
    <search-list-element v-for="(movie, index) in $store.state.movieList" 
      :movie="movie" :key="index"></search-list-element>
  </v-ons-page>
</template>

<script>
  import customToolbar from './CustomToolbar';
  import searchField from './SearchField';
  import searchListElement from './SearchListElement';

  export default {
    data() {
      return {
        
      }
    },
    
    methods: {
      searchMovies() {

      }
    },
    components: { customToolbar, searchField, searchListElement }
  }
</script>
