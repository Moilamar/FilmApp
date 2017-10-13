<template>
  <v-ons-page>
    <custom-toolbar>My Movie List</custom-toolbar>
    <div id="banner">
      <ons-icon v-if="this.searching" size="150px" spin icon="md-spinner"></ons-icon>
    </div>
    <div id="main-bottom">
      <search-field/>     <!-- Imported component -->
      <main-menu/>  <!-- Imported component -->
    </div>
  </v-ons-page>
</template>

<script>
  import customToolbar from './CustomToolbar';
  import mainMenu from './MainMenu';
  import Vue from 'Vue';
  import searchField from './SearchField';

  Vue.component('main-menu', mainMenu);
  Vue.component('search-field', searchField);

  let axios = require('axios');

  export default {
    data() {
      return {
        searchParam: "",
        searchQueryUrl: "https://api.themoviedb.org/3/search/movie?api_key=d10678700962ddf56a9a3ef14b38f1df&language=en-US&query="+this.$store.state.searchParam+"&page=1&include_adult=false",
        searching: false
      }
    },
    methods: {
      pop(){
        this.$store.commit('popPageStack'); // Go back
      },
      push(page) {
        this.$store.commit('pushPageStack', page);  // Change page
      },
      initSearch() {
        if (this.searchParam.length > 2) {
          this.$store.commit('setSearchParam', this.searchParam);
          axios.get(this.searchQueryUrl)
            .then(function (response) {
                console.log(response);
                this.$store.commit('pushPageStack', 4);
            })
            .catch(function (error) {
                console.log(error.message);
            });
            this.searching = true; // Trigger loading animation in the template
        }
      }
    },
    props: [ 'pageStack'],
    components: { customToolbar, mainMenu }
  }
</script>
