<template>
    <div class="about">
        <h1>Nom : {{user.name}}</h1>
        <h2>Prénom : {{user.surname}}</h2>
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
                user: null
            }
        },
        mounted() {
            this.fetchUser()
        },
        methods: {
            fetchUser: async function () {
                let res = await this.$http.get('/user/'+this.id);
                this.user = res.data[0];
            }
        }
    }
</script>
