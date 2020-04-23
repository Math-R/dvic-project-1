<template>
    <div class="about">
        <v-img
                class="white--text align-end"
                height="200px"
                :src="project.img"
        >

        </v-img>
        <h1>Titre : {{project.name}}</h1>
        <h2>Description : {{project.description}}</h2>
    </div>
</template>

<script>

    export default {
        components: {},
        props: {
            id: Number
        },
        data: function () {
            return {
                project: null
            }
        },
        mounted() {
            this.fetchProject()
        },
        methods: {
            fetchProject: async function () {
                let res = await this.$http.get('/project/'+this.id);
                this.project = res.data[0];
            }
        }
    }
</script>
