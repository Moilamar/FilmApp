<template>
    <div id="carousel">
        <v-ons-carousel swipeable auto-scroll overscrollable :index.sync="carouselIndex" centered
        :postchange="indexChanged()" auto-scroll-ratio="0.5" 
        direction="horizontal" item-width="73%" options.animationOptions="{ duration: 3, timing: 'ease-in' }">
            <v-ons-carousel-item class="carousel-item" v-for="(movie, key) in carouselItems" :key="key">
                <img class="carousel-img" :src="getImageUrl(key)" @click="toMoviePage(movie,key,carouselIndex)"/>
            </v-ons-carousel-item>
        </v-ons-carousel>

        <div class="dots">
            <span :index="dotIndex - 1" v-for="dotIndex in Object.keys(carouselItems).length" 
            :key="dotIndex" style="cursor: pointer" @click="carouselIndex = dotIndex - 1">
                {{ carouselIndex === dotIndex - 1 ? '\u25CF' : '\u25CB' }}
            </span>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            carouselItems: [],
            carouselIndex: 0,
            dotIndex: 1,
            ready: false,
            timer: setInterval(this.nextItem, 6000),
            allowClick: true
        }
    },
    computed: {
        currentMoviesUrl: function() {
            return "https://api.themoviedb.org/3/movie/popular?api_key="+this.$store.state.apiKey+
                "&language="+this.$store.state.settings.language[1]+"&page=1";
        }
    },
    mounted() {
        if (this.ready) return;
        else this.getCurrentMovies();
        
    },
    methods: {
        indexChanged() { // Start timer again after user interaction
            
            clearInterval(this.timer);
        },
        getImageUrl(index) {
            return "http://image.tmdb.org/t/p/w342/"+this.carouselItems[index].poster_path;
        },
        nextItem() {
            this.carouselIndex = (this.carouselIndex >= 4 ? 0 : this.carouselIndex + 1);
        },
        getCurrentMovies() {
            const callback = (response) => {
                this.carouselItems = response.data.results.slice(0,5);
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
                    // Show error
                    return;
                });
        },
        toMoviePage(movie,index,crntIndex) {
            if (this.allowClick && index == crntIndex) {
                this.$store.commit('setMovie', movie);
                this.$store.commit('pushPageStack', 1);
            }
        }
    }
}
</script>
