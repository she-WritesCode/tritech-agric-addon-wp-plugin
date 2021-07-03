<template>
  <div class="">
    <div class="shadow-xl bg-white rounded-2xl hover:shadow-2xl">
      <div class="grid md:grid-cols-3 gap-0">
        <div class="md:col-span-1 bg-primary-300 rounded-t-2xl md:rounded-tr-none md:rounded-tl-2xl relative">
          <img
              class="object-cover w-full h-full rounded-t-2xl md:rounded-tr-none md:rounded-tl-2xl object-center"
              :src="project?.image"
              :alt="project?.title"
          />
        </div>
        <div class="md:col-span-2 py-6 px-4">
          <div class="text-xs text-gray-500" v-if="project?.categories">
            {{ project?.categories.map(category => category.title).join(",") }}
          </div>
          <a class="cursor-pointer hover:text-primary-700"
             :href="`https://dashboard.agric.tritech.com.ng/projects/${project.slug}`"
             target="_blank" >
            <div class="font-semibold text-xl">{{ project?.title }}</div>
          </a>
          <div class="text-base text-gray-500" v-if="project?.categories">
            {{ project?.location }}
          </div>

          <div class="text-2xl font-black text-primary-500 my-2">
            {{ toCurrency(project?.fee) }}
          </div>
          <div class="mb-4 text-lg">
            <span class="text-primary-600">{{ project?.roi }}%</span> returns in
            <span class="text-primary-600"> {{ project?.duration }}</span>
            month(s)
          </div>
          <div class="grid grid-cols-2 gap-4 text-lg mb-4">
            <div>
              <div class="font-semibold">{{ project?.availableSlots }}</div>
              <div class="text-base">Slots Available</div>
            </div>
            <div>
              <div class="font-semibold">{{ project?.slotsCapacity }}</div>
              <div class="text-base">Per Slot</div>
            </div>
          </div>
          <div class="mt-2 flex flex-wrap gap-3">
            <a
                :href="`https://dashboard.agric.tritech.com.ng/projects/${project.slug}`"
                target="_blank"
                class="cursor-pointer bg-primary-500 border-2 border-primary-500 px-3 py-2 rounded-full text-sm text-white font-bold shadow hover:shadow-lg hover:border-primary-600 focus:text-primary-500 hover:bg-primary-600"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
      <!-- <div class="text-sm uppercase" v-if="progress">
        <ProgressBar :value="progress" class="rounded-b-2xl h-24 md:h-6">
          <div class="flex flex-wrap flex-col-reverse justify-center md:flex-row md:justify-between items-center font-medium pt-1 pb-2 px-2">
            <div> <b>{{ toCurrency(current) }}</b> OF <b>{{ toCurrency(total) }}</b> FUNDED BY <b>{{ project.investments.length }}</b> INVESTMENT(S)</div>
            <div> {{ progress.toFixed(2) }}%</div>
          </div>
        </ProgressBar>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { toCurrency } from '../utils/Helpers'
import { defineComponent } from 'vue'
import { ProjectModel } from '../utils/ProjectModel'
// import ProgressBar from 'primevue/progressbar'

export default defineComponent({
  name: 'ProjectCard',
  // components: {ProgressBar},
  props: {
    project: {
      type: ProjectModel,
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
  setup() {
    return {
      toCurrency,
    }
  },
})
</script>

<style scoped>
.p-progressbar .p-progressbar-value {
  @apply rounded-b-2xl rounded-t-none bg-primary-200;
}
</style>