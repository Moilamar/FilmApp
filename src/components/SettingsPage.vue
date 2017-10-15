<template>
  <v-ons-page>
    <custom-toolbar :back-label="'Back'">Settings</custom-toolbar>
    <v-ons-switch input-id="adultFilter" v-model="adultFilter"></v-ons-switch>
    <v-ons-switch input-id="notifications" v-model="allowNotifications"></v-ons-switch>
    <v-ons-switch input-id="recommendation" v-model="allowSocialMedia"></v-ons-switch>
    <v-ons-switch input-id="mute" v-model="muteSounds"></v-ons-switch>
    <v-ons-range v-model="resultsPerPage" style="width: 100%;"></v-ons-range>
    <v-ons-select style="width: 40%" v-model="language">
      <option v-for="language in languages" :name="language.value">
        {{ language.text }}
      </option>
    </v-ons-select>
    <v-ons-select style="width: 40%" v-model="selectedRegion">
      <option v-for="region in regions" :name="region.value">
        {{ region.text }}
      </option>
    </v-ons-select>
    <v-ons-button @click="applySettings()" modifier="large material" style="margin: 6px 0">Apply</v-ons-button>
  </v-ons-page>
</template>

<script>
  import customToolbar from './CustomToolbar';

  export default {
    data() {
      settings: this.$store.state.settings
    },
    methods: {
      applySettings() {
        console.log("Applying settings");
      }
    },
    components: { customToolbar }
  }
</script>
