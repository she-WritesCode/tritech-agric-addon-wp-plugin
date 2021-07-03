<template>
  <div class="list-projects py-6 px-6">
    <div v-if="projects.length">
      <div class="grid gap-6 my-8">
        <div class="project-item" v-for="project in projects" :key="project.id">
          <ProjectCard :project="project" />
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center py-28 px-10" v-else>
      <img class="w-32 mb-4" alt="No investments yet" src="https://dashboard.agric.tritech.com.ng/img/box.1cace0d8.png" />
      <div class="text-xl">No projects yet, check back later</div>
    </div>
  </div>
</template>

<script>
import ProjectCard from "./components/ProjectCard.vue";
import axios from 'axios';

const url = 'https://tritech-agric.herokuapp.com'

export default {
  name: 'App',
  components: { ProjectCard },
  data() {
    return {
      limit: -1,
      xPage: 1,
      projects: [],
      meta: {
        total: 0,
        count: 0,
        pageCount: 0,
        page: 0,
      }
    }
  },
  computed: {
    query() {
      return `join=investments&join=categories&join=updates&sort=id,ASC`;
    },
  },
  methods: {
    async getProjects() {
      const response = (await axios.get(`${url}/projects?${this.query}`));
      // const {data: projects, ...meta} = response.data;
      this.projects = response.data;
      // this.meta = meta;
    }
  },
  mounted() {
    console.log('mounted')
    this.getProjects().then(() => console.log('done'));
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}
</style>
