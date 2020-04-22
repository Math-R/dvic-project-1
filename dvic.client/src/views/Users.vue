<template>
    <div class="about">
        <h1>Projects</h1>
        <div v-for="user  in users" :key="user.id">
            <UserCard v-bind="user"></UserCard>
        </div>

    </div>
</template>

<script>

import UserCard from "../components/UserCard";
    export default {
        components: {
            UserCard
        },
        data: function () {
            return {
                users:null
            }
        },
        mounted() {
            this.fetchUsers()
        },
        methods: {
            fetchUsers: async function () {
                let res = await this.$http.get('/user');
                this.users = res.data;
            }
        }
    }
</script>
