<template>
  <v-ons-navigator :page-stack="pageStack">
    <component :is="page" v-for="(page, iter) in pageStack" :page-stack="pageStack" v-bind:key="iter"></component>
  </v-ons-navigator>
</template>

<script>
  import mainPage from './components/MainPage';
  import page2 from './components/Page2';

  export default {
    data() {
      return {
        pageStack: [mainPage],
        navigator: this
      }
    }
  }
</script>
