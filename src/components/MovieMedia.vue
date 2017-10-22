<template>
    <v-ons-page>
        <basic-info :movie="movie"></basic-info>
    </v-ons-page>
</template>

<script>
import basicInfo from './BasicInfo';


export default {
    data() {
        return {

        }
    },
    methods: { 
        getImages() {

        },
        getTrailer() {
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
                console.log("ERR: "+error.message);
                // Show error
                return;
            }); */
        },
    },
    props: [ 'movie' ],
    components: { basicInfo }
}
</script>
