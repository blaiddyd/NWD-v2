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
                open-all
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
                <v-card
                    v-if="selected"
                    :key="selected.id"
                    class="primary pt-4 mx-auto"
                    flat
                    max-width="700"
                    max-height="500"
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
                    <v-layout column align-center justify-center>
                        <h3 class="white--text">
                            Address
                        </h3>
                        <p class="caption">
                            {{ selected.address }}
                        </p>
                        <v-divider></v-divider>

                          <h3 class="white--text">
                            Website
                        </h3>
                        <a :href="selected.web" target="_blank" class="white--text subtitle">
                            {{ selected.web }}
                        </a>
                        <v-divider></v-divider>

                          <h3 class="white--text">
                            Contact
                        </h3>
                        <p class="caption">
                            {{ selected.contact }}
                        </p>
                        <v-divider></v-divider>

                          <h3 class="white--text">
                            Hours
                        </h3>
                        <p class="caption">
                            {{ selected.hours }}
                        </p>
                        <v-divider></v-divider>
                        


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

        pagination() {
            return {
                page: 1,
                total: this.orgs.length / 10,
                visible: 7,
            }
        },

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
