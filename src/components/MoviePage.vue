<template>
  <v-ons-page>
    <custom-toolbar :back-label="'Back'">{{ movie.title }}</custom-toolbar>

    <v-ons-tabbar swipeable position="auto" :tabs="tabs" modifier="material"
      :visible="true" :index.sync="activeIndex">
    </v-ons-tabbar>
    
  </v-ons-page>
</template>

<script>
// ion-close-circled
// ion-help-circled
// ion-bookmark
// ion-ribbon-a
// ion-earth
// ion-social-twitter/facebook/googleplus
// ion-trash-a
import customToolbar from './CustomToolbar';
import axios from 'axios';

import movieInfo from './MovieInfo';
import movieMedia from './MovieMedia';
import movieReviews from './MovieReviews';

export default {
  data() {
    const movie = this.$store.state.movie;
    return {
      movie: movie,
      videoId: null,
      tabs: [
      {
        /* icon: this.md() ? null : 'ion-home', */ label: 'Info', page: movieInfo,
        props: { movie: movie }, key: "homePage"
      },
      {
        /* icon: this.md() ? null : 'ion-ios-bell', */
        label: 'Media', page: movieMedia, key: "newsPage", props: { movie: movie }
      },
      {
       /*  icon: this.md() ? null : 'ion-ios-settings', */
        label: 'Reviews', page: movieReviews, key: "settingsPage", props: { movie: movie }
      } 
    ],
      monthNames: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ],
      date: null,
      activeIndex: 0
    }
  },
  created() {
    this.getTrailer();
  }, 
  computed: {
    trailerUrl: function() {
      return "https://api.themoviedb.org/3/movie/"+this.movie.id+
        "/videos?api_key="+this.$store.state.apiKey+
        "&language="+this.$store.state.settings.language[1];
    }
  },
  methods: {
    getTrailer() {
      /* const callback = (response) => {
        this.videoId = response.data;
      }
      axios.get(this.trailerUrl)
        .then(function (response) { // Success promise
            console.log(response);
            if (response.status == 200) {
                callback(response);
            }
            else return;
        })
        .catch(function (error) {   // Error caught
            console.log("ERR: "+error.message);
            // Show error
            return;
        }); */
    }
  },
  components: { customToolbar }
}
</script>

