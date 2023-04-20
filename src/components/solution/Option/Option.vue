<template src="./Option.html"></template>
<style scoped lang="scss" src="./Option.scss"></style>

<script>

export default {
  name: 'Option',
  components: {

  },
  data: function () {
    return {
      step: 1,
      path: '',
      activeIndex1: null,
      activeIndex2: null,
      activeIndex3: null,
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

    handleSelection1(data) {
      this.activeIndex1 = data
    },
    handleSelection2(data) {
      this.activeIndex2 = data
    },
    handleSelection3(data) {
      this.activeIndex3 = data
    },

  }
}
</script>
