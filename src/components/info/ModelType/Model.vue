<template src="./Model.html"></template>
<style scoped lang="scss" src="./Model.scss"></style>

<script>

import { ArrowRightBold } from '@element-plus/icons-vue'

export default {
  name: 'Model',
  components: {
    ArrowRightBold
  },
  data: function () {
    return {
      test: true
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
    }
  }
}
</script>
