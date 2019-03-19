<template>
    <v-layout align-center justify-center column>
        <v-card class="mt-5 pa-3"
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
                >
                    Start the Search
                </v-btn>


            </v-form>
        
        </v-card>
    </v-layout>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Search',
    data: () => {
        return {
           ageInput: 0,
           suburbInput: '',
           needInput: '',
        }
    },
    computed: {
        ...mapGetters({
            suburbs: 'GET_SUBURBS',
            needs: 'GET_NEEDS'
        }),
    },
    methods: {
        //
    }
}
</script>

