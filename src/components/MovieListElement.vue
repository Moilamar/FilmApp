<template>
      <v-ons-list-item @click="openInfoPage">
        <div class="left">
          <img class="list-item__thumbnail" :src="imageUrl">
        </div>
        <ons-row class="center">
          <ons-col>
            <span class="list-item__title">{{ movie.title }}</span>
            <span class="list-item__subtitle">{{ shortOverview }}</span>
          </ons-col>
          <ons-col>
            <!-- rating, something else? -->
          </ons-col>
        </ons-row>
        <!-- also show rating, year -->
      </v-ons-list-item>
</template>

<script>
import infoPage from './InfoPage';

export default {
  data() {
    return {
      
    }
  },
  computed: {
    imageUrl: function() {
      return "http://image.tmdb.org/t/p/w92/"+this.movie.poster_path;
    },
    shortOverview: function() {
      return this.movie.overview.substring(0, 50) + "...";
    }
  },
  methods: {
    openInfoPage() {
      this.$store.commit('setMovie', this.movie);
      this.$store.commit('pushPageStack', infoPage);
      return;
    }
  },
  props: [ 'movie' ]
}
</script>
