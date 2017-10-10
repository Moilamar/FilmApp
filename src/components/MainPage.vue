<template>
  <v-ons-page>
    <custom-toolbar>Main page</custom-toolbar>
    <div id="banner"></div>
    <div id="main-bottom">
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
      //this.$store.commit('setPageStack', this.pageStack);
      return {
        0: 0
      }
    },
    methods: {
      pop(){
        this.$store.commit('popPageStack');
      },
      push(page) {
        this.$store.commit('pushPageStack', page);
      },
    },
    props: [ 'pageStack'],
    components: { customToolbar }
  }
</script>
