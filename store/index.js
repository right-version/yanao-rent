export const state = () => ({
  alert: 0,
  alertText: '',

  user: {}
})

export const mutations = {
  alert(state, { time, text }) {
    state.alert = time
    state.alertText = text
  }
}

// this.$store.commit('alert', { time: 2000, text: '+ 1' })
