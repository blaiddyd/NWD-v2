<template>
    <v-toolbar app
        color="primary"
        class="accent--text"
    >
        <v-icon
            color="accent"
            class="my-0"
        >
            fas fa-door-open
        </v-icon>

        <v-toolbar-title
            class="my-0"
        >
            No Wrong Door
        </v-toolbar-title>
        
        <v-spacer></v-spacer>

        <v-tooltip bottom
            v-for="icon in icons"
            :key="icon.pic"
        >
            <v-btn icon
                slot="activator"
                :to="icon.to"
            >
                <v-icon 
                    color="accent"
                    class="mx-2"
                >
                    {{ icon.pic }}
                </v-icon>
            </v-btn>
            <span>{{ icon.title}}</span>
        </v-tooltip>

        <v-tooltip bottom>
            <v-btn icon
                @click="DARK_MODE"
                slot="activator"
            >
                <v-icon v-if="isDark">
                    fas fa-sun
                </v-icon>
                <v-icon v-if="!isDark"
                    color="accent"
                >
                    fas fa-moon
                </v-icon>
            </v-btn>
            <span v-if="isDark">Light</span>
            <span v-if="!isDark">Dark</span>
        </v-tooltip>
    </v-toolbar>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'Toolbar',
    data: () => {
        return {
            icons: [
                { pic: 'fas fa-home', title: 'Home', to: '/' },
                { pic: 'fas fa-search', title: 'Search Resources' },
                { pic: 'fas fa-list-alt', title: 'See All Resources', to: '/all-orgs' },
                { pic: 'fas fa-comments', title: 'Feedback' },
            ]
        }
    },
    computed: {
        ...mapState([
            'isDark'
        ])
    },
    methods: {
        ...mapActions([
            'DARK_MODE'
        ])
    }
}
</script>
