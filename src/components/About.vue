<template>
    <v-layout justify-center
        align-start
        row
        fill-height
    >
        <v-card
            height="62vh"
            width="60vw"
            class="mt-5 pa-3"
            style="border-radius: 10px;"
            hover
        >

            <v-card-title
                class="secondary--text headline"

            >
                What is No Wrong Door?
            </v-card-title>

            <v-divider></v-divider>

            <v-card-text
                class="subheading"
            >
                Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Numquam quod corporis placeat, 
                alias est perspiciatis suscipit optio possimus iure delectus animi omnis, 
                quia autem! Impedit quam consequatur laborum magni porro distinctio tempora vel 
                magnam facere, in quos atque repellat quas pariatur dolorem voluptatem autem 
                praesentium ratione iusto officia veniam! Consequatur assumenda quis earum delectus. 
                Placeat nobis odio aliquam! Sit veniam id obcaecati consectetur. Provident vero 
                atque maxime soluta reiciendis est quisquam ex fuga, asperiores veritatis animi 
                aliquid eligendi deleniti ipsam consectetur et! Ratione iste sit enim sunt necessitatibus commodi aut, minima ab. 
                Doloremque quasi voluptatem omnis fuga dolores, corporis molestiae.
            </v-card-text>

            <v-card-actions>
                <v-layout justify-end>
                    <v-btn color="primary"
                        ripple
                    >
                        GET STARTED
                    </v-btn>
                </v-layout>
            </v-card-actions>
        </v-card>
    </v-layout>
</template>

<script>
export default {
    name: 'About',
    data: () => {
        return {
            //
        }
    }
}
</script>
