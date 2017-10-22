<template>
  <v-ons-page>
    <custom-toolbar :back-label="'Back'">Settings</custom-toolbar>
  </v-ons-page>
</template>

<script>
  import customToolbar from './CustomToolbar';

  export default {
    methods: {
      getCurrentMovies() {
        const callback = (response) => {
            this.movies = response.data.results;
            this.ready = true;
        }
        axios.get(this.currentMoviesUrl)
            .then(function (response) { // Success promise
                console.log(response);
                if (response.status == 200) {
                    callback(response);
                }
                else return;
            })
            .catch(function (error) {   // Error caught
                console.log("ERR: "+error.message);
                this.$ons.notification.toast({message:"An error occured", timeout: 3000});
                return;
            });
        },
    },
    components: { customToolbar }
  }
</script>
