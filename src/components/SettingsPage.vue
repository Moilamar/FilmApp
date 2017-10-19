<template>
  <v-ons-page class="settings">
    <custom-toolbar :back-label="'Back'">Settings</custom-toolbar>

    <v-ons-list-header>Movie Info Settings</v-ons-list-header>

    <v-ons-list-item>
      <label>Adult Filter</label>
      <div class="right"><v-ons-switch input-id="adultFilter" 
      v-model="settings.adultFilter" modifier="material"></v-ons-switch></div>
    </v-ons-list-item>

    <v-ons-list-item>
      <label>Movie Info Language</label>
      <div class="right"><v-ons-select modifier="" style="width: 40%" v-model="settings.language[1]">
        <option v-for="(language, index) in languages" :name="language" :key="index">
          {{ languages[index][0] }}
        </option>
      </v-ons-select></div>
    </v-ons-list-item>

    <v-ons-list-item>
      <label>Regional Info</label>
      <div class="right"><v-ons-select style="width: 40%" v-model="settings.region">
        <option v-for="(region, index) in regions" :name="region" :key="index">
          {{ regions[index] }}
        </option>
      </v-ons-select></div>
    </v-ons-list-item>

    <v-ons-list-item>
      <label>Results Per Page</label>
      <div class="right"><v-ons-range v-model="tempResultsPerPage" 
      style="width: 100%;" modifier="material"></v-ons-range></div>
      <!-- {{ settings.resultsPerPage }} -->
    </v-ons-list-item>

    <v-ons-list-header>Application Settings</v-ons-list-header>

    <v-ons-list-item>
      <label>Sounds</label>
      <div class="right"><v-ons-switch input-id="sounds" 
      v-model="settings.sounds" modifier="material"></v-ons-switch></div>
    </v-ons-list-item>

    <v-ons-list-item>
      <label>Enable Notifications</label>
      <div class="right"><v-ons-switch input-id="notifications"
       v-model="settings.allowNotifications" modifier="material"></v-ons-switch></div>
    </v-ons-list-item>

    <v-ons-list-item>
      <label>Allow Social Media Links</label>
      <div class="right"><v-ons-switch input-id="social-media"
       v-model="settings.allowSocialMedia" modifier="material"></v-ons-switch></div>
    </v-ons-list-item>

    <v-ons-list-item>
      <v-ons-button @click="applySettings()" modifier="large material"  style="margin: 6px 0">Apply</v-ons-button>
    </v-ons-list-item>

  </v-ons-page>
</template>

<script>
import customToolbar from './CustomToolbar';

export default {
  data() {
    return {
      settings: this.$store.state.settings,
      languages: [["English","en-US"],["German",""],["French",""],["Chinese",""]],
      regions: ["Worldwide", "North America",  "Europe", "Asia", "China"]
    }
  },
  computed: {
    tempResultsPerPage: function() {
      return this.settings.resultsPerPage * 4;
    }
  },
  methods: {
    applySettings() {
      this.$store.commit('applySettings', this.settings);
    }
  },
  components: { customToolbar }
}
</script>
