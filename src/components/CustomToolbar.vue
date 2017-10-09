<template>
  <div>
    <v-ons-splitter>
    <v-ons-splitter-side
      swipeable width="150px" collapse="" side="left"
      :open.sync="this.$store.state.openSide">
      <v-ons-page>
        <!--
        <v-ons-list>
          <v-ons-list-item v-for="(page,iter) in pages"
            tappable modifier="chevron" v-bind:key=iter
            @click="currentPage = page; openSide = false">
            <div class="center">{{ page }}</div>
          </v-ons-list-item>
        </v-ons-list>
        -->
      </v-ons-page>
    </v-ons-splitter-side>
<!--
    <v-ons-splitter-content>
      <component :is="currentPage" :toggle-menu="() => openSide = !openSide"></component>
    </v-ons-splitter-content>
  
-->
    </v-ons-splitter>



  <v-ons-toolbar modifier="android">
    <div class="left">
      <ons-icon @click="toggleMenu()" size="2x" icon="ion-navicon, material:md-menu"></ons-icon>
      </div>
      <v-ons-back-button :on-click="pop">{{ backLabel }}</v-ons-back-button>
    <div class="center"><slot></slot></div>
  </v-ons-toolbar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        openSide: true
      }
    },
    methods: {
      toggleMenu() {
        this.$store.commit('toggleSideSplitter');
      }
    },
    props: ['pop','backLabel']
  }
</script>
