<template>
  <v-ons-page>
    <custom-toolbar :back-label="'Back'"></custom-toolbar>
  </v-ons-page>
</template>

<script>
  import customToolbar from './CustomToolbar';
  import app from '../App';

  export default {
    data() {
      return {
        movies: this.$localStorage.get('watchedMovies')
      }
    },
    methods: {
      
    },
    components: { customToolbar }
  }
</script>
