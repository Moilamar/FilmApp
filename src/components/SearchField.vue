<template>
  <form class='center'
        @submit.prevent='searchMovies()'
  >
    <v-ons-search-input modifier='material'
                        float
                        name='search'
                        placeholder='Search movies'
                        @keyup.enter='submit'
                        v-model='searchParam'
    ></v-ons-search-input>
  </form>
</template>

<script>
let axios = require('axios');

export default {
  data() {
    return {
      searchParam: '',
    }
  },
  computed: {
    searchQueryUrl: function() {
      return 'https://api.themoviedb.org/3/search/movie?api_key=' + this.$store.state.apiKey +
        '&language=' + this.$store.state.settings.language[1] +
        '&query=' + this.searchParam +
        '&page=1&include_adult=' + this.$store.state.settings.adultFilter;
    },
  },
  methods: {
    searchMovies() {
      if (this.searchParam.length <= 2) {
          return;
      }

      this.$store.commit('setSearchParam', this.searchParam);
      axios.get(this.searchQueryUrl)  // Async GET for movies
        .then(function (response) {
          if (response.data.results.length) {   // Async call OK
            this.$store.commit('setMovieList', response.data.results);
            this.$store.commit('pushPageStack', 0);
          } else {
            this.$ons.notification.toast({message:'No results', timeout: 3000});  // No results found
          }
       }.bind(this))
        .catch(function () {
          this.$ons.notification.toast({message: 'An error occured', timeout: 3000});
        }.bind(this)
      );

      this.$bus.emit('loading');
    },
  },
  props: ['showLoading']
}
</script>
