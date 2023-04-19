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
      path: ''
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
