<template>
  <v-ons-page>
    <custom-toolbar><span class="title">My Movie List</span></custom-toolbar>
    <div v-if="isLoading" class="loading">
      <v-ons-progress-bar indeterminate modifier="material"></v-ons-progress-bar>
    </div>
    <!-- <div id="banner" >
      <ons-icon v-show="$store.state.isSearching" size="150px" spin icon="md-spinner"></ons-icon>
    </div> -->
    <div id="banner">
      <carousel></carousel>
    </div>
    <div id="main-bottom">
      <search-field></search-field>     <!-- Imported component -->
      <main-menu/>  <!-- Imported component -->
    </div>
  </v-ons-page>
</template>

<script>
import customToolbar from './CustomToolbar';
import mainMenu from './MainMenu';
import searchField from './SearchField';
import carousel from './Carousel';

export default {
  data() {
    return {
      isLoading: false
    }
  },
  created() {
    /* this.$bus.$on('loading', this.startLoading()); // Listen for loading start */
  },
  methods: {
    startLoading() {
      console.log("perkele");
      this.isLoading = true;
    }
  },
  components: { 
    customToolbar, 
    mainMenu, 
    searchField,
    carousel
  }
}
</script>
