<template>
  <v-ons-page>
    <custom-toolbar>My Movie List</custom-toolbar>
    <div id="banner"></div>
    <div id="main-bottom">
    <form class="center" @submit.prevent="initSearch()">
      <v-ons-search-input modifier="material" float name="search" placeholder="Search movies" 
      @keyup.enter="submit" v-model="searchParam"></v-ons-search-input>
    </form>
      <div id="main-menu">
        <v-ons-row>
          <v-ons-col/>
          <v-ons-col><v-ons-button @click="push(2)"></v-ons-button></v-ons-col>
          <v-ons-col><v-ons-button @click="push(2)"></v-ons-button></v-ons-col>
          <v-ons-col><v-ons-button @click="push(3)"></v-ons-button></v-ons-col>
          <v-ons-col/>
        </v-ons-row>
        <v-ons-row>
          <v-ons-col/>
          <v-ons-col><v-ons-button @click="push(4)"></v-ons-button></v-ons-col>
          <v-ons-col><v-ons-button @click="push(5)"></v-ons-button></v-ons-col>
          <v-ons-col><v-ons-button @click="push(6)"></v-ons-button></v-ons-col>
          <v-ons-col/>
        </v-ons-row>
      </div>
    </div>
  </v-ons-page>
</template>

<script>
  import customToolbar from './CustomToolbar';

  export default {
    data() {
      return {
        searchParam: ""
      }
    },
    methods: {
      pop(){
        this.$store.commit('popPageStack');
      },
      push(page) {
        this.$store.commit('pushPageStack', page);
      },
      initSearch(searchParam) {
        
        console.log("https://api.themoviedb.org/3/search/movie?api_key=d10678700962ddf56a9a3ef14b38f1df&language=en-US&query=searchParam&page=1&include_adult=false");
      }
    },
    props: [ 'pageStack'],
    components: { customToolbar }
  }
</script>
