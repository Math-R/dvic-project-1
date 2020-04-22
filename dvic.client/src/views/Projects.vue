<template>
    <div class="about">
        <h1>Projects</h1>
        <div v-for="project  in projects" :key="project.id">
          <ProjectCard v-bind="project"></ProjectCard>
        </div>

    </div>
</template>

<script>
    import ProjectCard from "../components/ProjectCard";

    export default {
        components: {
            ProjectCard
        },
        data: function () {
          return {
            projects:null
          }
        },
        mounted() {
            this.fetchProject()
        },
        methods: {
            fetchProject: async function () {
                let res = await this.$http.get('/project');
                this.projects = res.data;
            }
        }
    }
</script>
