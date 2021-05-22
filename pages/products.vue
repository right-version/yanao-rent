<template lang="pug">
  v-container
    v-tabs(right)
      v-tab Списком
      v-tab На карте

      v-tab-item.mt-5.mb-5.ml-1(transition="fade-transition")
        v-row
          v-col(cols=3)
            v-card.py-3(elevation=3)
              v-expansion-panels(flat multiple v-model="panels")
                v-expansion-panel
                  v-expansion-panel-header Item
                  v-expansion-panel-content Lorem ipsum dolor sit a

          v-col(cols=9)
            .d-flex.align-center.justify-space-between
              v-text-field(
                v-model="search"
                solo
                flat
                placeholder="Поиск по объявлениям"
                single-line
                prepend-icon="mdi-magnify"
                hide-details
              )
              v-select(
                v-model="selectedItem"
                :items="items"
                hide-details
                prepend-icon="mdi-sort"
                style="max-width: 250px;"
                single-line
                solo
                flat)
            v-divider
            v-row.mt-4.align-center
              v-col(v-for="(product, index) in formatProducts" :key="'product-' + index" cols=4)
                CardProduct(
                  :id="product.id"
                  :photo="product.photo"
                  :title="product.title"
                  :distributor="product.distributor"
                  :rating="4"
                  :price="product.price"
                  :min_hours="product.min_hours"
                  :min_minutes="product.min_minutes"
                  :amount="product.amount"
                  :pledge="product.pledge"
                )

      v-tab-item.mt-5(transition="fade-transition")

</template>

<script>
import api from '~/assets/js/api'
export default {
  async asyncData({ $axios }) {
    let products = []
    try {
      products = await api.getProduct($axios)
    } catch (e) {
      console.error(e)
    }
    return { products }
  },
  data() {
    return {
      selectedItem: 'По популярности',
      items: ['По популярности', 'По цене'],
      panels: [1, 2],
      search: '',
    }
  },
  computed: {
    formatProducts() {
      return this.products
    },
  },
}
</script>