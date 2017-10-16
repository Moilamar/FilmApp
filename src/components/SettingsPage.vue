<template>
  <v-ons-page>
    <custom-toolbar :back-label="'Back'">Settings</custom-toolbar>
    <v-ons-switch input-id="adultFilter" v-model="settings.adultFilter"></v-ons-switch>
    <v-ons-switch input-id="notifications" v-model="settings.allowNotifications"></v-ons-switch>
    <v-ons-switch input-id="recommendation" v-model="settings.allowSocialMedia"></v-ons-switch>
    <v-ons-switch input-id="mute" v-model="settings.muteSounds"></v-ons-switch>
    <v-ons-range v-model="settings.resultsPerPage" style="width: 100%;"></v-ons-range>
    <v-ons-select style="width: 40%" v-model="settings.language">
      <option v-for="(language, index) in languages" :name="language">
        {{ languages[index] }}
      </option>
    </v-ons-select>
    <v-ons-select style="width: 40%" v-model="settings.selectedRegion">
      <option v-for="(region, index) in regions" :name="region">
        {{ regions[index] }}
      </option>
    </v-ons-select>
    <v-ons-button @click="applySettings()" modifier="large material" style="margin: 6px 0">Apply</v-ons-button>
  </v-ons-page>
</template>

<script>
  import customToolbar from './CustomToolbar';

  export default {
    data() {
      return {
        settings: this.$store.state.settings,
        languages: ["English", "German", "French", "Chinese", "Spanish"],
        regions: ["Worldwide", "North America",  "Europe", "Asia", "China"]
      }
    },
    methods: {
      applySettings() {
        console.log("Applying settings");
      }
    },
    components: { customToolbar }
  }
</script>
