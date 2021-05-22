<template lang="pug">
v-container
  .product-page
    v-row.mt-4
      v-col(cols=5)
        client-only
          lightbox.img(css="h-200 h-lg-250" :cells="1" :items="['https://vktrpnzrv.fvds.ru' + product.photo]")
  
      v-col.spb.mt-4(cols=7)
        .topchick.ml-4
          h2 {{ product.title || 'Название товара' }}
          .subtitle {{ product.category.name }} 
            strong {{ product.distributor.title }}
          .mt-4.fprice(v-html="formatedPrice")
          .mt-4 Залог: 
            span.pledge &nbsp;{{ product.pledge }} ₽


        .d-flex.mt-4.button.ml-4
          v-btn(color="#00bcd4" tile elevation=0) Забронировать

    h1.mt-4 Описание
    div.mt-2.desc {{ product.description || 'Описание товара' }}

</template>

<script>
import api from '~/assets/js/api'
import { formatPrice } from '~/assets/js/helpers'
export default {
  async asyncData({ params, $axios }) {
    let product = {}
    try {
      product = await api.getProductById($axios, params.id)
    } catch (error) {}
    return { product }
  },
  computed: {
    formatedPrice() {
      const time = [this.product.min_hours, this.product.min_minutes].join(':')
      return formatPrice(this.product.price, time)
    },
  },
}
</script>

<style lang="scss" scoped>
.product-page ::v-deep {
  .img {
    height: 300px;
    .h-200 {
      height: 300px;
    }
  }

  .pledge {
    font-size: 20px;
  }

  .fprice {
    background-color: $secondarylight;
    font-size: 28px;
    width: fit-content;
    padding: 0 5px;
    .price {
      font-size: 34px;
      font-weight: bold;
    }
  }

  .spb {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>