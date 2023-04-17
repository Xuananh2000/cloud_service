<template src="./Tech.html"></template>
<style scoped lang="scss" src="./Tech.scss"></style>

<script>

import { ArrowRightBold, ArrowLeftBold } from '@element-plus/icons-vue'

export default {
  name: 'Tech',
  components: {
    ArrowRightBold,
    ArrowLeftBold
  },
  data: function () {
    return {
      test: true,
      path: '',
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

    handleOnClickToModel() {
      this.path = 'ModelPath'
      this.$emit('changePath', this.path)
    },
    handleOnClickToStore() {
      this.path = 'StorePath'
      this.$emit('changePath', this.path)
    },
  }
}
</script>
