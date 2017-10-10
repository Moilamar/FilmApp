<template>
  <v-ons-page>
    <custom-toolbar :back-label="'Back'">(show movie name here)</custom-toolbar>
    
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
      getMovieData() {

      }
    },
    props: [ 'movieID' ],
    components: { customToolbar }
  }
</script>
