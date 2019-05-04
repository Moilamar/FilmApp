<template>
  <v-ons-page>
    <custom-toolbar :back-label="'Back'">Search</custom-toolbar>

    <div v-if="$store.state.isSearching"
         class="loading"
    >
      <v-ons-progress-bar indeterminate modifier="material"></v-ons-progress-bar>
    </div>

    <div v-else>
      <v-ons-list-header>Search results for "{{ $store.getters.getDecodedUrl }}"</v-ons-list-header>

      <search-list-element v-for="(movie, index) in $store.state.movieList"
                           :movie="movie"
                           :key="index"
      ></search-list-element>
    </div>
  </v-ons-page>
</template>

<script>
import customToolbar from './CustomToolbar';
import searchField from './SearchField';
import searchListElement from './SearchListElement';

export default {
  methods: {
    searchMovies() {
      // TODO ?
    }
  },
  components: { customToolbar, searchField, searchListElement }
}
</script>
