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
                nuxt-link(:to="`/product/${product.id}`")
                  v-hover(v-slot="{ hover }")
                    v-card(flat :elevation="hover ? 3 : 0")
                      v-img(
                        :src="'https://vktrpnzrv.fvds.ru' + product.photo"
                        height="200px")
                      v-card-title {{ product.title }}
                      v-card-subtitle {{ product.distributor}}
                      v-card-subtitle 5к
                      v-rating(
                        :value="4"
                        background-color="orange lighten-3"
                        color="orange")

      v-tab-item.mt-5(transition="fade-transition")

</template>

<script>
export default {
  async asyncData({ $axios }) {},
  data() {
    return {
      selectedItem: 'По популярности',
      items: ['По популярности', 'По цене'],
      panels: [1, 2],
      search: '',
      products: [],
    }
  },
  computed: {
    formatProducts() {
      return []
    },
  },
}
</script>