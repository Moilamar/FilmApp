<template>
  <v-ons-page>
    <custom-toolbar>{{ name }}</custom-toolbar>
    <div id="banner"></div>
    <div id="main-bottom">
      <div id="main-menu">
        <ons-row>
          <ons-col/>
          <ons-col><ons-button></ons-button></ons-col>
          <ons-col><ons-button></ons-button></ons-col>
          <ons-col><ons-button></ons-button></ons-col>
          <ons-col></ons-col>
        </ons-row>
        <ons-row>
          <ons-col></ons-col>
          <ons-col><ons-button></ons-button></ons-col>
          <ons-col><ons-button></ons-button></ons-col>
          <ons-col><ons-button></ons-button></ons-col>
          <ons-col></ons-col>
        </ons-row>
      </div>
    </div>
  </v-ons-page>
</template>

<script>
  import Vue from 'vue';
  import VueOnsen from 'vue-onsenui';
  import Vuex from 'vuex'
  import customToolbar from './CustomToolbar';
  import page2 from './components/Page2';
  export default {
     methods: {
       pop(){
         this.pageStack.pop();
       },
       push() {
         this.pageStack.push(page2);
       }
     },
     props: ['pageStack'],
     components: { customToolbar }
  }

  Vue.component('main-menu', {
    template: <div></div>
  });

  new Vue({
    el: "#app",
    data: {
      name: "viddu"
    } 
  });
</script>
