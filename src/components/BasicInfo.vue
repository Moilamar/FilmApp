<template>
    <div>
        <v-ons-row class="movie-top">
            <!-- <ons-icon size="50px" icon="ion-checkmark-round"></ons-icon>
            <ons-icon size="50px" icon="ion-thumbsup"></ons-icon>
            <ons-icon size="50px" icon="ion-thumbsdown"></ons-icon>    -->
            <ons-icon size="100px" icon="ion-heart"></ons-icon> 
            <!--<v-ons-checkbox
                    :input-id="'checkbox-' + $index"
                    :value="color"
                    v-model="checkedColors"
                ><youtube v-if="videoId" :video-id="videoId"></youtube> -->
            </v-ons-row>
            <v-ons-row id="movie-main"> <!-- General movie info -->
            <v-ons-col width="45.5vw">
                <div class="poster-card"><img class="poster-big" :src="imageUrl"></img></div>
            </v-ons-col>
            <v-ons-col style="marginLeft:4vw;">
                <h1 class="title">{{ movie.title }}</h1>
                <span class="year">{{ formattedDate }}</span>
                
                <!-- score -->
            </v-ons-col>
        </v-ons-row>
    </div>
</template>

<script>
export default {
  data() {
    return {
      videoId: null
    }
  },
  created() {
    console.log(this.movie);
    this.date = new Date(this.movie.release_date);
  }, 
  computed: {
    imageUrl: function() {
      return "http://image.tmdb.org/t/p/w185/"+this.movie.poster_path;
    },
    formattedDate: function() {
        /* return this.monthNames[this.date.getMonth()]+" "+this.date.getDate()+
        " "+this.date.getFullYear(); */
    }
  },
  methods: {
    
  },
  props: ['movie'],
  components: {  }
}
</script>

