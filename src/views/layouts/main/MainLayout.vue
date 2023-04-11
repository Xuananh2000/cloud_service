<template src="./MainLayout.html"></template>
<style scoped lang="scss" src="./MainLayout.scss"></style>

<script>
import {defineAsyncComponent} from 'vue'

const Header = defineAsyncComponent(() => import('./element/header/Header.vue'))
const Footer = defineAsyncComponent(() => import('./element/footer/Footer.vue'))

import {
  MITT_EVENTS,
} from "@/constants";

export default {
  name: 'MainLayout',
  components: {
    Header,
    Footer,
  },
  data() {
    return {

    }
  },

  created() {
    this.emitter.on(MITT_EVENTS.CLICK_TO_SERVICE_BUTTON, () => this.handleOnClickToServiceButton())
    this.emitter.on(MITT_EVENTS.CLICK_TO_CONTACT_BUTTON, () => this.handleOnClickToContactButton())
    this.emitter.on(MITT_EVENTS.CLICK_TO_SERVICE_HOME, () => this.handleOnClickToHomeButton())
  },

  computed: {

  },

  methods: {
    handleOnClickToServiceButton() {
      this.$router.push({name: 'service'});
    },
    handleOnClickToContactButton() {
      this.$router.push({name: 'contact'});
    },
    handleOnClickToHomeButton() {
      this.$router.push({name: 'home'});
    },
  }
}
</script>
