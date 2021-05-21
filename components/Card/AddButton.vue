<template lang="pug">
  nuxt-link(:to="to")
    v-card(height="200" min-width="200" :class="{second: second}")
      v-hover(v-slot="{ hover }")
        v-row.fill-height(align="center" justify="center")
          v-icon(color="white" :size="!hover ? 32 : 48" ) mdi-plus-box-multiple
</template>

<script>
export default {
  props: ['to', 'second'],
}
</script>

<style lang="scss">
.v-card {
  background-color: $primarydark !important;
}
.second {
  background-color: $secondarydark !important;
}
a {
  text-decoration: none !important;
  color: inherit !important;
}
</style>