<template src="./Perform.html"></template>
<style scoped lang="scss" src="./Perform.scss"></style>

<script>

export default {
  name: 'Perform',
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

    handleOnClickToStore() {
      this.path = 'StorePath'
      this.$emit('changePath', this.path)
    },
    handleOnClickToSafety() {
      this.path = 'SafetyPath'
      this.$emit('changePath', this.path)
    },
  }
}
</script>
