<template>
      <v-ons-list-item @click="openInfoPage">
        <div class="left portrait-small">
          <img v-if="movie.poster_path" class="list-item__thumbnail" :src="imageUrl">
          <img v-else class="list-item__thumbnail" src="../media/placeholder.jpg"> <!-- Show placeholder if no movie poster -->
        </div>
        <ons-row class="center">
          <ons-col>
            <span class="list-item__title">{{ movie.title }}<!--year--></span>
            <ons-row><span class="list-item__subtitle">{{ shortOverview }}</span></ons-row>
          </ons-col>
          <ons-col>
            <!-- rating, year, something else? -->
          </ons-col>
        </ons-row>
        <!-- also show rating, year -->
      </v-ons-list-item>
</template>

<script>
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
      return this.movie.overview.substring(0, 60) + "...";
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
