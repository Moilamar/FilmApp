<template>
  <v-ons-page>
    <custom-toolbar :back-label='"Back"'>{{ movie.title }}</custom-toolbar>

    <div class='tabbar-container'>
      <v-ons-tabbar position='auto'
                    :tabs='tabs'
                    modifier='material'
                    :visible='true'
                    :index.sync='activeIndex'
      ></v-ons-tabbar>
    </div>
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
import movieInfo from './MovieInfo';
import movieMedia from './MovieMedia';
import movieReviews from './MovieReviews';

export default {
  data() {
    const movie = this.$store.state.movie;

    return {
      movie: movie,
      tabs: [
        { label: 'Info', page: movieInfo, props: { movie: movie }},
        { label: 'Media', page: movieMedia, props: { movie: movie }},
        { label: 'Reviews', page: movieReviews, props: { movie: movie }} 
      ],
      activeIndex: 0
    }
  },
  created() {
    this.getCast();
    this.getMedia();
    this.getReviews();
  }, 
  computed: {
    trailerUrl: function() {
      return 'https://api.themoviedb.org/3/movie/' + this.movie.id +
        '/videos?api_key=' + this.$store.state.apiKey +
        '&language=' + this.$store.state.settings.language[1];
    }
  },
  methods: {
    getCast() {
      /* axios.get('https://api.themoviedb.org/3/movie/'+this.movie.id+
        '/credits?api_key='+this.$store.state.apiKey)
        .then(function (response) { // Success promise
            console.log(response);
            if (response.status == 200) {   // Async call OK
                this.$store.commit('setCast', response.data);
            }
        }.bind(this))
        .catch(function (error) {   // Error caught
            console.log('ERR: '+error.message);
            this.$ons.notification.toast('An error occured.');
            return;
        }.bind(this)); */
    },
    getMedia() {
      // TODO
    },
    getReviews() {
      // TODO
    }
  },
  components: { customToolbar }
}
</script>

