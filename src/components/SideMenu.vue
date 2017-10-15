<template
    <v-ons-splitter>
        <v-ons-splitter-side
            swipeable width="150px" collapse="" side="left"
            :open.sync="$store.state.openSide">
            <v-ons-page>
            <!--
            <v-ons-list>
                <v-ons-list-item v-for="(page,iter) in pages"
                tappable modifier="chevron" v-bind:key=iter
                @click="changePage()">
                <div class="center">{{ page }}</div>
                </v-ons-list-item>
            </v-ons-list>
            -->
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
export default {
    methods: {
        changePage() {
            //currentPage = page; 
            this.$store.commit('toggleSideSplitter');
        }
    }
}
</script>