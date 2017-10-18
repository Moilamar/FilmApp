<template>
    <div id="carousel">
        <v-ons-carousel swipeable auto-scroll overscrollable event.direction="left"
        :index.sync="carouselIndex" >
            <v-ons-carousel-item v-for="(value, key) in carouselItems" :key="key">
                <img :src="getImageUrl(key)"/>
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
            dotIndex: 1
        }
    },
    computed: {
        currentMoviesUrl: function() {
            return "https://api.themoviedb.org/3/movie/popular?api_key="+this.$store.state.apiKey+
            "&language="+this.$store.state.settings.language[1]+"&page=1";
        }
    },
    mounted() {
        this.getHotMovies();
    },
    methods: {
        getImageUrl(index) {
            console.log(this.carouselItems[index].poster_path);
            return "http://image.tmdb.org/t/p/w185/"+this.carouselItems[index].poster_path;
        },
        nextCarouselItem() {
            carouselIndex++;
            console.log(carouselIndex);
        },
        getHotMovies() {
            const callback = (response) => {
                console.log(response);
                this.carouselItems = response.data.results.slice(0,5);
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
        }
    }
}
</script>