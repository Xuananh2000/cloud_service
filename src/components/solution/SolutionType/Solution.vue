<template src="Solution.html"></template>
<style scoped lang="scss" src="Solution.scss"></style>

<script>

export default {
  name: 'Solution',
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

    handleOnClickToModel() {
      this.path = 'ModelPath'
      this.$emit('changePath', this.path)
    },

    handleOnClickToRegister(data) {
      this.step = data
    },

  }
}
</script>
