<template>
  <v-ons-page>
    <custom-toolbar :back-label="'Back'">{{ movie.title }}</custom-toolbar>
    <v-ons-row class="movie-top">
      <ons-icon size="50px" icon="ion-checkmark-round"></ons-icon>
      <ons-icon size="50px" icon="ion-thumbsup"></ons-icon>
      <ons-icon size="50px" icon="ion-thumbsdown"></ons-icon>    
      <ons-icon size="50px" icon="ion-heart"></ons-icon>
      <!--<v-ons-checkbox
            :input-id="'checkbox-' + $index"
            :value="color"
            v-model="checkedColors"
          ><youtube v-if="videoId" :video-id="videoId"></youtube> -->
    </v-ons-row>
    <v-ons-row id="movie-main"> <!-- General movie info -->
      <v-ons-col>
        <img id="poster-big" :src="imageUrl"></img>
      </v-ons-col>
      <v-ons-col>
        <h1>{{ movie.title }}</h1>
        
        <!-- score -->
      </v-ons-col>
    </v-ons-row>
    <v-ons-tabbar swipeable position="auto" :tabs="tabs" :visible="true" :index.sync="activeIndex">
    </v-ons-tabbar>
    <v-ons-row id="movie-info"> <!-- In depth info -->
      <p>{{ movie.overview }}</p>
    </v-ons-row>

    
  </v-ons-page>
</template>

<script>
  // ion-close-circled
  // ion-help-circled
  // ion-gear-b
  // ion-bookmark
  // ion-ribbon-a
  // ion-earth
  // ion-social-twitter/facebook/googleplus
  // fa-star(-half-full)
  // ion-chevron-right
  // ion-trash-a
  import customToolbar from './CustomToolbar';
  import axios from 'axios';

export default {
  data() {
    return {
      movie: this.$store.state.movie,
      videoId: null,
      tabs: [
      {
        icon: this.md() ? null : 'ion-home', label: 'Home', page: homePage,
        props: { myProp: 'This is a page prop!' }, key: "homePage"
      },
      {
        icon: this.md() ? null : 'ion-ios-bell',
        label: 'News',
        page: newsPage,
        badge: 7,
        key: "newsPage"
      },
      {
        icon: this.md() ? null : 'ion-ios-settings',
        label: 'Settings',
        page: settingsPage,
        key: "settingsPage"
      }
    ],
      activeIndex: 0
    }
  },
  mounted() {
    this.getTrailer();
  }, 
  computed: {
    imageUrl: function() {
      return "http://image.tmdb.org/t/p/w185/"+this.movie.poster_path;
    },
    trailerUrl: function() {
      return "https://api.themoviedb.org/3/movie/"+this.movie.id+"/videos?api_key=d10678700962ddf56a9a3ef14b38f1df&language=en-US";
    }
  },
  methods: {
    getTrailer() {
      const callback = (response) => {
        console.log(response);
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
        });
    }
  },
  components: { customToolbar }
}
</script>
