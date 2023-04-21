<template src="./Price.html"></template>
<style scoped lang="scss" src="./Price.scss"></style>

<script>

export default {
  name: 'Price',
  components: {

  },
  data: function () {
    return {
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

    handleOnClickToRegister(data) {
      this.$emit('changeComponent', data)
    }

  }
}
</script>
