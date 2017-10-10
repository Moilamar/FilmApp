<template>
  <v-ons-page>
    <custom-toolbar :back-label="'Back'">Search for (search param here)</custom-toolbar>
    
  </v-ons-page>
</template>

<script>
  import customToolbar from './CustomToolbar';

  export default {
    data() {
      return {
        
      }
    },
    methods: {
      searchMovies() {

      }
    },
    props: [ 'movieID' ],
    components: { customToolbar }
  }
</script>
