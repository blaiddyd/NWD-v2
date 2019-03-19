<template>
    <v-card class="pb-3 mt-3" flat
        color="transparent"
    >
        <v-card-title class="headline">
            Resources Directory
        </v-card-title>
        <v-layout
        justify-space-between
        pa-3
        >
            <v-flex xs5>
                <v-treeview
                :active.sync="active"
                :items="items"
                :open.sync="open"
                item-key="name"
                activatable
                active-class="primary--text"
                class="pa-3"
                transition
                expand-all
                >
                <v-icon
                    v-if="!item.children"
                    slot="prepend"
                    slot-scope="{ item, active }"
                    :color="active ? 'primary' : ''"
                >
                    fas fa-hand-holding-heart
                </v-icon>
                </v-treeview>
            </v-flex>
            <v-flex
                d-flex
                text-xs-center
            >
                <v-scroll-y-transition mode="out-in">
                <div
                    v-if="!selected"
                    class="title grey--text text--lighten-1 font-weight-light"
                    style="align-self: center;"
                >
                    Select a Resource
                </div>
                <v-card
                    v-else
                    :key="selected.id"
                    class="primary pt-4 mx-auto"
                    flat
                    max-width="300"
                    style="border-radius: 15px;"
                    hover
                >
                    <v-card-text>
                    <h3 class="white--text headline mb-2">
                        {{ selected.name }}
                    </h3>
                    <div class="white--text subheading font-weight-bold">
                        {{ selected.field }}
                    </div>
                    <div class="white--text subheading font-weight-bold">
                        {{ selected.suburb }}
                    </div>
                    <div class="white--text subheading font-weight-bold">
                        Ages {{ `${selected.age[0]} - ${selected.age[1]}` }}
                    </div>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-layout
                        tag="v-card-text"
                        text-xs-left
                        wrap
                    >
                    <v-flex tag="strong" xs5 text-xs-right mr-3 mb-2
                        class="white--text"
                    >
                        Address:
                    </v-flex>
                    <v-flex class="white--text">{{ selected.address }}</v-flex>
                    <v-flex tag="strong" xs5 text-xs-right mr-3 mb-2
                        class="white--text"
                    >
                        Hours:
                    </v-flex>
                    <v-flex class="white--text">{{ selected.hours }}</v-flex>
                    <v-flex tag="strong" xs5 text-xs-right mr-3 mb-2
                        class="white--text"
                    >
                        Contact:
                    </v-flex>
                    <v-flex class="white--text">{{ selected.contact }}</v-flex>
                    <v-flex tag="strong" xs5 text-xs-right mr-3 mb-2
                        class="white--text"
                    >
                        Website:
                    </v-flex>
                     <v-flex>
                        <a :href="`${selected.web}`" target="_blank"
                            class="white--text"
                        >
                            {{ selected.web }}
                        </a>
                    </v-flex>
                    </v-layout>
                </v-card>
            </v-scroll-y-transition>
        </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'AllOrgs',
    data: () => {
        return {
            active: [],
            open: [],
        }
    },
    
    computed: {
        ...mapState([
            'orgs',
        ]),

        items() {
            return [
                {
                    name: 'All Resources',
                    children: this.orgs,
                }
            ]
            
        },

        selected() {
            if (!this.active.length) {
                return undefined;
            }

            const name = this.active[0];

            return this.orgs.find((org) => 
                org.name === name
            );
        }
    }
}
</script>
