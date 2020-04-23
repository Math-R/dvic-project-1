<template>
    <v-card
            class="mx-auto"
            max-width="400"
    >
        <v-img
                class="white--text align-end"
                height="200px"
                :src="img"
        >
            <v-card-title>{{name}}</v-card-title>
        </v-img>
        <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>
        <v-card-text class="text--primary">
            <div>{{description}}</div>
        </v-card-text>
        <v-card-actions>
            <v-btn
                    color="orange"
                    text
                    :to="'/projects/'+id"
            >
                Plus d'infos
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        props: {
            id:Number,
            name: String,
            description: String,
            img: String
        }
    }
</script>
