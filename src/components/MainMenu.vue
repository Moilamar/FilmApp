<template>
    <div id="main-menu">
        <v-ons-row>
          <v-ons-col/>
          <v-ons-col><v-ons-button modifier="material" @click="push(2)">Watched Movies</v-ons-button></v-ons-col>
          <v-ons-col><v-ons-button modifier="material" @click="push(3)">Plan-To-Watch</v-ons-button></v-ons-col>
          <v-ons-col><v-ons-button modifier="material" @click="push(4)">Favorites</v-ons-button></v-ons-col>
          <v-ons-col/>
        </v-ons-row>
        <v-ons-row>
          <v-ons-col/>
          <v-ons-col><v-ons-button modifier="material" @click="push(5)">Recommended</v-ons-button></v-ons-col>
          <v-ons-col><v-ons-button modifier="material" @click="push(6)">Custom Lists</v-ons-button></v-ons-col>
          <v-ons-col><v-ons-button modifier="material" @click="push(7)">Settings</v-ons-button></v-ons-col>
          <v-ons-col/>
        </v-ons-row>
      </div>
</template>

<script>
export default {
  methods: {
    pop(){
        this.$store.commit('popPageStack'); // Go back
    },
    push(page) {
        this.$store.commit('pushPageStack', page);  // Change page
    },
  }
}

</script>