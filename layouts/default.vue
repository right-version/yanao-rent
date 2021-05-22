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

<style lang="scss">
// reset styles
a {
  text-decoration: none !important;
  color: inherit !important;
}

// slider styles
.lb-modal-close {
  cursor: pointer;
  width: 30px;
  height: 30px;
  right: 30px;
  &::after {
    content: ' ';
    position: absolute;
    top: 0;
    height: 30px;
    background-color: white;
    width: 2px;
    transform: rotate(45deg);
    border-radius: 2px;
  }
  &::before {
    content: ' ';
    top: 0;
    position: absolute;
    height: 30px;
    background-color: white;
    width: 2px;
    transform: rotate(-45deg);
    border-radius: 2px;
  }
}

.lb-modal-prev {
  width: 30px;
  height: 60px;
  &::after {
    content: ' ';
    position: absolute;
    top: 5px;
    height: 30px;
    background-color: white;
    width: 2px;
    transform: rotate(45deg);
    border-radius: 2px;
  }
  &::before {
    content: ' ';
    top: 25px;
    position: absolute;
    height: 30px;
    background-color: white;
    width: 2px;
    transform: rotate(-45deg);
    border-radius: 2px;
  }
}
.lb-modal-next {
  width: 30px;
  height: 60px;
  &::after {
    content: ' ';
    position: absolute;
    top: 5px;
    height: 30px;
    background-color: white;
    width: 2px;
    transform: rotate(-45deg);
    border-radius: 2px;
  }
  &::before {
    content: ' ';
    top: 25px;
    position: absolute;
    height: 30px;
    background-color: white;
    width: 2px;
    transform: rotate(45deg);
    border-radius: 2px;
  }
}
</style>
