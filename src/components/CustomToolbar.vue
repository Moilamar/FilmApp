<template>
  <div style='marginBottom:7.5vh'>
    <side-menu></side-menu> <!-- Splitter sidebar -->

    <v-ons-toolbar modifier='android' style='position:fixed'>

      <div class='left'>
        <v-ons-back-button>{{ backLabel }}</v-ons-back-button>
      </div>
         
      <div class='center'>
        <slot></slot>
      </div>

       <div class='right'>
        <ons-icon @click='toggleMenu()'
                  size='9vw'
                  icon='ion-navicon, material:md-menu'
        ></ons-icon>
        <!--<ons-icon @click='openSettings()' size='2x' icon='ion-gear-b'></ons-icon>-->
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
    }
  },
  props: ['backLabel'],
  components: { sideMenu }
}
</script>
