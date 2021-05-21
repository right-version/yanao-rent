<template lang="pug">
  v-app-bar(flat app)
    v-app-bar-nav-icon.hidden-md-and-up(@click="$emit('clickBurger')")
    v-container.py-0.hidden-sm-and-down
      v-row.align-center.justify-space-between
        nuxt-link(to="/" nuxt)
          h2.logo ЯНАО Шеринг

        .d-flex.align-center
          v-btn(
            color="white"
            elevation=0
            v-for="(link, index) in mainLinks"
            :key="'nav-link-' + index"
            :to="link.to"
            nuxt
            text
          ) {{ link.title }}

</template>

<script>
import { mainLinks } from './links'
export default {
  name: 'AppHeader',
  data: () => ({ mainLinks }),
}
</script>

<style lang="scss" scoped>
header {
  position: relative;
  height: 64px;
  background: transparent !important;
  transition: all 0.4s linear;
  backdrop-filter: saturate(180%) blur(20px) !important;

  &::after {
    content: ' ';
    position: absolute;
    background-color: $primarydark !important;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -10;
    opacity: 0.5;
  }

  .logo {
    color: white;
  }
}
</style>