<template>
  <v-ons-page>
    <custom-toolbar :back-label="'Back'">In Theaters</custom-toolbar>
    <div v-if="$store.state.isSearching" class="loading">
      <v-ons-progress-bar indeterminate modifier="material"></v-ons-progress-bar>
    </div>
    <div v-else>
      <poster-list-element v-for="(movie, index) in movies" 
        :movie="movie" :key="index">
      </poster-list-element>
    </div>
  </v-ons-page>
</template>

<script>
import customToolbar from './CustomToolbar';
import posterListElement from './posterListElement';
import axios from 'axios';

export default {
    data() {
        return {
            movies: null
        }
    },
    created() {
        this.getNowPlaying();
    },
    computed: {
        nowPlayingUrl: function() {
          return "https://api.themoviedb.org/3/movie/now_playing?api_key="+
          this.$store.state.apiKey+"&language="+this.$store.state.settings.language[1]+
          /* "&region="+this.$store.state.settings.region+ */"&page=1";
        }
    },
    methods: {
        getNowPlaying() {
        axios.get(this.nowPlayingUrl)
            .then(function (response) { // Success promise
                console.log(response);
                if (response.status == 200) {
                    this.movies = response.data.results;
                    this.ready = true;
                }
                else return;
            }.bind(this))
            .catch(function (error) {   // Error caught
                console.log("ERR: "+error.message);
                this.$ons.notification.toast({message:"An error occured", timeout: 3000});
                return;
            }.bind(this));
        }
    },
    components: { customToolbar, posterListElement }
}
</script>
