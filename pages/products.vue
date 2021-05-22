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
                  v-expansion-panel-header Ваш город
                  v-expansion-panel-content
                    v-select
                v-expansion-panel
                  v-expansion-panel-header Характеристики товара
                  v-expansion-panel-content
                    v-select(label="Категория")
                    v-select(label="Прокат")
                    p С залогом - без залога
                    p Доступные сегодня
                v-expansion-panel
                  v-expansion-panel-header Цена от - до
                  v-expansion-panel-content

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
              p.ml-3(v-if="formatProducts.length === 0") Ничего не найдено 😢

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
      let copy = JSON.parse(JSON.stringify(this.products))

      // Поиск
      if (this.search) {
        copy = copy.filter((el) => {
          return (el.title + ' ' + el.distributor)
            .toLowerCase()
            .includes(this.search.toLowerCase())
        })
      }

      // Сортировка
      if (this.selectedItem === 'По популярности') {
        copy = copy.sort((a, b) => {
          return b.price - a.price
        })
      } else {
        copy = copy.sort((a, b) => {
          return a.price - b.price
        })
      }

      return copy
    },
  },
}
</script>