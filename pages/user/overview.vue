<template lang="pug">
  v-container
    h1.mt-12.d-flex.align-center
      v-icon.mr-6(color="black" size="38") mdi-snowboard
      |  Ваши объекты проката
    v-row
      v-col.mt-11(cols="2")
        CardAddButton(to="/product/create" second="true")

</template>
<script>
export default {
  middleware: 'auth',
}
</script>

<style lang="scss" scoped>
</style>