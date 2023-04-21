<template src="./Solution.html"></template>
<style scoped lang="scss" src="./Solution.scss"></style>

<script>

import { ArrowLeftBold } from '@element-plus/icons-vue'

import {defineAsyncComponent} from "vue";

const Option = defineAsyncComponent(() => import('./Option/Option.vue'))
const Price = defineAsyncComponent(() => import('./Price/Price.vue'))

export default {
  name: 'Solution',
  components: {
    ArrowLeftBold,
    Option,
    Price,
  },
  data: function () {
    return {
      curPage: 'Option',
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

    handleOnClickToModel(data) {
      this.$emit('changeComponent', data)
    },

    handleOnClickToRegister() {
      this.curPage = 'Price'
    },

    handleChangeComponent(data) {
      this.$emit('changeComponent', data)
    }
  }
}
</script>
