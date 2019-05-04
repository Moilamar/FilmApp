<template>
  <v-ons-page>
    <basic-info :movie='movie'></basic-info>
  </v-ons-page>
</template>

<script>
import basicInfo from './BasicInfo';
import axios from 'axios';

export default {
  data() {
    return {
      images: null,
      trailer: null
    }
  },
  created() {
    this.getImages();
    this.getTrailer();
  },
  computed: {
    imagesUrl: function() {
      return 'https://api.themoviedb.org/3/movie/' + this.movie.id +
        '/images?api_key=' + this.$store.state.apiKey +
        '&language=' + this.$store.state.settings.language;
    }
  },
  methods: {
    getImages() {
      axios.get(this.imagesUrl)
        .then(function (response) {
          this.images = response.data;
        }.bind(this))
        .catch(function () {
          this.$ons.notification.toast({message:'An error occured while finding images', timeout: 3000});
        }.bind(this));
    },
    getTrailer() {
        // TODO
        /*  const callback = (response) => {
            this.videoId = response.data;
        }
        axios.get(this.trailerUrl)
        .then(function (response) { // Success promise
            console.log(response);
            if (response.status == 200) {
                callback(response);
            }
            else return;
        })
        .catch(function (error) {   // Error caught
            console.log('ERR: '+error.message);
            // Show error
            return;
        }); */
      },
    },
    props: ['movie'],
    components: { basicInfo }
}
</script>
