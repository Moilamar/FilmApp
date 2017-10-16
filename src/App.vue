<template>
  <v-ons-navigator :page-stack="pageStack">
    <component :is="page" v-for="(page, iter) in pageStack" 
    :page-stack="pageStack" :key="iter"></component>
  </v-ons-navigator>
</template>

<script>
  import { store } from './store';

  export default {
    data() {
      return {
        pageStack: this.$store.state.pageStack
      }
    }
  }
</script>
