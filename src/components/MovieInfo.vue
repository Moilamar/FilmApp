<template>
    <v-ons-page>
        <basic-info :movie="movie"></basic-info>
        <div class="movie-info">
            <h2>Overview</h2>
            <v-ons-row>
                <v-ons-col>{{ $store.state.movie.overview }}</v-ons-col>
            </v-ons-row>

            <h2>Cast</h2>
            <v-ons-row>
                <!-- <v-ons-col>{{ cast.crew[0].job }}</v-ons-col> -->
            </v-ons-row>
        </div>
        
    </v-ons-page>
</template>

<script>
import basicInfo from './BasicInfo';


export default {
    data() {
        return {
            cast: this.$store.state.cast
        }
    },
    methods: {
        getDirectors() {

        },
        getProducers() {

        },
        getActors() {

        }
    },
    props: [ 'movie' ],
    components: { basicInfo }
}
</script>
