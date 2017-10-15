<template>
  <v-ons-page>
    <custom-toolbar :back-label="'Back'">Settings</custom-toolbar>
    <v-ons-switch input-id="switch1" v-model="switchOn"></v-ons-switch>
    <v-ons-switch input-id="switch1" v-model="switchOn"></v-ons-switch>
    <v-ons-switch input-id="switch1" v-model="switchOn"></v-ons-switch>
    <v-ons-range v-model="volume" style="width: 100%;"></v-ons-range>
    <!--language-->
    <!-- region -->
    <v-ons-button modifier="large material" style="margin: 6px 0">Apply</v-ons-button>
    <!-- bug report -->
  </v-ons-page>
</template>

<script>
  import customToolbar from './CustomToolbar';

  export default {
    data() {
      adultFilter = false;
      socialMedia = true;
      notifications = true;
      resultsPerPage = 10;
    }
    components: { customToolbar }
  }
</script>
