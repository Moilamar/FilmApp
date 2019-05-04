<template>
  <div id='main-menu'>
    <v-ons-row>
      <v-ons-col width='26vw'>
        <v-ons-button modifier='material'
                      ripple
                      @click='push(3)'
        >
<!--          <img class='btn-img' src='../media/my_movies_red.svg'/>-->
          <p>My Movies</p>
        </v-ons-button>
      </v-ons-col>

      <v-ons-col width='26vw'>
        <v-ons-button modifier='material'
                      ripple
                      @click='push(4)'
        >
<!--          <img class='btn-img' src='../media/to_watch.png'/>-->
          <p>To-Watch</p>
        </v-ons-button>
      </v-ons-col>

      <v-ons-col width='26vw'>
        <v-ons-button modifier='material'
                      ripple
                      @click='push(6)'
        >
<!--          <img class='btn-img' src='../media/heart.svg'/>-->
          <p>Favorites</p>
        </v-ons-button>
      </v-ons-col>
    </v-ons-row>

    <v-ons-row>
      <v-ons-col width='26vw'>
        <v-ons-button modifier='material'
                      ripple
                      @click='push(5)'
        >
<!--          <img class='btn-img' src='../media/recommended.svg'/>-->
          <p>For you</p>
        </v-ons-button>
      </v-ons-col>

      <v-ons-col width='26vw'>
        <v-ons-button modifier='material'
                      ripple
                      @click='push(7)'
        >
<!--          <img class='btn-img' src='../media/hot.svg'/>-->
          <p>Hot</p>
        </v-ons-button>
      </v-ons-col>

      <v-ons-col width='26vw'>
        <v-ons-button modifier='material'
                      ripple
                      @click='push(8)'
        >
<!--          <img class='btn-img' src='../media/in_theaters.png'/>-->
          <p>In Theaters</p>
        </v-ons-button>
      </v-ons-col>
    </v-ons-row>
  </div> <!-- TODO: v-for -->
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
  },
}
</script>
