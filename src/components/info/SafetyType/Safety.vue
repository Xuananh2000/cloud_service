<template src="./Safety.html"></template>
<style scoped lang="scss" src="./Safety.scss"></style>

<script>

export default {
  name: 'Safety',
  components: {

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

    handleOnClickToPerform() {
      this.path = 'PerformPath'
      this.$emit('changePath', this.path)
    },
    handleOnClickToSolution() {
      this.path = 'SolutionPath'
      this.$emit('changePath', this.path)
    },
  }
}
</script>
