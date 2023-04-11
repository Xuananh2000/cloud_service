<template src="./Info.html"></template>
<style scoped lang="scss" src="./Info.scss"></style>

<script>

import {defineAsyncComponent} from 'vue'

const ModelPath = defineAsyncComponent(() => import('./ModelType/Model.vue'))
const PerformPath = defineAsyncComponent(() => import('./PerformType/Perform.vue'))
const SafetyPath = defineAsyncComponent(() => import('./SafetyType/Safety.vue'))
const SolutionPath = defineAsyncComponent(() => import('./SolutionType/Solution.vue'))
const StorePath = defineAsyncComponent(() => import('./StoreType/Store.vue'))
const TechPath = defineAsyncComponent(() => import('./TechType/Tech.vue'))
const UserPath = defineAsyncComponent(() => import('./UserInfo/User.vue'))

export default {
  name: 'Info',
  components: {
    ModelPath,
    PerformPath,
    SafetyPath,
    SolutionPath,
    StorePath,
    TechPath,
    UserPath,
  },
  data: function () {
    return {
      curPage: 'ModelPath',
    }
  },

  computed: {

    watch: {}
  },

  created() {
    this.init()
  },

  methods: {

    init() {},

    handleChangePath(data) {
      this.curPage = data
    },
  }
}
</script>
