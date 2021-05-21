export default {
  getProduct(axios) {
    return axios.$get('/product/')
  },
  getProductById(axios, id) {
    return axios.$get(`/product/${id}`)
  },
  postProduct(axios, data) {
    return axios.$post('/product/', data)
  }
}
