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
        <v-card-text class="text--primary">
            <div>{{surname}}</div>
        </v-card-text>
        <v-card-actions>
            <v-btn
                    color="orange"
                    text
                    :to="'/users/'+id"
            >
                Voir
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        props: {
            id: Number,
            name: String,
            surname: String,
        }
    }
</script>
