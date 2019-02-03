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

    </v-toolbar>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
    name: 'Toolbar',
    data: () => {
        return {
            icons: [
                { pic: 'fas fa-home', title: 'Home' },
                { pic: 'fas fa-list-alt', title: 'See All Resources' },
                { pic: 'fas fa-comments', title: 'Feedback' },
            ]
        }
    }
}
</script>
