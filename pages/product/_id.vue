<template lang="pug">
v-container
  div
    v-row
      v-col(cols=6)
        v-img(:src="'https://vktrpnzrv.fvds.ru' + product.photo")
      v-col(cols=6)
        h2 {{ product.title || 'Название товара' }}
        v-rating(:value="5" color="orange")
        h2 {{ product.price || 'Цена товара' }}
        div {{ product.description || 'Описание товара' }}

        .d-flex
          v-btn Забронировать
          v-btn Уничтожение

    h1 Тут типо карта
    v-img(src="https://picsum.photos/id/11/500/300")

</template>

<script>
import api from '~/assets/js/api'
export default {
  async asyncData({ params, $axios }) {
    let product = {}
    try {
      product = await api.getProductById($axios, params.id)
    } catch (error) {}
    return { product }
  },
}
</script>