<template>
  <span @mousedown="startTimer()" @mouseup="clearTimer()"
    v-if="movie.favorite">
    <v-ons-list-item @click="openInfoPage"
      class="search-list-item">
    <div class="left portrait-small">
      <img v-if="movie.poster_path" class="list-item__thumbnail" :src="imageUrl">
      <!-- Show placeholder if no movie poster -->
      <img v-else class="list-item__thumbnail" src="../media/placeholder.jpg"> 
    </div>
    <div class="center">
      <ons-col width="47vw">
        <span class="list-item__title">{{ shortTitle }}
          <span class="list-year">({{ releaseYear }})</span>
        </span>
        <ons-row><span class="list-item__subtitle">{{ genreNames }}</span></ons-row>
      </ons-col>
      <ons-col style="marginLeft:1vw;">
        <ons-row>
          <ons-icon icon="fa-star" size="5vw"></ons-icon>
          <span class="list-score">{{ movie.vote_average }}</span>
          
        </ons-row>
      </ons-col>
    </div>
    <div class="right">
      <div class="circle"><ons-icon icon="ion-chevron-right" size="3.1vw"></ons-icon></div>
    </div>
  </v-ons-list-item></span>
</template>

<script>
export default {
  data() {
    return {
      genreNames: "",
      genres: this.$store.state.genres,
      pressTimer: null
    }
  },
  mounted() {
    this.getGenreNames();
  },
  computed: {
    releaseYear: function() {
      return this.movie.release_date.substring(0,4);
    },
    imageUrl: function() {
      return "http://image.tmdb.org/t/p/w92/"+this.movie.poster_path;
    },
    shortOverview: function() {
      return this.movie.overview.substring(0, 60) + "...";
    },
    shortTitle: function() {
      return this.movie.title.length < 25 ? this.movie.title : this.movie.title.substring(0,23) + "...";
    }
  },
  methods: {
    getGenreNames() { // Transform genre ids into names
      for(var i=0; i<this.movie.genre_ids.length; i++) {
        this.genreNames += this.genres[this.movie.genre_ids[i]] + ", ";
        if (i == 2) break;
      }
      this.genreNames = this.genreNames.substring(0, this.genreNames.length - 2);
    },
    openInfoPage() {
      this.$store.commit('setMovie', this.movie);
      this.$store.commit('pushPageStack', 1);
      return;
    },
    startTimer() {
      console.log("mousedown");
      this.pressTimer = setTimeout(function(){
        this.promptRemove();
      }.bind(this),1000);
    },
    clearTimer() {
      clearTimeout(this.pressTimer);
    },
    promptRemove() {
      this.$ons.notification.confirm({
        message: "Remove from favorites?",
        cancelable: true,
        modifier: "material",
        callback: function(btn) {
          if (btn === 1) {
            this.removeFromFavorites();
          }
        }.bind(this)
      });
    },
    removeFromFavorites() {
      let movies = this.$localStorage.get('watchedMovies');
      movies.filter(function(movie) {
        if (movie.id == this.movie.id) movie.favorite = false;
      }.bind(this));
      this.movie.favorite = undefined;
      movies.push(this.movie);
      this.$localStorage.set('watchedMovies', movies);
      this.$ons.notification.toast("Removed "+this.movie.title+" from Favorites", {timeout:3000});
    }
  },
  props: [ 'movie' ]
}
</script>
