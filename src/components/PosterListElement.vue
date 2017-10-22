<template>
  <div @click="openInfoPage" class="poster-list-element">
    <img v-if="movie.poster_path" :src="imageUrl">
    <!-- Show placeholder if no movie poster -->
    <img v-else src="../media/placeholder.jpg">
    <div class="poster-title"><span>{{ shortTitle }}</span></div>
    <div class="poster-score">
      <ons-icon icon="fa-star" size="6vw"></ons-icon>
      <span>{{ movie.vote_average }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      genreNames: "",
      genres: this.$store.state.genres
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
    }
  },
  props: [ 'movie' ]
}
</script>
