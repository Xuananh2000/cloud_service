<template src="./Store.html"></template>
<style scoped lang="scss" src="./Store.scss"></style>

<script>

import { ArrowRightBold, ArrowLeftBold } from '@element-plus/icons-vue'

export default {
  name: 'Store',
  components: {
    ArrowRightBold,
    ArrowLeftBold,
  },
  data: function () {
    return {
      test: true,
      path: '',
      radio: 1,
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
    handleOnClickToTech() {
      this.path = 'TechPath'
      this.$emit('changePath', this.path)
    },
    handleOnClickToPerform() {
      this.path = 'PerformPath'
      this.$emit('changePath', this.path)
    },
  }
}
</script>
