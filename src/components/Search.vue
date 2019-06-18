<template>
    <v-container>
        <v-layout align-center justify-center column>
            <v-card class="mt-5 mb-4 pa-3"
                width="100%"
            >
                <v-form>
                    <v-text-field
                        type="number"
                        placeholder="Enter your age"
                        label="Age"
                        v-model="ageInput"
                        color="success"
                    ></v-text-field>

                    <v-select
                        :items="suburbs"
                        v-model="suburbInput"
                        label="Suburb"
                        placeholder="Select your suburb"
                        color="success"
                    ></v-select>

                    <v-select
                        :items="needs"
                        v-model="needInput"
                        label="What are you looking for?"
                        placeholder="Select your area of need"
                        color="success"
                    ></v-select>

                    <v-btn color="primary"
                        style="float: right;"
                        ripple
                        @click="search(ageInput, suburbInput, needInput)"
                    >
                        Start the Search
                    </v-btn>


                </v-form>
            </v-card>
                <div v-if="results.length > 0" style="width: 100%">
                    <v-card v-for="(result, index) in results"
                        :key="index" width="100%" class="my-2 pa-3"
                        
                    >
                        <v-card-title primary-title
                            style="font-size: 20pt;"
                            class="primary--text"
                        >
                            {{ result.name }}
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>
                            <v-layout column align-start justify-start>
                                <div class="ma-2">
                                    <v-icon right class="mr-2">
                                        fas fa-hands-helping
                                    </v-icon>
                                    {{ result.field }} 
                                </div>
                                <div class="ma-2">
                                    <v-icon right class="mr-2">
                                        fas fa-home
                                    </v-icon>
                                    {{ result.suburb }} 
                                </div>
                                <div class="ma-2" >
                                    <v-icon right class="mr-2">
                                        fas fa-child
                                    </v-icon>
                                    {{ `${result.age[0]} - ${result.age[1]}` }} 
                                </div>
                                <div class="ma-2">
                                    <v-icon right class="mr-2">
                                        fas fa-map-marker-alt
                                    </v-icon>
                                    {{ result.address }} 
                                </div>
                                <div class="ma-2">
                                    <v-icon right class="mr-2">
                                        fas fa-clock
                                    </v-icon>
                                    {{ result.hours }}
                                </div>

                                <div class="ma-2">
                                    <v-icon right class="mr-2">
                                        fas fa-link
                                    </v-icon>
                                    <a :href="result.web" target="_blank">{{ result.web }}</a>
                                </div>
                                <div class="ma-2">
                                    <v-icon right class="mr-2">
                                        fas fa-phone
                                    </v-icon>
                                    {{ result.contact }}
                                </div>
                            </v-layout>
                        </v-card-text>  
                    </v-card>
                </div>

                <div
                    v-else-if="results.length === 0 && noResults"
                    style="width: 100%;"
                >
                    <v-alert
                        :value="true"
                        color="error"
                        icon="fas fa-frown"
                        style="border-radius: 10px;"
                    >
                        No organizations matched your criteria! Try to start a new search?
                    </v-alert>
                </div>
        </v-layout>
    </v-container>
</template>


<script>
import { mapGetters, mapState } from 'vuex';

export default {
    name: 'Search',
    data: () => {
        return {
           ageInput: 0,
           suburbInput: '',
           needInput: '',
           results: [],
           searching: false,
           show: false,
           noResults: false,
        }
    },
    computed: {
        ...mapGetters({
            suburbs: 'GET_SUBURBS',
            needs: 'GET_NEEDS'
        }),
        ...mapState({
            orgs: 'orgs',
            dark: 'isDark'
        }),
    },
    methods: {
        search(age, suburb, need) {     
            this.results = this.orgs.filter(element => {
                this.searching = true;
                return element.suburb === suburb 
                    && element.field === need
                    && (age >= element.age[0] && age <= element.age[1]);
            });
            this.searching = false;
            this.show = true;
            if (this.results.length === 0) {
                this.noResults = true;
            }
            else {
                this.noResults = false;
            }
        }
    },
}
</script>

<style scoped>
    .v-icon {
        color: #00acc1;
    }

</style>


