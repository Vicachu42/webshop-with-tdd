<template>
  <div>
    <img src="../assets/basket.png" alt="basket" class="shopping-basket" @click="$emit('toggle')">
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  methods: {
    emitToggle() {
      this.$emit('toggle')
    }
  }
}
</script>

<style scoped>
.shopping-basket {
  background-color: black;
  border: none;
  width: 35px;
  margin-top: 11px;
}
</style>