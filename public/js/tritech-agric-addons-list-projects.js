const url = 'https://tritech-agric.herokuapp.com'
const ListProjects = {
    data() {
        return {
            limit: 5,
            xPage: 1,
            projects: [],
            meta: {
                total: 0,
                count: 0,()
                pageCount: 0,
                page: 0,
            }
        }
    },
    computed: {
        query() {
            return `join=investments&join=categories&join=updates&sort=id,ASC&limit=${limit.value}&page=${xPage.value}`;
        },
    },
    methods: {
        async getProjects() {
            const response = (await axios.get(`${url}/projects/${id}?${query.value}`));
            const {data: projects, ...meta} = response.data;
            this.projects = projects;
            this.meta = meta;
        }
    },
    mounted() {
        console.log('mounted')
        this.getProjects().then(r => console.log('done'));
    },
    name: 'ListProjects',
    async setup() {
        /*
        const route = useRoute();
        const limit = ref(route.query.limit ? +`${route.query.limit}` : 20);
        const xPage = ref(route.query.page ? +`${route.query.page}` : 1);
        */

        // const offset = computed(() => total - page * count)
        return {
            /* limit,
            total, count, pageCount, page,
            // offset, // https://unpkg.com/vue@3.1.4/dist/vue.global.prod.js
            projects, */
        }
    },
}

const app = Vue.createApp(ListProjects)
/*
app.component('project-card', {
    name: 'ProjectCard',
    props: {
        project: {
            type: Object,
            required: true,
        }
    },
    computed: {
        progress() {
            return ((this.project.totalSlots - this.project.availableSlots) / this.project.totalSlots) * 100
        },
        total() {
            return this.project.totalSlots * this.project.fee;
        },
        current() {
            return (this.project.totalSlots - this.project.availableSlots)  * this.project.fee;
        }
    },
    el: `#project-card`
})
*/

app.mount('#list-projects')