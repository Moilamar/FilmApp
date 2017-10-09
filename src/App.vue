<template>
  <v-ons-navigator :page-stack="pageStack" var="navi">
    <component :is="page" v-for="(page, iter) in pageStack" 
    :page-stack="pageStack" :key="iter"></component>
  </v-ons-navigator>
</template>

<script>
  import mainPage from './components/MainPage';
  import page2 from './components/Page2';
  import { store } from './store';

  export default {
    data() {
      return {
        pageStack: this.$store.state.pageStack
      }
    }
  }
</script>
