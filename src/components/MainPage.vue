<template>
  <v-ons-page>
    <custom-toolbar>My Movie List</custom-toolbar>
    <div id="banner" >
      <ons-icon v-show="$store.state.isSearching" size="150px" spin icon="md-spinner"></ons-icon>
    </div>
    <div id="main-bottom" >
      <search-field></search-field>     <!-- Imported component -->
      <main-menu/>  <!-- Imported component -->
    </div>
  </v-ons-page>
</template>

<script>
  import customToolbar from './CustomToolbar';
  import mainMenu from './MainMenu';
  import Vue from 'Vue';
  import searchField from './SearchField';

  export default {
    props: [ 'pageStack'],
    components: { 
      customToolbar, 
      mainMenu, 
      searchField 
    }
  }
</script>
