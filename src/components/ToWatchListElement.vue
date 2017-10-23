<template>
  <span @mousedown="startTimer()" @mouseup="clearTimer()" v-if="unChecked">
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
      <v-ons-checkbox modifier="material" @click.stop="markWatched()"></v-ons-checkbox>
    </div>
  </v-ons-list-item></span>
</template>

<script>
export default {
  data() {
    return {
      genreNames: "",
      genres: this.$store.state.genres,
      pressTimer: null,
      unChecked: true
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
        message: "Remove from to-watch list?",
        cancelable: true,
        modifier: "material",
        callback: function(btn) {
          if (btn === 1) {
            this.removeFromToWatch();
          }
        }.bind(this)
      });
    },
    removeFromToWatch(prevent) {
      let movies = this.$localStorage.get('toWatchMovies');
      const index = movies.indexOf(this.movie);
      movies.splice(index, 1);
      this.$localStorage.set('toWatchMovies', movies);
      this.unChecked = false;
      if (!prevent)
        this.$ons.notification.toast("Removed "+this.movie.title, {timeout:3000});
    },
    markWatched(e) {
      this.removeFromToWatch(true);
      let movies = this.$localStorage.get('watchedMovies');
      movies.push(this.movie);
      this.$localStorage.set('watchedMovies', movies);
      this.unChecked = false;
      this.$ons.notification.toast("Moved "+this.movie.title+" to My Movies", {timeout:3000});
    }
  },
  props: [ 'movie' ]
}
</script>
