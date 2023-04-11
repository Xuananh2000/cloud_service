<template src="./Store.html"></template>
<style scoped lang="scss" src="./Store.scss"></style>

<script>

export default {
  name: 'Store',
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
    handleOnClickToTech() {
      this.path = 'TechPath'
      this.$emit('changePath', this.path)
    },
    handleOnClickToPerform() {
      this.path = 'PerformPath'
      this.$emit('changePath', this.path)
    },
  }
}
</script>
