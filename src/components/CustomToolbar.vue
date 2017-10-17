<template>
  <div style="marginBottom:5.3vh">
    <side-menu></side-menu> <!-- Splitter sidebar -->
    <v-ons-toolbar modifier="android">
      
      <div class="left"><v-ons-back-button :on-click="pop">{{ backLabel }}</v-ons-back-button>
        <ons-icon @click="toggleMenu()" size="2x" icon="ion-navicon, material:md-menu"></ons-icon>
      </div>      
      <div class="center"><slot></slot></div>
      <div class="right">
        <ons-icon @click="openSettings()" size="2x" icon="ion-gear-b"></ons-icon>
      </div>
    </v-ons-toolbar>
  </div>
</template>

<script>
import sideMenu from './SideMenu';

export default {
  methods: {
    toggleMenu() {
      this.$store.commit('toggleSideSplitter');
    },
    openSettings() {
      this.$store.commit('pushPageStack', 2);
    }
  },
  props: ['pop','backLabel'],
  components: { sideMenu }
}
</script>
