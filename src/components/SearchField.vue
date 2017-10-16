<template>
    <form class="center" @submit.prevent="searchMovies()">
        <v-ons-search-input modifier="material" float name="search" placeholder="Search movies" 
        @keyup.enter="submit" v-model="searchParam"></v-ons-search-input>
    </form>
</template>

<script>
import searchPage from './SearchPage';

let axios = require('axios');

export default {
    data() {
        return {
            searchParam: ""
        }
    },
    computed: {
        searchQueryUrl: function() {
            return "https://api.themoviedb.org/3/search/movie?api_key=d10678700962ddf56a9a3ef14b38f1df&language=en-US&query="+this.searchParam+"&page=1&include_adult=false";
        }
    },
    methods: {
        getSearchQueryUrl() {
            return;
        },
        searchMovies() {
        if (this.searchParam.length > 2) {
            this.$store.commit('setSearchParam', this.searchParam);
            const callback = (movieList) => { 
                this.$store.commit('setMovieList', movieList);
                this.$store.commit('pushPageStack', searchPage);
                return;
            }
            axios.get(this.searchQueryUrl)    
                .then(function (response) { // Success promise
                    console.log(response);
                    if (response.status == 200 && response.data.results.length) {
                        callback(response.data.results);
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