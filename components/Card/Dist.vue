<template lang="pug">
  .dist-card
    v-card(outlined elevation=0)
      .d-flex
        div
          v-card-title.text-h5(v-text="title")
          v-card-subtitle(v-text="adress")
          v-card-subtitle
            a(:href="url" target="_blank")
        
        v-avatar.ma-3(size="125" tile)
          v-img(:src="photo")

      v-card-actions.pb-4
        v-btn.ml-2.mt-5(color="#ad1457" dark @click="$emit('click', id)")
          | Посмотреть объекты аренды

</template>

<script>
export default {
  props: ['id', 'title', 'photo', 'adress', 'url'],
}
</script>

<style lang="scss" scoped>
.dist-card {
  margin-left: 5px;
}
</style>