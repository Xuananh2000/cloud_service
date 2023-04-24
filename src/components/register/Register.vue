<template src="./Register.html"></template>
<style scoped lang="scss" src="./Register.scss"></style>

<script>

import {defineAsyncComponent} from "vue";

const Invoice = defineAsyncComponent(() => import('./Invoice/Invoice.vue'))

export default {
  name: 'Register',
  components: {
    Invoice,
  },
  data: function () {
    return {
      isSuccessed: false,
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

    Submit(data) {
      this.isSuccessed = data
    },
  }
}
</script>
