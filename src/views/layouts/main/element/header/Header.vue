<template src="./Header.html"></template>
<style scoped lang="scss" src="./Header.scss"></style>

<script>

import {
  MITT_EVENTS,
} from '@/constants'


export default {
  name: 'Header',
  components: {
  },
  props: {
  },
  data: function () {
    return {

    };
  },
  computed: {
  },
  methods: {
    handleClickToHome() {
      this.emitter.emit(MITT_EVENTS.CLICK_TO_SERVICE_HOME)
    },
    handleClickToService() {
      this.emitter.emit(MITT_EVENTS.CLICK_TO_SERVICE_BUTTON)
    },
    handleClickToContact() {
      this.emitter.emit(MITT_EVENTS.CLICK_TO_CONTACT_BUTTON)
    },
  },
  created() {
  },
}
</script>
