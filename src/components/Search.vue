<template>
    <v-layout align-center justify-center column>
        <v-card class="mt-5 mb-4 pa-3"
            width="50%"
        >
            <v-form>
                <v-text-field
                    type="number"
                    placeholder="Enter your age"
                    label="Age"
                    v-model="ageInput"
                ></v-text-field>

                <v-select
                    :items="suburbs"
                    v-model="suburbInput"
                    label="Suburb"
                    placeholder="Select your suburb"
                ></v-select>

                <v-select
                    :items="needs"
                    v-model="needInput"
                    label="What are you looking for?"
                    placeholder="Select your area of need"
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
        <v-layout align-center justify-center column
                v-if="!searching && show && results.length > 0"
            >
                <v-card v-for="(result, index) in results"
                    :key="index" width="80%" class="ma-3 pa-3"
                >
                    {{ result.name }}
                    {{ result.field }}
                    {{ result.suburb }}
                    {{ `${result.age[0]} - ${result.age[1]}` }}
                    {{ result.address }}
                    {{ result.hours }}
                    {{ result.web }}
                    {{ result.contact }}

                </v-card>
                
            </v-layout>
            <v-layout align-center justify-center column
                v-else
            >
                <v-alert :value="true"
                    icon="fas fa-sad-tear"
                    color="error"
                >
                    None of the organizations matched your search criteria!

                </v-alert>

        </v-layout>
    </v-layout>
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
        }
    },
    computed: {
        ...mapGetters({
            suburbs: 'GET_SUBURBS',
            needs: 'GET_NEEDS'
        }),
        ...mapState({
            orgs: 'orgs'
        })
    },
    methods: {
        search(age, suburb, need) {
            this.results = this.orgs.filter(element => {
                this.searching = true;
                return element.suburb === suburb 
                    && element.field === need;
            });
            this.searching = false;
            this.show = true;
        }
    }
}
</script>

