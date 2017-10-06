<template>
  <v-ons-page>
    <custom-toolbar>Page 1</custom-toolbar>
    <div id="banner"></div>
    <div id="main-bottom">
      <div id="main-menu">
        <ons-row align='center'>
          <ons-col></ons-col>
          <ons-col><ons-button></ons-button></ons-col>
          <ons-col><ons-button></ons-button></ons-col>
          <ons-col><ons-button></ons-button></ons-col>
          <ons-col></ons-col>
        </ons-row>
        <ons-row align='center'>
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
  import customToolbar from './CustomToolbar';
  import page2 from './Page2';
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
</script>
