<template src="./ContactPage.html"></template>
<style scoped lang="scss" src="./ContactPage.scss"></style>

<script>

export default {
  name: 'ContactPage',
  components: {
  },
  data: function () {
    return {
      form: {
        name: '',
        phone: '',
        mail: '',
        info: '',
      },
      value: '',
      options: [
        {
          value: 'Option1',
          label: 'Deploy ứng dụng'
        },
        {
          value: 'Option2',
          label: 'Giải pháp và Deploy AWS',
        },
        {
          value: 'Option3',
          label: 'Giải pháp và Deploy AZURE',
        },
        {
          value: 'Option4',
          label: 'Tùy chỉnh theo nhu cầu đặc biệt',
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
  }
}
</script>
