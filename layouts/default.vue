<template lang="pug">
  v-app
    HeaderDrawer(v-model="drawer")
    Header(@clickBurger="drawer = true")

    v-main
      nuxt

    Footer
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    }
  },
}
</script>

