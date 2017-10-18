<template>
  <v-ons-list-item @click="openInfoPage" class="search-list-item">
    <div class="left portrait-small">
      <img v-if="movie.poster_path" class="list-item__thumbnail" :src="imageUrl">
      <!-- Show placeholder if no movie poster -->
      <img v-else class="list-item__thumbnail" src="../media/placeholder.jpg"> 
    </div>
    <div class="center">
      <ons-col width="52vw">
        <span class="list-item__title">{{ shortTitle }}
          <span class="list-year">({{ releaseYear }})</span>
        </span>
        <ons-row><span class="list-item__subtitle">{{ shortOverview }}</span></ons-row>
      </ons-col>
      <ons-col style="marginLeft:1.5vw;">
        <ons-row>
          <ons-icon icon="fa-star" size="5vw"></ons-icon>
          <span class="list-score">{{ movie.vote_average }}</span>
          
        </ons-row>
      </ons-col>
    </div>
    <div class="right">
      <div class="circle"><ons-icon icon="ion-chevron-right" size="3.1vw"></ons-icon></div>
    </div>
    <!-- genres? -->
  </v-ons-list-item>
</template>

<script>
export default {
  data() {
    return {
      
    }
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
      return this.movie.title.length < 25 ? this.movie.title : this.movie.title.substring(0,25) + "...";
    }
  },
  methods: {
    openInfoPage() {
      this.$store.commit('setMovie', this.movie);
      this.$store.commit('pushPageStack', 1);
      return;
    }
  },
  props: [ 'movie' ]
}
</script>
