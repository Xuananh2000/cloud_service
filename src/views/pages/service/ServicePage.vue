<template src="./ServicePage.html"></template>
<style scoped lang="scss" src="./ServicePage.scss"></style>

<script>
import {defineAsyncComponent} from 'vue'

const Solution = defineAsyncComponent(() => import('../../../components/solution/Solution.vue'))
const Info = defineAsyncComponent(() => import('../../../components/info/Info.vue'))
const Register = defineAsyncComponent(() => import('../../../components/register/Register.vue'))

export default {
  name: 'ServicePage',
  components: {
    Solution,
    Info,
    Register
  },
  data: function () {
    return {
      curPage: 'Info',
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
  }
}
</script>
