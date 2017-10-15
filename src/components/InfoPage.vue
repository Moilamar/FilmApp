<template>
  <v-ons-page>
    <custom-toolbar :back-label="'Back'">{{ movie.title }}</custom-toolbar>
  </v-ons-page>
</template>


<script>
  // ion-heart
  // ion-checkmark-round
  // ion-close-circled
  // ion-help-circled
  // ion-gear-b
  // ion-bookmark
  // ion-thumbsup
  // ion-ribbon-a
  // ion-earth
  // ion-social-twitter/facebook/googleplus
  // star?
  import customToolbar from './CustomToolbar';

  export default {
    data() {
      return {
        movie: this.$store.state.movie
      }
    },    
    components: { customToolbar }
  }
</script>
