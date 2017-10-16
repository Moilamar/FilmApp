<template>
    <v-ons-splitter style="marginTop:44px;">
        <v-ons-splitter-side
            swipeable width="" collapse="" side="left"
            :open.sync="$store.state.openSide">
            <v-ons-page>
            <v-ons-list>
                <v-ons-list-item v-for="(page,iter) in labels"
                    tappable modifier="chevron" v-bind:key=iter
                    @click="changePage(page)">
                    <div class="center">{{labels[iter]}}</div>
                </v-ons-list-item>
            </v-ons-list>
            </v-ons-page>
        </v-ons-splitter-side>
 <!--
        <v-ons-splitter-content>
            <component :is="currentPage" :toggle-menu="() => $store.commit('toggleSideSplitter')"></component>
        </v-ons-splitter-content>
-->
        
    </v-ons-splitter>
</template>

<script>
// Pages
/* import listMoviesPage from './ListMoviesPage';
import searchPage from './SearchPage'; 
import settingsPage from './SettingsPage';
import toWatchPage from './ToWatchPage';
import favoritesPage from './FavoritesPage';
import recommendationsPage from './RecommendationsPage';  */

export default {
    data() {
        return {
            /* pages: [
                listMoviesPage,
                toWatchPage,
                favoritesPage,
                recommendationsPage,
                settingsPage
            ], */
            labels: [
                "Watched Movies",
                "To-Watch List",
                "My Favorites",
                "Recommendations",
                "Settings"
            ]
        }
    },
    methods: {
        changePage(page) {
            //currentPage = page; 
            this.$store.commit('toggleSideSplitter');
            this.$store.commit('pushPageStack', page);
        }
    }
}
</script>