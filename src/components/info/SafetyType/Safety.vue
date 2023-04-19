<template src="./Safety.html"></template>
<style scoped lang="scss" src="./Safety.scss"></style>

<script>

import { ArrowRightBold, ArrowLeftBold } from '@element-plus/icons-vue'

export default {
  name: 'Safety',
  components: {
    ArrowRightBold,
    ArrowLeftBold,
  },
  data: function () {
    return {
      test: true,
      path: '',
      nextDestination: '',
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

    handleOnClickToPerform() {
      this.path = 'PerformPath'
      this.$emit('changePath', this.path)
    },
    handleOnClickToSolution(data) {
      this.$emit('changeComponent', data)
    },
  }
}
</script>
