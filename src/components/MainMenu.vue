<template>
    <div id="main-menu">
        <v-ons-row>
          <v-ons-col/>
          <v-ons-col><v-ons-button modifier="material" ripple @click="push()">Watched Movies</v-ons-button></v-ons-col>
          <v-ons-col><v-ons-button modifier="material" ripple @click="push()">To-Watch</v-ons-button></v-ons-col>
          <v-ons-col><v-ons-button modifier="material" ripple @click="push()">Favorites</v-ons-button></v-ons-col>
          <v-ons-col/>
        </v-ons-row>
        <v-ons-row>
          <v-ons-col/>
          <v-ons-col><v-ons-button modifier="material" ripple @click="push()">Recommended</v-ons-button></v-ons-col>
          <v-ons-col><v-ons-button modifier="material" ripple @click="push(7)">Custom Lists</v-ons-button></v-ons-col>
          <v-ons-col><v-ons-button modifier="material" ripple @click="push(settingsPage)">Settings</v-ons-button></v-ons-col>
          <v-ons-col/>
        </v-ons-row>
      </div>
</template>

<script>
// Pages
import listMoviesPage from './ListMoviesPage';
import searchPage from './SearchPage';
import settingsPage from './SettingsPage';
import toWatchPage from './ToWatchPage';
import favoritesPage from './FavoritesPage';

export default {
  data() {
    return {
      listMoviesPage,
      searchPage,
      settingsPage,
      toWatchPage,
      favoritesPage,
      settingsPage
    }
  },
  methods: {
    pop(){
        this.$store.commit('popPageStack'); // Go back
    },
    push(page) {
        this.$store.commit('pushPageStack', page);  // Change page
    },
  }
}

</script>