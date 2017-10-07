<template>
  <v-ons-page>
    <custom-toolbar>Main page</custom-toolbar>
    <div id="banner"></div>
    <div id="main-bottom">
      <div id="main-menu">
        <v-ons-row>
          <v-ons-col/>
          <v-ons-col><v-ons-button @click="push(1)"></v-ons-button></v-ons-col>
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
  import page2 from './Page2';

  export default {
    data() {
      return {
        test: this.$store.state.test
      }
    },
    methods: {
      pop(){
        this.pageStack.pop();
      },
      push(page) {
        console.log(this.test);
        switch(page){
          case 1: this.pageStack.push(page2); break;
          case 2: this.pageStack.push(); break;
          default: console.log("Error: Cannot find page."); break;
        }
      }
    },
    props: ['pageStack'],
    components: { customToolbar }
  }
</script>
