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
      value: '',
      options: [
        {
          value: 'Option1',
          label: 'Option1',
        },
        {
          value: 'Option2',
          label: 'Option2',
        },
        {
          value: 'Option3',
          label: 'Option3',
        },
        {
          value: 'Option4',
          label: 'Option4',
        },
        {
          value: 'Option5',
          label: 'Option5',
        },
      ]
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
