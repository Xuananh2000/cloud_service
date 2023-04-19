<template src="./Tech.html"></template>
<style scoped lang="scss" src="./Tech.scss"></style>

<script>

import { ArrowRightBold, ArrowLeftBold } from '@element-plus/icons-vue'

export default {
  name: 'Tech',
  components: {
    ArrowRightBold,
    ArrowLeftBold,
  },
  data: function () {
    return {
      test: true,
      path: '',
      radio: 1,
      value: '',
      options: [
        {
          value: 'Option1',
          label: 'PHP Framework',
        },
        {
          value: 'Option2',
          label: 'Nodejs',
        },
        {
          value: 'Option3',
          label: 'Nodejs Typescript',
        },
        {
          value: 'Option4',
          label: 'Python Origin',
        },
        {
          value: 'Option5',
          label: 'Python Framework',
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
