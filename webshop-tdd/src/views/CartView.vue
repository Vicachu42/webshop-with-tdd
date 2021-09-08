<template>
  <div>
    <h2>Cart view</h2>
    <CartItem />
  </div>
</template>

<script>
import CartItem from '../components/CartItem.vue';

export default {
  name: 'CartView',
  components: {
    CartItem
  }
}
</script>

<style>

</style>