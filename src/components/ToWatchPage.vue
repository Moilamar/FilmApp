<template>
  <v-ons-page>
    <custom-toolbar :back-label="'Back'"></custom-toolbar>
    <search-list-element v-for="(movie, index) in movies" 
      :movie="movie" :key="index">
    </search-list-element>
  </v-ons-page>
</template>

<script>
  import customToolbar from './CustomToolbar';
  import searchListElement from './SearchListElement';

  export default {
    data() {
      return {
        movies: this.$localStorage.get('toWatchMovies')
      }
    },
    methods: {
      
    },
    components: { customToolbar, searchListElement }
  }
</script>
