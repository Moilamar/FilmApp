<template>
    <form class="center" @submit.prevent="searchMovies()">
        <v-ons-search-input modifier="material" float name="search" placeholder="Search movies" 
        @keyup.enter="submit" v-model="searchParam"></v-ons-search-input>
    </form>
</template>

<script>
let axios = require('axios');

export default {
    data() {
        return {
            searchParam: ""
        }
    },
    methods: {
        getSearchQueryUrl() {
            return "https://api.themoviedb.org/3/search/movie?api_key=d10678700962ddf56a9a3ef14b38f1df&language=en-US&query="+this.searchParam+"&page=1&include_adult=false";
        },
        searchMovies() {
        if (this.searchParam.length > 2) {
            this.$store.commit('setSearchParam', this.searchParam);
            const callback = (movieList) => { 
                this.$store.commit('setMovieList', movieList);
                this.$store.commit('pushPageStack', 4); 
            }
            axios.get(this.getSearchQueryUrl())    
                .then(function (response) { // Success promise
                    console.log(response);
                    if (response.status == 200 && response.data.results.length) {
                        console.log("Before");
                        callback(response.data.results);
                        console.log("After callback");
                    }
                    else return;
                })
                .catch(function (error) {   // Error caught
                    console.log("ERR: "+error.message);
                    // Show error
                    return;
                });
                this.$store.commit('startSearch');  // Show loading icon asynchronously
        }
      }
    }
}
</script>